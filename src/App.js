
import './App.css';
import Contents from './Components/Contents/Contents.js';
import Intro from './Components/intro/intro';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Contents />
    </div>
  );
}

export default App;

