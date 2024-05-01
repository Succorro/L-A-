import './App.css'
import { Routes, Route } from "react-router-dom";
import Navigation from './Navigation';
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Footer from './Footer';
import Temp from './Temp';

function App() {
  return ( 
    <div className="w-full h-[100vh] bg-White font-merriweather">
      <Temp/>
      {/* <Navigation />
      <Routes>
        <Route path="/services" element={<Services />}/>
        <Route path="/team" element={<Team />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer/> */}
    </div>
  )
}

export default App
