import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Nav from './Nav'

export default function App2() {
  return (
    <>
        <Nav />
        <Routes>
            <Route path='/' element={ <Home/>} />
            <Route path='about' element={ <About /> } />
        </Routes>
    
    </>
  )
}
