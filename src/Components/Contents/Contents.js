import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../Store/actions';
import MoviesRow from './MoviesRow'
// const movies = [
//     "https://cdnb.artstation.com/p/assets/images/images/017/317/689/large/toan-juno-final.jpg?1555483923",
//     "https://upload.wikimedia.org/wikipedia/vi/d/df/Arrival%2C_Movie_Poster.jpg",
//     "https://cdn-amz.fadoglobal.io/images/I/71OIhbUOF-L.jpg",
//     "https://upload.wikimedia.org/wikipedia/vi/f/fe/1917_%282019%29_Film_Poster.jpeg",
//     "https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg",
//     "https://cdnb.artstation.com/p/assets/images/images/038/749/151/medium/nima-neemz-nakhshab-avengers.jpg?1623946339",
//     "https://img.idesign.vn/2018/06/27/raw_percival-associates.jpg",
//     "https://i.pinimg.com/originals/a9/c7/d3/a9c7d36b3aaee651d8f120257587e27b.jpg",
//     "http://webneel.com/daily/sites/default/files/images/daily/04-2013/1-Casino-Jack-best-movie-poster.jpg",
//     "https://i.pinimg.com/474x/ef/07/13/ef07138c0c4546fbb6507ebb975bb9cf--z-for-zachariah-indie-films.jpg",
//     "https://i.pinimg.com/736x/66/80/87/6680870200ce78c6e920bc341a9f0dd2--movies-to-watch-new-movies.jpg",
// ];

function Contents(props) {
  const dispatch = useDispatch();
  const { NeflitOriginal,
    TrendingMovie,
    TopRatedMovie,
    ActionsMovie,
    ComedyMovie,
    HorrorMovie,
    DocumentMovie,
    RomanceMovie } = useSelector(state => state.infoMovies)

  useEffect(() =>{
    dispatch(actions.getNetflixOriginals());
    dispatch(actions.getTrendingMovies());
    dispatch(actions.getTopRatedMovies());
    dispatch(actions.getActionMovies());
    dispatch(actions.getComedyMovies());
    dispatch(actions.getRomanceMovies());
    dispatch(actions.getHorrorMovies());
    dispatch(actions.getDOcumentMovies());
  },[dispatch])
  console.log(NeflitOriginal);
  return (
    <div>
        <MoviesRow movies={NeflitOriginal} title="Netflix Originals" isNetflix/>
        <MoviesRow movies={TrendingMovie} title="Trending Movies" />
        <MoviesRow movies={TopRatedMovie} title="Netflix Originals" />
        <MoviesRow movies={ActionsMovie} title="Netflix Originals" />
        <MoviesRow movies={ComedyMovie} title="Netflix Originals" />
        <MoviesRow movies={HorrorMovie} title="Netflix Originals" />
        <MoviesRow movies={RomanceMovie} title="Netflix Originals" />
        <MoviesRow movies={DocumentMovie} title="Netflix Originals" />



    </div>
  )
}

export default Contents