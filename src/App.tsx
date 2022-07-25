import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Store from './pages/Store'
import Navbar from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {
 
  return (
 <ShoppingCartProvider>
      <Navbar/>
    <Container>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Container>
    </ShoppingCartProvider>
  )
}

export default App
