import {Container} from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails"
import { BrowserRouter, Route,Routes } from "react-router-dom";

function App() {
  const [movies,setMovies]=useState([])
  const [pagesCount,setPagescount]=useState()
  const getallmovies=async()=>{
    const response=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=154227dcf1185e5abdfc7a0c9970913a&language=ar`)
    setMovies(response.data.results)
    setPagescount(response.data.total_pages)
  }
  

  const getPage=async(page)=>{
    const response=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=154227dcf1185e5abdfc7a0c9970913a&language=ar&page=${page}`)
    setMovies(response.data.results)
    setPagescount(response.data.total_pages)
  }

  const search=async(word)=>{
    if(word===""){
      getallmovies();
    }else{
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=154227dcf1185e5abdfc7a0c9970913a&query=${word}&language=ar`)
      setMovies(response.data.results)
      setPagescount(response.data.total_pages)
    }
  }
  useEffect(()=>{
    getallmovies();
  },[])
  return (
    <div className="font color-body">
    <NavBar search={search}/>
    <Container>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={ <MoviesList movies={movies} getPage={getPage} pagesCount={pagesCount}/>}/>
          <Route path="/movie/:id" element={ <MovieDetails/>}/>
      </Routes>
    </BrowserRouter>
    </Container>
    </div>
  );
}

export default App;
