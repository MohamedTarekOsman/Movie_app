import { Container } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [pagesCount, setPagesCount] = useState();

  const fetchMovies = async (url) => {
    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
      setPagesCount(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const getPopularMovies = async (page) => {
    const url = `//api.themoviedb.org/3/movie/popular?api_key=154227dcf1185e5abdfc7a0c9970913a&language=ar&page=${page}`;
    fetchMovies(url);
  };

  const searchMovies = async (word) => {
    if (word === "") {
      getPopularMovies(1); // Fetch the first page of popular movies
    } else {
      const url = `//api.themoviedb.org/3/search/movie?api_key=154227dcf1185e5abdfc7a0c9970913a&query=${word}&language=ar`;
      fetchMovies(url);
    }
  };

  useEffect(() => {
    getPopularMovies(1); // Fetch the first page of popular movies when the component mounts
  }, []);

  return (
    <div className="font color-body">
      <NavBar search={searchMovies} />
      <Container>
        <BrowserRouter basename="/Movie_app">
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  getPage={getPopularMovies}
                  pagesCount={pagesCount}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;

