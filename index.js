const express = require("express");
const pool = require("./database");
const app = express();
const cors = require("cors");
const port = 8080;

//middleware
app.use(cors());
app.use(express.json()); //req.body

////////////////////////////////////HERE THE API STARTS////////////////////////////////////

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ TABLE @ TODO @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@Developed By: Muhammad-Bilal-7896@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//Get All the Data from the Database @Tested
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
//Get All the Data from the Database @Tested

//get a particular todo with given id @Tested
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
//get a particular todo with given id @Tested

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
//Post A Todo @Tested

//Update A Todo With A Given Id @Tested
app.put("/todo/:id", (req, res) => {
    const id = req.params.id;
    const { title, description, completed } = req.body;
    const todo = pool
        .query("UPDATE todo SET title = $1, description = $2, completed = $3 WHERE id = $4 RETURNING *",
            [title, description, completed, id],
            (error, results) => {
                if (error) {
                    throw error;
                } else {
                    console.log("After Updating Todo The result is :", results.rows);
                }
                res.status(200).send(`Todo Updated Successfully With Id=${id}`);
                // res.end();
            })
});
//Update A Todo With A Given Id @Tested

//Delete A Todo
app.delete("/todo/:id", (req, res) => {
    const id = req.params.id;
    const todo = pool
        .query("DELETE FROM todo WHERE id = $1", [id],
            (error, results) => {
                if (error) {
                    throw error;
                } else {
                    console.log("After Deleting Todo The result is :", results.rows);
                }
                res.status(200).send(`Todo Deleted Successfully With Id=${id}`);
                // res.end();
            });
});
//Delete A Todo

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ TABLE @ todo @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@Developed By: Muhammad-Bilal-7896@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// ########################################################################################
// ########################################################################################
// ##################################### TABLE @ student ##################################
// #############################Developed By: Muhammad-Bilal-7896##########################
// ########################################################################################
//Get All the Data from the Database table=student @Tested
app.get("/student", async (req, res) => {
    const todo = await pool.
        query("SELECT * FROM student ORDER BY id ASC")
        .then((results) => {
            return results.rows;
        }).catch(err => {
            console.log(err);
        });
    res.status(200).json(todo);
});
//Get All the Data from the Database table=student @Tested

//get a particular Student with given id @Tested
app.get("/student/:id", async (req, res) => {
    const id = req.params.id;
    const todo = await pool
        .query("SELECT * FROM student WHERE id = $1", [id])
        .then((results) => {
            return results.rows[0];
        }).catch(err => {
            console.log(err);
        });
    console.log(`Student With Particular Id=${id} ==>`);
    console.log(todo);
    if (todo) {
        res.status(200).json(todo);
    } else {
        res.status(404).json({ message: "Student Not Found" });
    }
});
//get a particular Student with given id @Tested

//Post A Student
app.post("/student", async (req, res) => {
    const { first_name, last_name, profile_picture } = req.body;
    const todo = await pool
        .query("INSERT INTO student (first_name, last_name, profile_picture) VALUES ($1, $2, $3) RETURNING *", //RETURNING * is used to return the inserted row
            [first_name, last_name, profile_picture])
        .then((results) => {
            return results.rows;
        }).catch(err => {
            console.log(err);
        });
    res.status(201).send(`Student Added Successfully with Name=${first_name}${last_name}`);
    res.end();
});
//Post A Student @Tested

//Update A Student With A Given Id @Tested
app.put("/student/:id", async (req, res) => {
    const id = req.params.id;
    const { first_name, last_name, profile_picture } = req.body;
    const student = await pool
        .query("UPDATE student SET first_name = $1, last_name = $2, profile_picture = $3 WHERE id = $4 RETURNING *",
            [first_name, last_name, profile_picture, id],
            (error, results) => {
                if (error) {
                    throw error;
                } else {
                    console.log("After Updating Student The result is :", results.rows);
                }
                // console.log(`After Updating Student with id=${id}`, results.rows);
                res.status(200).send(`Student Updated Successfully With Id=${id}`);
                // res.end();
            });
});
//Update A Student With A Given Id @Tested

