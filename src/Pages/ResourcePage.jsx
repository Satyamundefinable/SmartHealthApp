import React from 'react'
import "../Components/UI/CSS/resources.css"

const ResourcePage = () => {
  return (
   <>
    <section className="mw-features-section">
          <div className="mw-container">
            <span className="mw-tag-center">Comprehensive Mental Health Platform</span>
            <h2>Everything You Need for Mental Wellness</h2>
            <p className="mw-section-description">
              From professional therapy sessions to daily wellness tools, we've got your mental health covered.
            </p>

            <div className="mw-feature-grid">
               <div className="mw-feature-card">
                <div className="mw-icon">🆓</div> {/* Placeholder icon */}
                <h3>Free Trial</h3>
                <p>Enroll in 21-days free activities to heal or transform yourself.</p>
                <button className="mw-button mw-button-blue">Start Free Trial Now</button>
              </div>
              <div className="mw-feature-card">
                <div className="mw-icon">💡</div> {/* Placeholder icon */}
                <h3>Therapy Sessions</h3>
                <p>Connect with licensed psychiatrists for guided activities and professional sessions. 7 days free, then continue with affordable plans.</p>
                <button className="mw-button mw-button-green">Book Session</button>
              </div>
              <div className="mw-feature-card">
                <div className="mw-icon">📈</div> {/* Placeholder icon */}
                <h3>Progress Tracking</h3>
                <p>Monitor your mental health journey with daily check-ins, mood tracking, and personalized insights to celebrate your growth.</p>
                <button className="mw-button mw-button-purple">Track Progress</button>
              </div>
              <div className="mw-feature-card">
                <div className="mw-icon">🛍️</div> {/* Placeholder icon */}
                <h3>Wellness Store</h3>
                <p>Access curated books, wellness tools, and resources with secure payment. Everything you need for your mental health toolkit.</p>
                <button className="mw-button mw-button-blue">Browse Store</button>
              </div>
              <div className="mw-feature-card">
                <div className="mw-icon">🤖</div> {/* Placeholder icon */}
                <h3>AI Chatbot Support</h3>
                <p>Get instant guidance, daily affirmations, and mindful exercises from our AI companion trained in mental health support.</p>
                <button className="mw-button mw-button-purple">Start Chat</button>
              </div>
              <div className="mw-feature-card">
                <div className="mw-icon">🫂</div> {/* Placeholder icon */}
                <h3>Community Support</h3>
                <p>Join a supportive community of students sharing similar experiences. Connect, share, and grow together safely.</p>
                <button className="mw-button mw-button-blue">Join Community</button>
              </div>
             
              <div className="mw-feature-card">
                <div className="mw-icon">🔔</div> {/* Placeholder icon */}
                <h3>Smart Reminders</h3>
                <p>Never miss your wellness routine with intelligent notifications for sessions, exercises, and self-care activities.</p>
                <button className="mw-button mw-button-blue">Set Reminders</button>
              </div>
            </div>
          </div>
        </section>
   
   </>
  )
}

export default ResourcePage