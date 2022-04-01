import React from 'react'
import { useSelector } from 'react-redux'
import Menu from '../Menu/Menu'
import MovieDetail from '../MovieDetail/MovieDetail'
import SearchMovies from '../SearchMovies/SearchMovies'

function Search() {
  const {MoviesDetail} = useSelector(state => state.infoMovies)
  return (
    <div>
        <SearchMovies/>
        <Menu/>
        <MovieDetail movie={MoviesDetail}
        showModal={MoviesDetail ? true : false}/>
    </div>
  )
}

export default Search