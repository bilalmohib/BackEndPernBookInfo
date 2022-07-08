# 🏁 Getting Started with the BackEndPernBookInfo API 


## 🤔 What is the BackEndPernBookInfo API? 
It is the API that allows you to fetch,update,delete and perform CRUD operations for the PostgreeSQL database used in the project.This is a Restful API for the PostgreeSQL Database so that it can be used with the backend.

## 🔧 Tools Used 
- NodeJS
- ExpressJS
- KnexJS for Migrations And Schema creation
- PostgreeSQL

## 🧐 Operations that can be performed on the BackEndPernBookInfo API

It performs the following operations for both tables **student** and **book**:
- **GET** — an HTTP request to Read (Used to read an existing resource)
- **POST** — an HTTP request to Create (Used to create and add a resource)
- **PUT** —an HTTP request to Update(client sends data that updates the entire resource)(Used to update an entire resource)
- **PATCH** — HTTP request to Update (client sends partial data that is to be updated without modifying the entire data)(Used to partially update a resource)
- **DELETE** — HTTP request to Delete (Used to delete an entire resource)

## 🪀 API Routes
### 1. The API has the following routes for student table crud:
- **GET [http://localhost:8080/student](http://localhost:8080/student)** — returns a list of all students
- **GET [http://localhost:8080/student/id](http://localhost:8080/student/id)** — returns a list of a single student by provided id
- **POST [http://localhost:8080/student/](http://localhost:8080/student)** — to Post a JSON object to create a new student
- **PUT [http://localhost:8080/student/id](http://localhost:8080/student/id)** — to Update a student by provided id 
- **DELETE [http://localhost:8080/student/id](http://localhost:8080/student/id)** — to Delete a student by provided id

### 2. The API has the following routes for **book** table crud:
- **GET [http://localhost:8080/book](http://localhost:8080/book)** — returns a list of all books
- **GET [http://localhost:8080/book/id](http://localhost:8080/book/id)** — returns a list of a single book by provided id
- **POST [http://localhost:8080/book/](http://localhost:8080/book)** — to Post a JSON object to create a new book
- **PUT [http://localhost:8080/book/id](http://localhost:8080/book/id)** — to Update a book by provided id 
- **DELETE [http://localhost:8080/book/id](http://localhost:8080/book/id)** — to Delete a book by provided id

## 🖥️ How do I use the BackEndPernBookInfo API?

- **IMPORTANT**:Remember that the backend will never run until you have postgresql installed on your system.

So for getting started you need to have a [PostgreeSQL](https://www.postgresql.org/) database installed on your system.
To Download PostgreeSQL you can go to their downloads page here : [https://www.postgresql.org/download/](https://www.postgresql.org/download/)

## 🏃🏾 Starting the project
- Download the repository and run `npm install`
- In the root of the project run `node index.js` or if you have nodemon installed `nodemon index.js`
- If PostgreeSQL is installed on your system the backend will be started on port 8080 at [http://localhost:8080/](http://localhost:8080/)

## 📋 Tables Created in the Database
- **student** ——> This table contains the first_name,last_name and profile_photo in its columns.
- **book** ——> This table creates the columns for the book name, author, borrowed by (student name) or empty, date of borrow, expected date of return

## 