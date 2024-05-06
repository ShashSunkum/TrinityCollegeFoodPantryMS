import mysql from 'mysql';

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Deeptha@754',
    database: 'employeems'
})

con.connect(function (err) {
    if (err) {
        console.log("Connection Error", err);
    }
    else {
        console.log("Connected successfully");
    }
})

export default con;