const { Pool } = require("pg");

const pool = new Pool({
    user: "my_user",
    password: "pyarapakistan",
    host: "localhost",
    port: 5432,
    database: "todo"
})

module.exports = pool;