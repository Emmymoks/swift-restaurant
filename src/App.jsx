import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ReservePage from './pages/ReservePage'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reserve" element={<ReservePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
