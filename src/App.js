
import { useSelector } from 'react-redux';
import './App.css';
import Home from './Components/Base/Home';
import Contents from './Components/Contents/Contents.js';
import Intro from './Components/intro/intro';
import Menu from './Components/Menu/Menu';
import MovieDetail from './Components/MovieDetail/MovieDetail';
import Navbar from './Components/Navbar/Navbar';
import SearchMovies from './Components/SearchMovies/SearchMovies';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './Components/Base/Search';
import Footer from './Components/Footer/Footer';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

