import React from 'react';
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Navbartwo.css'


// Navbar function for Home, Sticky-Note-App, and Payment
function Navbartwo() {
  return (
    <div id="navbar">
    <div><NavLink to= "/">Home</NavLink></div>  
    <div><NavLink to= "./Stickynote.js">Sticky-Note-App</NavLink></div>
    <div><NavLink to= "./Payment.js">Donate to Charity</NavLink></div>
</div>
)
}


export default Navbartwo;