//Delete A Student @Tested
app.delete("/student/:id", async (req, res) => {
    const id = req.params.id;
    const todo = await pool
        .query("DELETE FROM student WHERE id = $1", [id],
            (error, results) => {
                if (error) {
                    throw error;
                } else {
                    console.log("After Deleting Student The result is :", results.rows);
                }
                res.status(200).send(`Student Deleted Successfully With Id=${id}`);
                // res.end();
            });
});
//Delete A Student @Tested
// ########################################################################################
// ########################################################################################
// ##################################### TABLE @ student ##################################
// #############################Developed By: Muhammad-Bilal-7896##########################
// ########################################################################################


// ########################################################################################
// ########################################################################################
// ##################################### TABLE @ book ##################################
// #############################Developed By: Muhammad-Bilal-7896##########################
// ########################################################################################

//To get all data from book table
app.get("/book", async (req, res) => {
    const book = await pool.
        query("SELECT * FROM book ORDER BY id ASC")
        .then((results) => {
            return results.rows;
        }).catch(err => {
            console.log(err);
        });
    res.status(200).json(book);
});

//To get specific book with given id
app.get("/book/:id", async (req, res) => {
    const id = req.params.id;
    const book = await pool
        .query("SELECT * FROM book WHERE id = $1", [id])
        .then((results) => {
            return results.rows[0];
        }).catch(err => {
            console.log(err);
        });
    console.log(`Book With Particular Id=${id} ==>`);
    console.log(book);
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: "Book Not Found" });
    }
});
//To get specific book with given id

//To post a book data
app.post("/book", async (req, res) => {
    const { book_name, author, borrowed_by, borrowed_date, return_date } = req.body;
    const book = await pool
        .query("INSERT INTO book (book_name, author, borrowed_by, borrowed_date, return_date) VALUES ($1, $2, $3, $4, $5) RETURNING *", //RETURNING * is used to return the inserted row
            [book_name, author, borrowed_by, borrowed_date, return_date])
        .then((results) => {
            return results.rows;
        }).catch(err => {
            console.log(err);
        });
    res.status(201).send(`Book Added Successfully with Name=${book_name}`);
    res.end();
});
//To post a book data

//Update a book data with a specify id
app.put("/book/:id", async (req, res) => {
    const id = req.params.id;
    const { book_name, author, borrowed_by, borrowed_date, return_date } = req.body;
    const book = await pool
        .query("UPDATE book SET book_name = $1, author = $2, borrowed_by = $3, borrowed_date = $4, return_date = $5 WHERE id = $6 RETURNING *",
            [book_name, author, borrowed_by, borrowed_date, return_date, id],
            (error, results) => {
                if (error) {
                    throw error;
                } else {
                    console.log(`After Updating Book with id=${id}`, results.rows);
                }
                res.status(200).send(`Book Updated Successfully With Id=${id}`);
                // res.end();
            });
});
//Update a book data with a specify id

//Delete a book RECORD WITH GIVEN ID
app.delete("/book/:id", async (req, res) => {
    const id = req.params.id;
    const book = await pool
        .query("DELETE FROM book WHERE id = $1", [id],
            (error, results) => {
                if (error) {
                    throw error;
                } else {
                    console.log(`After Deleting Book with id=${id}`, results.rows);
                }
                res.status(200).send(`Book Deleted Successfully With Id=${id}`);
                // res.end();
            });
});
//Delete a book RECORD WITH GIVEN ID

// ########################################################################################
// ########################################################################################
// ##################################### TABLE @ book ##################################
// #############################Developed By: Muhammad-Bilal-7896##########################
// ########################################################################################


//////////////////////////////////////HERE THE API ENDS////////////////////////////////////

app.listen(port, () => {
    console.log(`PostgresSQL backend server has started on port ${port}`);
});

