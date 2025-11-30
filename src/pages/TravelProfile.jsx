import React, { useState } from 'react'
import './TravelProfile.css'

const TravelProfile = ({ userProfile, setUserProfile }) => {
  const [formData, setFormData] = useState(userProfile || {
    name: '',
    email: '',
    phone: '',
    dob: '',
    nationality: '',
    passportNumber: '',
    travelStyle: '',
    interests: [],
    dietaryPreferences: '',
    emergencyContact: ''
  })

  const travelStyles = ['Adventure', 'Luxury', 'Cultural', 'Relaxation', 'Family', 'Solo']
  const interestsList = ['Beaches', 'Mountains', 'Heritage', 'Wildlife', 'Food', 'Shopping', 'Adventure Sports', 'Yoga', 'Photography']

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleInterestToggle = (interest) => {
    const updatedInterests = formData.interests.includes(interest)
      ? formData.interests.filter(i => i !== interest)
      : [...formData.interests, interest]
    
    setFormData({
      ...formData,
      interests: updatedInterests
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserProfile(formData)
    alert('Travel profile saved successfully! 🎉')
  }

  return (
    <div className="travel-profile">
      <div className="container">
        <div className="profile-hero">
          <h1 className="page-title">Your Travel Profile</h1>
          <p className="page-subtitle">Help us craft your perfect travel experience</p>
        </div>

        <div className="profile-content">
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-section">
              <h2>👤 Personal Information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Nationality</label>
                  <input
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Passport Number</label>
                  <input
                    type="text"
                    name="passportNumber"
                    value={formData.passportNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>🎯 Travel Preferences</h2>
              
              <div className="form-group">
                <label>Preferred Travel Style</label>
                <div className="travel-styles">
                  {travelStyles.map(style => (
                    <label key={style} className="style-option">
                      <input
                        type="radio"
                        name="travelStyle"
                        value={style}
                        checked={formData.travelStyle === style}
                        onChange={handleInputChange}
                      />
                      <span>{style}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Travel Interests</label>
                <div className="interests-grid">
                  {interestsList.map(interest => (
                    <label key={interest} className="interest-option">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestToggle(interest)}
                      />
                      <span>{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Dietary Preferences</label>
                <select
                  name="dietaryPreferences"
                  value={formData.dietaryPreferences}
                  onChange={handleInputChange}
                >
                  <option value="">Select Preference</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                  <option value="No Restrictions">No Restrictions</option>
                </select>
              </div>
            </div>

            <div className="form-section">
              <h2>🆘 Emergency Contact</h2>
              <div className="form-group">
                <label>Emergency Contact Number</label>
                <input
                  type="tel"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleInputChange}
                  placeholder="+91 XXX XXX XXXX"
                />
              </div>
            </div>

            <button type="submit" className="btn-save-profile">
              💾 Save Travel Profile
            </button>
          </form>

          {userProfile && (
            <div className="profile-summary">
              <h3>Your Profile Summary</h3>
              <div className="summary-card">
                <p><strong>Name:</strong> {userProfile.name}</p>
                <p><strong>Travel Style:</strong> {userProfile.travelStyle}</p>
                <p><strong>Interests:</strong> {userProfile.interests.join(', ')}</p>
                <p><strong>Dietary:</strong> {userProfile.dietaryPreferences}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TravelProfile