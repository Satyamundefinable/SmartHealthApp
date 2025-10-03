import React from 'react'
import "../Components/UI/CSS/about.css"

const AboutPage = () => {
  return (
    <>
    <section className="mw-privacy-section">
          <div className="mw-container">
            <span className="mw-tag-left">Your Privacy & Safety First</span>
            <div className="mw-privacy-content">
              <div className="mw-privacy-text">
                <h2>Secure, Confidential, and Always Available</h2>
                <div className="mw-privacy-item">
                  <span className="mw-icon-small">🛡️</span>
                  <div>
                    <h3>HIPAA Compliant</h3>
                    <p>Your data is encrypted and protected with medical-grade security.</p>
                  </div>
                </div>
                <div className="mw-privacy-item">
                  <span className="mw-icon-small">✈️</span>
                  <div>
                    <h3>Offline Access</h3>
                    <p>Access your wellness tools and resources even without internet.</p>
                  </div>
                </div>
                <div className="mw-privacy-item">
                  <span className="mw-icon-small">🆘</span>
                  <div>
                    <h3>Crisis Support</h3>
                    <p>24/7 emergency support and immediate crisis intervention available.</p>
                  </div>
                </div>
              </div>
              <div className="mw-trial-cta">
                <h3>Start Your Free Trial</h3>
                <p>Join thousands of students who have transformed their mental health journey with MindWell.</p>
                <button className="mw-button mw-button-green-gradient">Get Started - 7 Days Free</button>
                <p className="mw-small-text">No credit card required • Cancel anytime • 100% confidential</p>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default AboutPage