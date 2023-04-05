import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import {NavLink} from 'react-router-dom';
import './App.css';
import './styles/About.css';

function App() {
  return (
    <div className="neon-border">
    <BrowserRouter>
    <Routes>
        {/* About */}
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/profile/:id" element={<Profile/>} />
        <Route path="/admin" element={<Admin/>} />
    </Routes>
   
     <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/admin">For Admin!!</NavLink>     
      
     </nav>
   
   </BrowserRouter>
   </div>
  )
}

export default App