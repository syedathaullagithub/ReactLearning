// import {useState , useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Home } from '.././views'
import { Contact } from '.././views'
import { About } from '.././views'

function Routing({children}) {  

  return (
<div className="App">
<Router>
    {children}
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Contact" element={<Contact />} />
  <Route path="/About" element={<About />} />
</Routes>
</Router>
</div>
  ); 
}
Routing.prototypes ={
    children: PropTypes.object.node,
}

export default Routing;