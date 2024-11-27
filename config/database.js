import mysql from "mysql2"

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "medic-shop"
})

connection.connect((err)=>{
    if (err) {
        console.error('Error connecting to database:', err)
        return
    }
    console.log('connected to database medic-shop')
})

module.exports = connection