// import {useState , useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home'
// import Axios from 'axios'
import './App.css'
function App() {
  
  const Contact = () => <p>Contact</p>
  const About = () => <p>About</p>
  
  return (
    <div className="App">
<Router>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Contact" element={<Contact />} />
  <Route path="/About" element={<About />} />
</Routes>
</Router>
    </div>
  ); 
}

export default App;