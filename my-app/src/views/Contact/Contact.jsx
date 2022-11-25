 import React, {useState, useEffect} from "react";
 import Axios from "axios";

 const Contact = () => {
const [movieName ,setMovieName] = useState('')
const [movieReview, setMovieReview] = useState('')
const [movies, setMovies] = useState([])
const [isAdd, setIsAdd] = useState(true)
const [movieId, setMovieId] = useState('')

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

const handleUpdate = async(id) =>{
    setIsAdd(s => !s)
    const updatedValues = movies.find(f => f.idmovies === id)
    setMovieName(() => updatedValues.moviename)
    setMovieReview(() => updatedValues.moviereview)
    handleUpdateApi(id)
}

 const handleUpdateApi = (id) =>{
    setMovieId(id)
     Axios.put('http://localhost:3001/updatemovie',{movieName: movieName,
    movieReview: movieReview, idmovies: id}).then(()=> handleGetMovie())
}

const handleAddMovie = () => {
    if(isAdd){
        Axios.post('http://localhost:3001',
        {
            movieName: movieName,
            movieReview: movieReview,
     }).then(()=> handleGetMovie())
     setMovieName('')
     setMovieReview('')
    }
    else{
        handleUpdate(movieId)
    }
    
}

const handleSearchMovies = value =>{
    Axios.get('http://localhost:3001/searchmovies',{params: {
        movieName: value}
      })
       .then(({data}) => setMovies(data))
}
    return (
        <div>
        <h1>Add Movie Review</h1>
        <label>Movie Name :</label>
         <input type="text" name="movieName" value={movieName} onChange={(e)=>{setMovieName(e.target.value)}} />
         <label>Movie Review :</label>
         <input type="text" name="movieReview" value={movieReview} onChange={(e)=>{setMovieReview(e.target.value)}} />
         <button onClick={handleAddMovie}>{`${isAdd ? 'Add' : 'update'} Movie review`}</button>

         <h2>Search movies</h2>
         <label>Search by name :</label>
         <input type="text" name="movieName" onChange={(e)=>{handleSearchMovies(e.target.value)}} />
         {movies?.map(m => (
            <div key={m.idmovies}>
            <h3>{`${m.idmovies} Movie Name : ${m.moviename},   Movie Review : ${m.moviereview} `}
             <button onClick={() => handleDelete(m.idmovies)}>Del</button>
           <button onClick={() => handleUpdate(m.idmovies)} disabled={m.idmovies === movieId && !isAdd}>Update</button>
             </h3>
            </div>
            ))}
        </div> 
    )
 }

 export default Contact;