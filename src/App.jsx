import './App.css'
import { Routes, Route } from "react-router-dom";
import Navigation from './Navigation';
import Home from './Home';
// import Projects from './Projects/Projects';
// import About from './About/About';

function App() {
  return ( 
    <div style={{
      backgroundImage:"url('Space.png')"}} className="w-full bg-color font-['poppins']">
      <Navigation />
      <Routes>
        {/* <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/> */}
        <Route path="/" element={<Home />}/>
      </Routes>
      
    </div>
  )
}

export default App
