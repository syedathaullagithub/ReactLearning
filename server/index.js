const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'reactproject',
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.post("/", (req, res) => {
    console.log(req);
    console.log(res);
    const moviename= req.body.movieName
    const moviereview= req.body.movieReview
    const sqlInsert = "INSERT INTO reactproject.movies (moviename, moviereview) VALUES (?,?);"
    db.query(sqlInsert, [ moviename, moviereview ], (err, result) => {
        console.log(err);
        res.send('Addedqq')
    })
})

// app.get('/getmovies', (req, res) => {
// });


app.listen(3001, ()=> {
    console.log('backend is running')
})