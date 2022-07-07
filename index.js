const express = require("express");
const pool = require("./database");
const app = express();
const cors = require("cors");
const port = 8080;

//middleware
app.use(cors());
app.use(express.json()); //req.body

app.get("/todo", async (req, res) => {
    const todo = await pool.
        query("SELECT * FROM todo ORDER BY id ASC")
        .then((results) => {
            return results.rows;
        }).catch(err => {
            console.log(err);
        });
    res.status(200).json(todo);
});

//get a particular todo with given id
app.get("/todo/:id", async (req, res) => {
    const id = req.params.id;
    const todo = await pool
        .query("SELECT * FROM todo WHERE id = $1", [id])
        .then((results) => {
            return results.rows[0];
        }).catch(err => {
            console.log(err);
        });
    console.log(`Todo With Particular Id=${id} ==>`);
    console.log(todo);
    if (todo) {
        res.status(200).json(todo);
    } else {
        res.status(404).json({ message: "Todo Not Found" });
    }
});
//get a particular todo with given id

//Post A Todo
app.post("/todo", async (req, res) => {
    const { title, description, completed } = req.body;
    const todo = await pool
        .query("INSERT INTO todo (title, description, completed) VALUES ($1, $2, $3) RETURNING *", //RETURNING * is used to return the inserted row
            [title, description, completed])
        .then((results) => {
            return results.rows;
        }).catch(err => {
            console.log(err);
        });
    res.status(201).send(`Todo Added Successfully`);
    res.end();
});
//Post A Todo

//Update A Todo With A Given Id
app.put("/todo/:id", async (req, res) => {
    const id = req.params.id;
    const { title, description, completed } = req.body;
    const todo = await pool
        .query("UPDATE todo SET title = $1, description = $2, completed = $3 WHERE id = $4 RETURNING *",
            [title, description, completed, id])
        .then((results) => {
            console.log(results.rows);
        }
        ).catch(err => {
            console.log(err);
        });
    res.status(200).send(`Todo Updated Successfully With Id=${id}`);
    // res.end();
});
//Update A Todo With A Given Id

//Delete A Todo
app.delete("/todo/:id", async (req, res) => {
    const id = req.params.id;
    const todo = await pool
        .query("DELETE FROM todo WHERE id = $1", [id])
        .then((results) => {
            console.log(`Rows after deleting element with id =${id},the rows are ==> ${results.rows}`);
        }).catch(err => {
            console.log(err);
        });
    res.status(200).send(`Todo Deleted Successfully With Id=${id}`);
    // res.end();
});
//Delete A Todo

app.listen(port, () => {
    console.log(`PostgresSQL backend server has started on port ${port}`);
});

