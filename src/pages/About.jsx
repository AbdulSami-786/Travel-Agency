import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Aarav Sharma',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      bio: '15+ years in travel industry. Passionate about creating unforgettable experiences.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      id: 2,
      name: 'Priya Patel',
      position: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300',
      bio: 'Expert in logistics and customer experience. Loves exploring hidden gems.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      id: 3,
      name: 'Rohan Mehta',
      position: 'Travel Curator',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      bio: 'Adventure specialist with 10+ years of experience in unique travel experiences.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      id: 4,
      name: 'Ananya Singh',
      position: 'Customer Success Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
      bio: 'Dedicated to ensuring every client has a seamless and memorable journey.',
      social: { linkedin: '#', twitter: '#' }
    }
  ]

  const milestones = [
    { year: '2010', event: 'Founded with a vision to transform travel experiences' },
    { year: '2012', event: 'Expanded to international destinations' },
    { year: '2015', event: '10,000+ happy travelers milestone' },
    { year: '2018', event: 'Launched sustainable travel initiatives' },
    { year: '2020', event: 'Pioneered virtual travel experiences during pandemic' },
    { year: '2023', event: 'Recognized as Top Travel Agency by Travel & Leisure' }
  ]

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for perfection in every detail of your journey.'
    },
    {
      icon: '❤️',
      title: 'Passion',
      description: 'Our love for travel drives us to create extraordinary experiences.'
    },
    {
      icon: '🤝',
      title: 'Trust',
      description: 'Building lasting relationships through transparency and reliability.'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Committed to responsible tourism that benefits local communities.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Constantly evolving to offer cutting-edge travel solutions.'
    },
    {
      icon: '🌍',
      title: 'Global Mindset',
      description: 'Bridging cultures and creating meaningful connections worldwide.'
    }
  ]

  const certifications = [
    { name: 'IATA Certified', icon: '✈️' },
    { name: 'Sustainable Tourism', icon: '🌿' },
    { name: '5-Star Rating', icon: '⭐' },
    { name: 'Award Winning', icon: '🏆' },
    { name: '24/7 Support', icon: '🛡️' },
    { name: 'Best Value', icon: '💎' }
  ]

  return (
    <div className="about-professional">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-main-title">
              Crafting <span className="gradient-text">Extraordinary</span> Journeys Since 2010
            </h1>
            <p className="about-hero-subtitle">
              We are passionate storytellers, dedicated to transforming your travel dreams into 
              unforgettable realities. With over a decade of expertise, we've been trusted by 
              50,000+ travelers worldwide.
            </p>
            <div className="about-hero-stats">
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Happy Travelers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">75+</div>
                <div className="stat-label">Destinations</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">13+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h2>Our Mission</h2>
              <p>
                To create transformative travel experiences that inspire personal growth, 
                foster cultural understanding, and leave positive impacts on both travelers 
                and local communities. We believe every journey should be a chapter in your 
                life's greatest story.
              </p>
            </div>
            <div className="vision-card">
              <div className="card-icon">🔭</div>
              <h2>Our Vision</h2>
              <p>
                To be the world's most trusted travel curator, renowned for crafting 
                bespoke journeys that redefine luxury, authenticity, and sustainable 
                tourism. We envision a world where travel becomes a force for good.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey Through Time</h2>
            <p>Milestones that shaped our story of excellence</p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <div className="timeline-event">{milestone.event}</div>
                  <div className="timeline-dot"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide every journey we create</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Expert Team</h2>
            <p>The passionate minds behind your perfect journey</p>
          </div>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
                <div className="team-image-container">
                  <img src={member.image} alt={member.name} />
                  <div className="team-social">
                    <a href={member.social.linkedin}>💼</a>
                    <a href={member.social.twitter}>🐦</a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Accreditations</h2>
            <p>Trusted by industry leaders and travelers worldwide</p>
          </div>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <div className="cert-icon">{cert.icon}</div>
                <span>{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Write Your Next Chapter?</h2>
            <p>Let's collaborate to create a journey that's uniquely yours</p>
            <div className="cta-buttons">
              <Link to="/packages" className="btn-primary btn-large">
                Explore Our Packages
              </Link>
              <Link to="/contact" className="btn-secondary btn-large">
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Travelers Say</h2>
            <p>Real stories from our global community of explorers</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-text">
                "Wanderlust Travels transformed our honeymoon into a fairy tale. Every detail was perfect!"
              </div>
              <div className="testimonial-author">
                <strong>Sarah & Mike Johnson</strong>
                <span>Maldives Honeymoon</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-text">
                "The cultural immersion in Japan was beyond our expectations. Truly life-changing!"
              </div>
              <div className="testimonial-author">
                <strong>David Chen</strong>
                <span>Japan Cultural Tour</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-text">
                "Professional, responsive, and incredibly knowledgeable. Best travel experience ever!"
              </div>
              <div className="testimonial-author">
                <strong>Maria Rodriguez</strong>
                <span>European Adventure</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About