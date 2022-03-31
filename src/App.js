
import { useSelector } from 'react-redux';
import './App.css';
import Contents from './Components/Contents/Contents.js';
import Intro from './Components/intro/intro';
import Menu from './Components/Menu/Menu';
import MovieDetail from './Components/MovieDetail/MovieDetail';
import Navbar from './Components/Navbar/Navbar';
import SearchMovies from './Components/SearchMovies/SearchMovies';

function App() {
  const { MoviesDetail } = useSelector(state => state.infoMovies)
  return (
    <div className="App">
      <Navbar />
      {/* <Intro />
      <Contents />
      <Menu/>
      <MovieDetail 
        movie={MoviesDetail} 
        showModal={MoviesDetail ? true : false}/> */}
      <SearchMovies/>
    </div>
  );
}

export default App;

