
import './App.css';
import Contents from './Components/Contents/Contents.js';
import Intro from './Components/intro/intro';
import Menu from './Components/Menu/Menu';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Contents />
      <Menu/>
    </div>
  );
}

export default App;

