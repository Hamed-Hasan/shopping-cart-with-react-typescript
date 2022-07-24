import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Store from './pages/Store'
import Navbar from './components/Navbar'

function App() {
 
  return (
    <div className="App">
      <Navbar/>
    <Container>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/about" element={<About/>} />
     
      </Routes>
    </Container>
    </div>
  )
}

export default App
