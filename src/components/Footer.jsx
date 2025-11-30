import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>🌴 Wanderlust Travels</h3>
          <p>Creating unforgettable travel experiences since 2010. Your journey begins with us.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/about">About Us</Link>
          <Link to="/packages">Our Packages</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/profile">Travel Profile</Link>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📞 +91-9876543210</p>
          <p>📧 info@wanderlust.com</p>
          <p>📍 123 Travel Street, Vacation City</p>
        </div>
        
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#">📘 Facebook</a>
            <a href="#">📷 Instagram</a>
            <a href="#">🐦 Twitter</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Wanderlust Travels. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer