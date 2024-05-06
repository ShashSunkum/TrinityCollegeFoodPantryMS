import express, {request} from 'express';
import con from '../utils/db.js';
import jwt from 'jsonwebtoken';

const router = express.Router()

router.post('/adminlogin', (req, res) => {
    console.log("Received request for admin login");
    const sql = `SELECT * FROM admin where email = ? and password = ?`;
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) {
            return res.json({loginStatus: false, Error: "Query Error", sqlError: err.message});
        }
        if (result.length > 0) {
            const email = result[0].email;
            const token = jwt.sign({role: 'admin', email: email}, '0d6f19e5fad9a7e37e88e6f0eb3e4761', {expiresIn: '1d'})
            res.cookie('token', token)
            return res.json({loginStatus: true});
        }
        else {
            return res.json({loginStatus: false, Error: "Wrong email or password"});
        }
    });
});

router.post('/addCategory', (req, res) => {
    const sql = "INSERT INTO category (`name`) VALUES (?)";
    con.query(sql, [req.body.category], (err, result) => {
        if (err) {
            return res.json({Status: false, Error: "Query Error", sqlError: err.message});
        } else {
            return res.json({status: true, Error: "Category added successfully"});
        }
    }); // Properly closed function and SQL query call
});

router.get('/category', (req, res) => {
    const sql = `SELECT * FROM category`;
    con.query(sql, (err, result) => {
        if (err) {
            return res.json({Status: false, Error: "Query Error", sqlError: err.message});
        }
        else{
            return res.json({status: true, Result: result , Error: "Category added successfully"});
        }
    })
})

router.post('/addItem', (req, res) => {
    const sql = `INSERT INTO item (name, category_id, quantity,cost,shelfLife,purchasedFrom) VALUES (?,?,?,?,?,?)`;
    const sql1 = `INSERT INTO item (name, category_id) VALUES (?,?)`;
    const values = [
        req.body.name,
        req.body.category_id,
        req.body.quantity,
        req.body.cost,
        req.body.shelfLife,
        req.body.purchasedFrom
    ];
    const checkCategoryExists = 'SELECT id FROM category WHERE id = ?';
    con.query(checkCategoryExists, [req.body.category_id], (err, results) => {
        if (err) {
            return res.json({Status: false, Error: "Failed to validate category_id"});
        }
        if (results.length === 0) {
            return res.json({Status: false, Error: "No matching category found"});
        }
    })
    const values1 = [
        req.body.name,
        req.body.category_id]
    console.log("Attempting to insert:", values);
    con.query(sql, values, (err, result) => {
        if (err) {
            return res.json({Status: false, Error: "Query Error", sqlError: err.message});
        }
        else{
            return res.json({status: true, Result: result});
        }
    })
})

router.get('/item', (req, res) => {
    const sql = `SELECT * FROM item`;
    con.query(sql, (err, result) => {
        if (err) {
            return res.json({Status: false, Error: "Query Error", sqlError: err.message});
        }
        else{
            return res.json({status: true, Result: result , Error: "Item added successfully"});
        }
    })
})

router.get('/item/:id', (req, res) => {
    const id = req.params.id;
    console.log("Received ID:", id);
    const sql = `SELECT * FROM item WHERE id = ?`;
    con.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({Status: false, Error: "Query Error", sqlError: err.message});
        }
        else{
            return res.json({status: true, Result: result , Error: "Item queried successfully"});
        }
    })
})

router.put('/editItem/:id', (req, res) => {
    const id = req.params.id;
    console.log("Received ID Second Time:", id);
    const sql = `UPDATE item set name= ?, cost= ?, category_id= ?, purchasedFrom= ?, quantity= ?, shelfLife= ? WHERE id = ?`;
    const values = [
        req.body.name,
        req.body.cost,
        req.body.category_id,
        req.body.purchasedFrom,
        req.body.quantity,
        req.body.shelfLife,

    ];
    con.query(sql, [...values, id], (err, result) => {
        if (err) {
            return res.json({Status: false, Error: "Query Error", sqlError: err.message});
        }
        else{
            return res.json({status: true, Result: result , Error: "Item queried successfully"});
        }
    })
})

router.delete('/deleteItem/:id', (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM item WHERE id = ?`
    console.log("To be deleted: " + id)
    con.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({Status: false, Error: "Query Error", sqlError: err.message});
        }
        else{
            return res.json({status: true, Result: result , Error: "Item queried successfully"});
        }
    })
})

router.get('/adminCount', (req, res) => {
    const sql = `SELECT COUNT(id) AS admin FROM admin`
    con.query(sql, (err, result) => {
        if (err) {
            return res.json({Status: false, Error: "Query Error", sqlError: err.message});
        } else {
            return res.json({status: true, Result: result, Error: "Item queried successfully"});
        }
    })
})

router.get('/itemCount', (req, res) => {
    const sql = `SELECT COUNT(id) AS item FROM item`
    con.query(sql, (err, result) => {
        if (err) {
            return res.json({Status: false, Error: "Query Error", sqlError: err.message});
        } else {
            return res.json({status: true, Result: result, Error: "Item queried successfully"});
        }
    })
})

router.get('/costCount', (req, res) => {
    const sql = `SELECT SUM(cost) AS costOfItem FROM item`
    con.query(sql, (err, result) => {
        if (err) {
            return res.json({Status: false, Error: "Query Error", sqlError: err.message});
        } else {
            return res.json({status: true, Result: result, Error: "Item queried successfully"});
        }
    })
})

router.get('/adminRecords', (req, res) => {
    const sql = `SELECT * FROM admin`
    con.query(sql, (err, result) => {
        if (err) {
            return res.json({Status: false, Error: "Query Error", sqlError: err.message});
        } else {
            return res.json({status: true, Result: result, Error: "Item queried successfully"});
        }
    })
})

router.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({Status: true})
})

export {router as adminRouter};