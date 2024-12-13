import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import { Link } from 'react-router'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/abt' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
