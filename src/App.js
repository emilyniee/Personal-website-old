import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
//import Projects from './pages/Projects';
import About from './pages/About';
import Navbar from './components/Navbar';
import GraphicDesign from './pages/GraphicDesign';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/personal-website" element = {<Home />}/>
          <Route path="/personal-website/about" element = {<About />}/>
          <Route path="/personal-website/graphic-design" element = {<GraphicDesign />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
