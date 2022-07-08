# 🏁 Getting Started with the BackEndPernBookInfo API 

## 🤔 What is the BackEndPernBookInfo API? 
It is the API that allows you to fetch,update,delete and perform CRUD operations for the PostgreeSQL database used in the project.This is a Restful API for the PostgreeSQL Database so that it can be used with the backend.It is basically used at the front end of Book Info App

## 🔧 Tools Used 
- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
- [KnexJS](http://knexjs.org/) for Migrations And Schema creation
- [PostgreeSQL](https://www.postgresql.org/)

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
- **IMPORTANT**:Remember that the backend will never run until you have postgresql  installed on your system.

 So for getting started you need to have a [PostgreeSQL](https://www.postgresql.org/) database installed on your system.

## Installing PostgreeSQL
  To Download PostgreeSQL you can go to their downloads page here : [https://www.postgresql.org/download/](https://www.postgresql.org/download/).You also need to Remember that you need to create database in my case I have used **my_database** so that we can create tables in it.So lets get started.

## Check if PostgreeSQL is installed on your system
  - **Note** that you need to set the environment variables for your postgresql installation location after it is installed.
  - To check if PostgreeSQL is installed properly on your system or not run the following command in cmd or terminal
  ```bash
  psql --version
  ```
  It will return you the version of PostgreeSQL installed on your system if installed properly if you dont know how to set the environment variables for postgresql check out this resource.
  [Setting the environment variable for postgresql](https://stackoverflow.com/a/22921860/13161180)

## Creating The database
  - Database can be created from command line or from GUI i.e on [pgAdmin](https://www.pgadmin.org/).It will be installed when you install postgresql on your windows system.
  - We will create our database from command line.So after verifying our database is installed and is working in our system.Lets create it but before that we need to create a user because super user is a user who has access and full access to all operations to postgresql which could be dangerous so that is the reason we need to create a user role. So lets do it.
  ### Creating a user role
  - To access PostgreSQL from the terminal, use the command psql with the option -d to select the database you want to access and -U to select the user. If the terminal replies that the psql command is not found, you’ll most likely need to add the Postgres bin/ and lib/ directories into your system path.
  ```bash
  psql -d postgres -U postgres
  ```
  - You will be asked to input your password. Use the password you created earlier. Once you’re logged in, create a new user by adding a login permission with the password **root**.
  ```bash
  CREATE ROLE my_user WITH LOGIN PASSWORD 'root';
  ```
  - A user is simply a role that has login permission. Now that you have one, give it  permission to create databases by issuing the *ALTER ROLE [role name] CREATEDB syntax*.
  ```
  ALTER ROLE my_user CREATEDB;
  ```
  - Log out from your postgres superuser and log in as my_user using the command \q.
  ```
  psql -d postgres -U my_user 
  ```
  Now our user named **my_user** has been created successfully.Its time to create our    database
  ### Creating Database
  - To create our database run the following command.Note you should be logged in as user  role under which you want to create database and I assume you to be logged in as user named **my_user** that we just created not super user otherwise you might run a command and destroy your core postgres may be It was just for fun but keep attention about that.
  ```bash
  CREATE DATABASE my_database;
  ```
  With that our database my_database is successfully created.

## Creating Tables with KnexJS in our database.
  Now before we start the project its very much important that we understand the process of creating tables and table schemas using knexjs. So to get started you need to run these commands in the root of the project and follow what I say,
- So there are 2 tables used throughout the backend. These are 
- 1) book 
- 2) student
- Now to create the schema and tables we will simply use the [knexjs](http://knexjs.org/)
- Its a great tool for managing tables creation and shema management and working with the  databases.
- Now to created the tables we have to intiliaze knexJS in our project wit the command
  ```bash
  npx knex init 
  #  You dont need to run this command Remember because I have provided you with knex js file configured for you.If you wanna try this you have to delete that file knexfile.js and create your configuration so for now just follow me
  ```
**Note:**
  You dont need to run this command Remember because I have provided you with knex js file configured for you.If you wanna try this you have to delete that file knexfile.js and create your configuration so for now just follow me
- Although if you delete knexfile.js and want to create a new one enter the following code in knexfile.js
  ```jsx
  // Update with your config settings.
  /**
  * @type { Object.<string, import("knex").Knex.Config> }
  */
  module.exports = {
   development: {
    client: 'pg',
    connection: {
      host:"localhost",
      port: 5432,
      database:"todo", // The name of your database
      user:"my_user", // Your username
      password:"pyarapakistan", // Your password
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'todo',
      user:     'my_user',
      password: 'pyarapakistan',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
  };
  ```
- Now lets start migrating. To migrate the database or create table in database, the       command to start migration and create table is 
  `npx knex migrate:make create_[YourTableNameHere]_table`
  So Remember we have to create two tables so first we will create 
  *student** table
  ```bash
  npx knex migrate:make create_student_table
  ```
  You will see that a folder called **migrations** and this will be the location of your   Student table’s first migration and all the future migrations for the table.
- Now paste the following code in your first migration
  ```jsx
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.up = function (knex) {
    return knex.schema.createTable('student', (table) => {
        table.increments('id')
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('profile_picture');
    });
  };

  /**
  * @param { import("knex").Knex } knex
  * @returns { Promise<void> }
  */
  exports.down = function (knex) {
    return knex.schema.dropTable('student');
  };
  ```
- Now lets send some data using seed file and it will populate our student table
  ```
  npx knex seed:make 01_seed
  ```
  You will see a folder called ‘seeds’ and this will be the location of your Student table’s first seed file and all the future seeds for the table.
- Now add the following code to the seed file named 01_seed.js
  ```js
  /**
  * @param { import("knex").Knex } knex
  * @returns { Promise<void> } 
  */
  exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('student').del();

  await knex('student').insert([
    { id: 1, first_name: 'Muhammad', last_name: 'Ali', profile_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Muhammad_Ali_NYWTS.jpg/800px-Muhammad_Ali_NYWTS.jpg' },
    { id: 2, first_name: 'Muhammad', last_name: 'Bilal', profile_picture: 'https://media-exp2.licdn.com/dms/image/D4D35AQGUZHpq5EnnVA/profile-framedphoto-shrink_200_200/0/1656647188500?e=1657785600&v=beta&t=fOq6rhFvJsvuEMjuECoetJe5sDnmBCIzcSSGmyPIVgI' },
    { id: 3, first_name: 'Ammar', last_name: 'Mohib', profile_picture: 'https://media-exp2.licdn.com/dms/image/C4E03AQHfkSjT0tOhTQ/profile-displayphoto-shrink_200_200/0/1619987742513?e=1662595200&v=beta&t=NmG0JCAhLl51qgg1UULhDJniczduFykDLx3fK1rFL-M' }
   ]);
  };
  ```
- Now lets add them to the database table student using the command
  ```bash
  npx knex seed:run
  ```
  You will see the student table updated in your gui pgAdmin4 or other tool.
  👏 Congratulations Great Work Till Now.
- Now lets create migration for table book.The command is as below as previously described
  ```bash
  npx knex migrate:make create_book_table
  ```
  Add the following code to the book table migration in migration folder
  ```jsx
  /**
  * @param { import("knex").Knex } knex
  * @returns { Promise<void> }
  */
  exports.up = function (knex) {
    return knex.schema.createTable('book', (table) => {
        table.increments('id')
        table.string('book_name').notNullable();
        table.string('author').notNullable();
        table.string('borrowed_by');
        table.string('borrowed_date').notNullable();
        table.string('return_date').notNullable();
    });
  };

  /**
  * @param { import("knex").Knex } knex
  * @returns { Promise<void> }
  */
  exports.down = function (knex) {
    return knex.schema.dropTable('book');
  };
  ```
  Once you have created your schema, you can now migrate your table to *pgAdmin4* by running:
  ```bash
  npx knex migrate:latest
  ```
- Now lets create second see file that is 
  ```bash
  npx knex seed:make 02_seed
  ```
  It will migrate all the migrations in migraton folder to the database which you can view in PostgreeSQL pgAdmin4 tool for GUI View means our database.
  Paste the following code to the 02_seed.js
  ```js
  /**
  * @param { import("knex").Knex } knex
  * @returns { Promise<void> } 
  */
  exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('book').del();

  await knex('book').insert([
    { id: 1, book_name: 'Programmer Handy Notes', author: 'Sam Francisco', borrowed_by: 'bilal mohib', borrowed_date: '2020-07-21', return_date: '2022-10-01' },
    { id: 2, book_name: 'Starting Out With C++ From Control Strucutes through Objects', author: 'Tonny Gaddis', borrowed_by: 'Ammar Khan', borrowed_date: '2019-12-15', return_date: '2023-01-25' },
    { id: 3, book_name: 'Starting Out With Java From Control Strucutes through Objects', author: 'Tonny Gaddis', borrowed_by: 'Asfand Yar Khan', borrowed_date: '2017-05-20', return_date: '2025-10-15' },
  ]);
  };
  ```
- Lets run this command again to migrate finally.
  ```bash
  npx knex seed:run
  ```
  With this the book table will be filled up with data

## 📋 Tables Created in the Database
- **student** ——> This table contains the first_name,last_name and profile_photo in its columns.
- **book** ——> This table creates the columns for the book name, author, borrowed by (student name) or empty, date of borrow, expected date of return

## 🏃🏾 Starting the project
- Download the repository and run `npm install`. The node modules will be installed that are essential for running the project.
- In the root of the project run `node index.js` or if you have nodemon installed `nodemon index.js`
- If PostgreeSQL is installed on your system the backend will be started on port 8080 at [http://localhost:8080/](http://localhost:8080/) successfully.
- 😀 Congratulations. You definately did great if you followed till now.
- Now you can use the apis along with [frontend](https://github.com/Muhammad-Bilal-7896/FrontEndPernBookInfo)

## Find Me 
- Follow me on [Linkedin](https://www.linkedin.com/in/muhammad-bilal-028843199/) for useful updates regarding development
- My [Github Profile](https://github.com/Muhammad-Bilal-7896) 

## Resources
Blogs are much faster than videos so I mostly consult blogs but you can consult video tutorials if you want to
- [https://blog.logrocket.com/getting-started-with-postgres-in-your-react-app/](https://blog.logrocket.com/getting-started-with-postgres-in-your-react-app/)
- [https://medium.com/@yasirahboyce/node-express-knex-postgresql-22e10daf0817](https://medium.com/@yasirahboyce/node-express-knex-postgresql-22e10daf0817)
- [https://youtu.be/J01rYl9T3BU](https://youtu.be/J01rYl9T3BU)