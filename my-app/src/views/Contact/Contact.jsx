 import React, {useState, useEffect} from "react";
 import Axios from "axios";

 const Contact = () => {
const [movieName ,setMovieName] = useState('')
const [movieReview, setMovieReview] = useState('')
const [movies, setMovies] = useState([])

useEffect(()=>{
    handleGetMovie()
},[ ])

const handleGetMovie = () =>{
    Axios.get('http://localhost:3001/getMovies')
       .then(({data}) => setMovies(data))
}

const handleDelete = (id) =>{
    Axios.delete('http://localhost:3001/deletemovie',{ data: { idmovies: id } }).then(()=> handleGetMovie())
}

const handleUpdate = id =>{
    Axios.put('http://localhost:3001/updatemovie',{movieName: movieName,
    movieReview: movieReview, idmovies: id}).then(()=> handleGetMovie())
}

const handleAddMovie = () =>{
    Axios.post('http://localhost:3001',
    {
        movieName: movieName,
        movieReview: movieReview,
    }).then(()=> handleGetMovie())
}
    return (
        <div>
        <h1>Add Movie Review</h1>
        <label>Movie Name :</label>
         <input type="text" name="movieName" onChange={(e)=>{setMovieName(e.target.value)}} />
         <label>Movie Review :</label>
         <input type="text" name="movieReview" onChange={(e)=>{setMovieReview(e.target.value)}} />
         <button onClick={handleAddMovie}>Add Movie review</button>
         {movies?.map(m => (
            <div key={m.idmovies}>
            <h3>{`${m.idmovies} Movie Name : ${m.moviename},   Movie Review : ${m.moviereview} `}
             <button onClick={() => handleDelete(m.idmovies)}>Del</button>
             <button onClick={() => handleUpdate(m.idmovies)}>Update</button>
             </h3>
            </div>
            ))}
        </div> 
    )
 }

 export default Contact;