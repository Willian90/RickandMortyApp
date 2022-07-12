import React, { useState, useEffect } from 'react'
import MovieList from './MovieList';

const Movie=()=> {

    const [movies, setMovies] = useState(null);

    useEffect(() => {
      
        const getMovies = async()=>{
            let res = await fetch("https://rickandmortyapi.com/api/character");
            let movie = await res.json();
            console.log(movie)
            setMovies(movie.results)
        }
        
        getMovies();
    },[]);
    
  return (
   <div className='container'>
   <header>
        <h1>THE RICK AND MORTY API</h1>
   </header>
    <main>
        <section>
    {
    movies && movies.map((movie,index)=><MovieList key={index} {...movie}></MovieList>) }
        </section>
    </main>

    </div>
  )
}

export default Movie