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

app.listen(port, () => {
    console.log(`PostgresSQL backend server has started on port ${port}`);
});

