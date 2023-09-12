import {} from 'react'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import Footer from './Footer'
import Produtos from './Produtos'
import Sobre from './Sobre'

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Produtos" element={<Produtos/>}/>
      <Route path="/Sobre" element={<Sobre/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
     
    </>
  )
}

export default App
