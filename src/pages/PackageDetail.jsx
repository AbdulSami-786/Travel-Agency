import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './PackageDetail.css'

const PackageDetail = () => {
  const { id } = useParams()
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    guests: 1,
    specialRequests: ''
  })

  // Mock package data - in real app, fetch by ID
  const packageData = {
    1: {
      id: 1,
      name: '🏖️ Goa Beach Package',
      price: 15000,
      duration: '5 Days / 4 Nights',
      type: 'beach',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600',
      description: 'Experience the perfect blend of sun, sand, and Portuguese heritage in beautiful Goa.',
      detailedDescription: `Goa, India's beach paradise, offers a unique blend of Indian and Portuguese cultures. This package includes luxurious beachfront accommodation, water sports, local cuisine experiences, and guided heritage tours.`,
      inclusions: [
        '4 Nights Beachfront Hotel Accommodation',
        'Daily Breakfast & Dinner',
        'Water Sports (Jet Ski, Banana Boat)',
        'North Goa Sightseeing Tour',
        'Portuguese Heritage Walk',
        'Beach BBQ Dinner',
        'Airport Transfers',
        '24/7 Tour Guide Assistance'
      ],
      itinerary: [
        'Day 1: Arrival & Beach Relaxation',
        'Day 2: North Goa Exploration & Fort Visit',
        'Day 3: Water Sports & Local Market',
        'Day 4: Heritage Churches & Portuguese Quarter',
        'Day 5: Departure with Memories'
      ],
      highlights: ['Beach Access', 'Water Sports', 'Local Cuisine', 'Nightlife', 'Heritage Sites']
    },
    2: {
      id: 2,
      name: '🏔️ Manali Adventure',
      price: 20000,
      duration: '7 Days / 6 Nights',
      type: 'mountain',
      image: 'https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=600',
      description: 'Thrilling adventure in the snow-capped Himalayas with exciting activities.',
      detailedDescription: `Manali offers breathtaking mountain views and exciting adventure sports. This package is perfect for thrill-seekers and nature lovers alike.`,
      inclusions: [
        '6 Nights Mountain Resort Stay',
        'All Meals Included',
        'Trekking Equipment',
        'Skiing Lessons',
        'Local Guide',
        'Adventure Activities',
        'Transportation',
        '24/7 Support'
      ],
      itinerary: [
        'Day 1: Arrival & Acclimatization',
        'Day 2: Solang Valley Adventure',
        'Day 3: Trekking Expedition',
        'Day 4: Local Culture Experience',
        'Day 5: Mountain Biking',
        'Day 6: Relaxation & Shopping',
        'Day 7: Departure'
      ],
      highlights: ['Trekking', 'Skiing', 'Mountain Views', 'Camping', 'Adventure Sports']
    }
  }

  const pkg = packageData[id] || packageData[1]

  const handleInputChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    })
  }

  const handleBooking = (e) => {
    e.preventDefault()
    
    const whatsappNumber = '923032385244'
    const message = `*📦 PACKAGE BOOKING REQUEST - ${pkg.name}* 🌴

*Package Details:*
🏷️ Package: ${pkg.name}
💰 Price: ₹${pkg.price}
📅 Duration: ${pkg.duration}
👥 Number of Guests: ${bookingData.guests}
📅 Preferred Travel Date: ${bookingData.travelDate}

*Customer Information:*
👤 Full Name: ${bookingData.name}
📧 Email Address: ${bookingData.email}
📞 Phone Number: ${bookingData.phone}

*Special Requests:*
${bookingData.specialRequests || 'No special requests'}

*Package Inclusions:*
${pkg.inclusions.map(item => `✅ ${item}`).join('\n')}

I would like to proceed with booking this package. Please confirm availability and share payment details.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    window.open(whatsappURL, '_blank')
    
    alert('📱 Opening WhatsApp! Please review the message and click SEND to confirm your booking request.')
  }

  if (!pkg) {
    return <div>Package not found</div>
  }

  return (
    <div className="package-detail">
      <div className="container">
        {/* Package Header */}
        <div className="package-header">
          <nav className="breadcrumb">
            <Link to="/packages">Our Packages</Link> / <span>{pkg.name}</span>
          </nav>
          
          <div className="package-hero">
            <img src={pkg.image} alt={pkg.name} className="package-detail-image" />
            <div className="package-overview">
              <span className="package-type-badge">{pkg.type}</span>
              <h1>{pkg.name}</h1>
              <p className="package-description">{pkg.description}</p>
              
              <div className="package-meta-detail">
                <div className="meta-item">
                  <span className="meta-label">Duration</span>
                  <span className="meta-value">{pkg.duration}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Price</span>
                  <span className="meta-value price">₹{pkg.price.toLocaleString()}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Package Type</span>
                  <span className="meta-value">{pkg.type.charAt(0).toUpperCase() + pkg.type.slice(1)}</span>
                </div>
              </div>

              <div className="package-highlights-detail">
                <h3>✨ Highlights</h3>
                <div className="highlights-grid">
                  {pkg.highlights.map((highlight, index) => (
                    <span key={index} className="highlight-item">✅ {highlight}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="package-content-detail">
          {/* Package Details */}
          <div className="package-info">
            <section className="detail-section">
              <h2>📖 About This Package</h2>
              <p>{pkg.detailedDescription}</p>
            </section>

            <section className="detail-section">
              <h2>🎯 What's Included</h2>
              <div className="inclusions-list">
                {pkg.inclusions.map((item, index) => (
                  <div key={index} className="inclusion-item">
                    <span className="inclusion-icon">✅</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="detail-section">
              <h2>🗓️ Itinerary</h2>
              <div className="itinerary">
                {pkg.itinerary.map((day, index) => (
                  <div key={index} className="itinerary-item">
                    <span className="day-number">Day {index + 1}</span>
                    <span className="day-activity">{day}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Booking Form */}
          <div className="booking-sidebar">
            <div className="booking-card">
              <h3>Book This Package</h3>
              <p className="booking-price">₹{pkg.price.toLocaleString()}</p>
              <p className="booking-duration">{pkg.duration}</p>
              
              <form onSubmit={handleBooking} className="booking-form">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={bookingData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Travel Date *</label>
                  <input
                    type="date"
                    name="travelDate"
                    value={bookingData.travelDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Number of Guests *</label>
                  <select
                    name="guests"
                    value={bookingData.guests}
                    onChange={handleInputChange}
                    required
                  >
                    {[1,2,3,4,5,6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Special Requests</label>
                  <textarea
                    name="specialRequests"
                    rows="3"
                    value={bookingData.specialRequests}
                    onChange={handleInputChange}
                    placeholder="Any dietary restrictions, accessibility needs, or special requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-book-now">
                  📱 Book Now via WhatsApp
                </button>
                
                <p className="booking-note">
                  💡 You'll be redirected to WhatsApp to confirm your booking request
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackageDetail