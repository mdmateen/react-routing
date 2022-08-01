import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Nav() {
   const navLinkStyle = ({isActive})=>{  // isActive its a boolean flag of NavLink 
    return {
        fontWeight:isActive ?'bold':'normal',
        textDecoration : isActive ? 'none':'underline'
    }
  } 
  return (
   /*  <nav>
      <NavLink to="/" style={navLinkStyle}>Home Page </NavLink>
      <NavLink to="/about" style={navLinkStyle}>About US </NavLink>
    </nav> */

    <nav>
      <Link to="/" >Home Page  </Link>
      <Link to="/about" > About US</Link>
    </nav>
    
  )
}
