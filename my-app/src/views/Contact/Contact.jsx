import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  Box,
  Card,
  Button,
  Typography,
  TextField,
  CardActions,
  CardContent,
} from "@mui/material";

const Contact = () => {
  const [movieName, setMovieName] = useState("");
  const [movieReview, setMovieReview] = useState("");
  const [movies, setMovies] = useState([]);
  const [isAdd, setIsAdd] = useState(true);
  const [movieId, setMovieId] = useState("");

  useEffect(() => {
    handleGetMovie();
  }, []);

  const handleGetMovie = () => {
    Axios.get("http://localhost:3001/getMovies").then(({ data }) =>
      setMovies(data)
    );
  };

  const handleDelete = (id) => {
    Axios.delete("http://localhost:3001/deletemovie", {
      data: { idmovies: id },
    }).then(() => handleGetMovie());
  };

  const handleUpdate = async (id) => {
    setIsAdd((s) => !s);
    const updatedValues = movies.find((f) => f.idmovies === id);
    setMovieName(() => updatedValues.moviename);
    setMovieReview(() => updatedValues.moviereview);
    handleUpdateApi(id);
  };

  const handleUpdateApi = (id) => {
    setMovieId(id);
    Axios.put("http://localhost:3001/updatemovie", {
      movieName: movieName,
      movieReview: movieReview,
      idmovies: id,
    }).then(() => handleGetMovie());
  };

  const handleAddMovie = () => {
    if (isAdd) {
      Axios.post("http://localhost:3001", {
        movieName: movieName,
        movieReview: movieReview,
      }).then(() => handleGetMovie());
      setMovieName("");
      setMovieReview("");
    } else {
      handleUpdate(movieId);
    }
  };

  const handleSearchMovies = (value) => {
    Axios.get("http://localhost:3001/searchmovies", {
      params: {
        movieName: value,
      },
    }).then(({ data }) => setMovies(data));
  };
  return (
    <Box style={{ display: "flex", padding: "8px" }}>
      <div>
        <Typography variant="h4"> Add Movie Review</Typography>
        <TextField
          sx={{ margin: "8px", width: "400px" }}
          label="Movie Name "
          variant="outlined"
          name="movieName"
          value={movieName}
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />
        <TextField
          sx={{ margin: "8px", width: "400px" }}
          label="Movie Review "
          variant="outlined"
          name="movieReview"
          value={movieReview}
          onChange={(e) => {
            setMovieReview(e.target.value);
          }}
        />
        <Button
          sx={{ margin: "8px", display: "block" }}
          style={{ marginTop: "12px" }}
          onClick={handleAddMovie}
        >{`${isAdd ? "Add" : "update"} Movie review`}</Button>
      </div>
      <div>
        <Typography sx={{ margin: "8px" }} variant="h6">
          Movies List
        </Typography>
        {movies?.length > 0 && (
          <TextField
            sx={{ margin: "8px", width: "400px" }}
            label="Search by name"
            name="serchMovieName"
            onChange={(e) => {
              handleSearchMovies(e.target.value);
            }}
          />
        )}
        {movies?.map((m) => (
          <Card sx={{ width: 800, margin: "8px" }} key={m.idmovies}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {m.moviename}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {m.moviereview}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => handleDelete(m.idmovies)}>Del</Button>
              <Button
                onClick={() => handleUpdate(m.idmovies)}
                disabled={m.idmovies === movieId && !isAdd}
              >
                Update
              </Button>
            </CardActions>
          </Card>
        ))}
        {movies?.length === 0 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            No data
          </div>
        )}
      </div>
    </Box>
  );
};

export default Contact;
