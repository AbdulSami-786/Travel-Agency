import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const featuredPackages = [
    {
      id: 1,
      name: '🏖️ Goa Beach Package',
      price: 15000,
      duration: '5 Days / 4 Nights',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400',
      description: 'Sunny beaches and Portuguese heritage'
    },
    {
      id: 2,
      name: '🏔️ Manali Adventure',
      price: 20000,
      duration: '7 Days / 6 Nights',
      image: 'https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=400',
      description: 'Snow-capped mountains and adventure sports'
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in">
            Discover Your Next <span className="highlight">Adventure</span>
          </h1>
          <p className="hero-subtitle animate-fade-in-delay">
            Curated travel experiences that create lifelong memories. 
            Let us craft your perfect journey.
          </p>
          <div className="hero-buttons animate-fade-in-delay-2">
            <Link to="/packages" className="btn-primary">
              Explore Packages
            </Link>
            <Link to="/profile" className="btn-secondary">
              Create Travel Profile
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card card-1">🏖️ Beach</div>
          <div className="floating-card card-2">🏔️ Mountain</div>
          <div className="floating-card card-3">🏛️ Heritage</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Wanderlust?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3>Curated Experiences</h3>
              <p>Handpicked destinations and activities for unforgettable memories</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock assistance during your entire journey</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>Best Value</h3>
              <p>Premium experiences at competitive prices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="featured-packages">
        <div className="container">
          <h2 className="section-title">Featured Packages</h2>
          <div className="packages-grid">
            {featuredPackages.map(pkg => (
              <div key={pkg.id} className="package-card-home">
                <img src={pkg.image} alt={pkg.name} />
                <div className="package-content">
                  <h3>{pkg.name}</h3>
                  <p>{pkg.description}</p>
                  <div className="package-meta">
                    <span className="duration">{pkg.duration}</span>
                    <span className="price">₹{pkg.price.toLocaleString()}</span>
                  </div>
                  <Link to={`/package/${pkg.id}`} className="btn-view-details">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/packages" className="btn-primary">
              View All Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home