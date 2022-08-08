import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import '../App.css'

export default function Nav() {

  const navLinkStyle = ({ isActive }) => {  
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  } 
// isActive its a boolean flag of NavLink 
  return (
    <nav>
      <NavLink to="/" >Home Page </NavLink>
      <NavLink to="/about" >About US </NavLink>
    </nav>



  )
}
