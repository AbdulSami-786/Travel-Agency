import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Packages from './pages/Packages'
import PackageDetail from './pages/PackageDetail'
import TravelProfile from './pages/TravelProfile'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [userProfile, setUserProfile] = useState(null)

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/package/:id" element={<PackageDetail />} />
          <Route 
            path="/profile" 
            element={<TravelProfile userProfile={userProfile} setUserProfile={setUserProfile} />} 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App