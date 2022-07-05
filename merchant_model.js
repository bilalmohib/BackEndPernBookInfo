//Let's Talk with Node JS
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'my_user',
    host: 'localhost',
    database: 'my_database',
    password: 'pyarapakistan',
    port: 5432,
});
//Let's Talk with Node JS

const getMerchants = () => {
    return new Promise(function (resolve, reject) {
        //const getMerchants = () => pool.query('SELECT * FROM merchants ORDER BY id ASC');
        // const {rows} = await getMerchants();
        // console.log("Results are ==> ",rows);
        // resolve("rows");

        pool.query('SELECT * FROM Merchants ORDER BY id ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            console.log("Results are ==> ",results.rows)
            resolve(results.rows);
        })
    })
}
const createMerchant = (body) => {
    return new Promise(function (resolve, reject) {
        const { name, email } = body

        pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new merchant has been added added: ${results.rows[0]}`)
        })
    })
}
const deleteMerchant = () => {
    return new Promise(function (resolve, reject) {
        const id = parseInt(request.params.id)
        pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`Merchant deleted with ID: ${id}`)
        })
    })
}

module.exports = {
    getMerchants,
    createMerchant,
    deleteMerchant,
}