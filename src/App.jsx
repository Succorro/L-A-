import './App.css'
import { Routes, Route } from "react-router-dom";
import Navigation from './Navigation';
import Home from './Home';
// import Projects from './Projects/Projects';
// import About from './About/About';

function App() {
  return ( 
    <div className="w-full h-[100vh] bg-White font-['poppins'] font-catamaran">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      
    </div>
  )
}

export default App
