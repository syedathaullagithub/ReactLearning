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
    const moviename= req.body.movieName
    const moviereview= req.body.movieReview
    const sqlInsert = "INSERT INTO reactproject.movies (moviename, moviereview) VALUES (?,?);"
    db.query(sqlInsert, [ moviename, moviereview ], (err, result) => {
        console.log(err);
        res.send('Addedqq')
    })
})

app.put("/updateMovie", (req, res) => {
    const moviename= req.body.movieName
    const moviereview= req.body.movieReview
    const idmovies = req.body.idmovies
    console.log(moviename)
    const sqlUpdate = `UPDATE reactproject.movies SET moviename = '${moviename}', moviereview = '${moviereview}' WHERE idmovies = ${idmovies};`
    db.query(sqlUpdate, [ moviename, moviereview ], (err, result) => {
        console.log(err);
        res.send('Addedqq')
    })
})

app.get('/getmovies', (req, res) => {
    const sqlGet = "SELECT * FROM reactproject.movies;"
    db.query(sqlGet, (err, result) => {
        console.log(err);
        res.send(result)
    })
});

app.delete('/deletemovie', (req, res) => {
    const idmovies= req.body.idmovies
    console.log(idmovies)
    const sqlGet = `DELETE FROM reactproject.movies WHERE idmovies=${idmovies};`
    db.query(sqlGet, (err, result) => {
        console.log(err);
        res.send(result)
    })
});


app.listen(3001, ()=> {
    console.log('backend is running')
})