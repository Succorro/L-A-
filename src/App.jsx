import './App.css'
import { Routes, Route } from "react-router-dom";
import Navigation from './Navigation';
import Home from './Home';
import Services from './Services';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';
// import Projects from './Projects/Projects';
// import About from './About/About';

function App() {
  return ( 
    <div className="w-full h-[100vh] bg-White font-libre">
      <Navigation />
      <Routes>
        <Route path="/services" element={<Services />}/>
        <Route path="/team" element={<Team />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
