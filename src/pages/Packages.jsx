import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Packages.css'

const Packages = () => {
  const [filter, setFilter] = useState('all')
  
  const allPackages = [
    {
      id: 1,
      name: '🏖️ Goa Beach Package',
      price: 15000,
      duration: '5 Days / 4 Nights',
      type: 'beach',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400',
      description: 'Sunny beaches and Portuguese heritage',
      highlights: ['Beach Access', 'Water Sports', 'Local Cuisine', 'Nightlife']
    },
    {
      id: 2,
      name: '🏔️ Manali Adventure',
      price: 20000,
      duration: '7 Days / 6 Nights',
      type: 'mountain',
      image: 'https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=400',
      description: 'Snow-capped mountains and adventure sports',
      highlights: ['Trekking', 'Skiing', 'Mountain Views', 'Camping']
    },
    {
      id: 3,
      name: '🏛️ Golden Triangle Tour',
      price: 25000,
      duration: '6 Days / 5 Nights',
      type: 'heritage',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400',
      description: 'Delhi, Agra, Jaipur - Rich cultural experience',
      highlights: ['Taj Mahal', 'Historical Sites', 'Cultural Shows', 'Shopping']
    },
    {
      id: 4,
      name: '🌴 Kerala Backwaters',
      price: 18000,
      duration: '4 Days / 3 Nights',
      type: 'nature',
      image: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=400',
      description: 'Serene backwaters and Ayurvedic treatments',
      highlights: ['Houseboat Stay', 'Ayurveda', 'Backwaters', 'Wildlife']
    },
    {
      id: 5,
      name: '🏜️ Rajasthan Cultural',
      price: 22000,
      duration: '8 Days / 7 Nights',
      type: 'heritage',
      image: 'https://images.unsplash.com/photo-1452802187762-72590bb8c83a?w=400',
      description: 'Royal palaces and desert experiences',
      highlights: ['Desert Safari', 'Palace Stay', 'Folk Music', 'Local Markets']
    },
    {
      id: 6,
      name: '⛰️ Ladakh Expedition',
      price: 30000,
      duration: '10 Days / 9 Nights',
      type: 'mountain',
      image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400',
      description: 'High-altitude adventure and Buddhist culture',
      highlights: ['Pangong Lake', 'Monasteries', 'High Passes', 'Biking']
    }
  ]

  const filteredPackages = filter === 'all' 
    ? allPackages 
    : allPackages.filter(pkg => pkg.type === filter)

  return (
    <div className="packages-page">
      <div className="container">
        <div className="page-hero">
          <h1 className="page-title">Our Travel Packages</h1>
          <p className="page-subtitle">Curated experiences for every type of traveler</p>
        </div>

        {/* Filter Buttons */}
        <div className="package-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Packages
          </button>
          <button 
            className={`filter-btn ${filter === 'beach' ? 'active' : ''}`}
            onClick={() => setFilter('beach')}
          >
            🏖️ Beach
          </button>
          <button 
            className={`filter-btn ${filter === 'mountain' ? 'active' : ''}`}
            onClick={() => setFilter('mountain')}
          >
            🏔️ Mountain
          </button>
          <button 
            className={`filter-btn ${filter === 'heritage' ? 'active' : ''}`}
            onClick={() => setFilter('heritage')}
          >
            🏛️ Heritage
          </button>
          <button 
            className={`filter-btn ${filter === 'nature' ? 'active' : ''}`}
            onClick={() => setFilter('nature')}
          >
            🌴 Nature
          </button>
        </div>

        {/* Packages Grid */}
        <div className="packages-grid-page">
          {filteredPackages.map(pkg => (
            <div key={pkg.id} className="package-card-page">
              <img src={pkg.image} alt={pkg.name} />
              <div className="package-content">
                <span className="package-type">{pkg.type}</span>
                <h3>{pkg.name}</h3>
                <p>{pkg.description}</p>
                
                <div className="package-highlights">
                  {pkg.highlights.slice(0, 3).map((highlight, index) => (
                    <span key={index} className="highlight-tag">✅ {highlight}</span>
                  ))}
                </div>
                
                <div className="package-meta">
                  <span className="duration">{pkg.duration}</span>
                  <span className="price">₹{pkg.price.toLocaleString()}</span>
                </div>
                
                <Link to={`/package/${pkg.id}`} className="btn-view-details">
                  View Full Details & Book
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Packages