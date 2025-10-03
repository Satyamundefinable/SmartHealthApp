import React from "react";
import "../Components/UI/CSS/Home.css";
import MyLocationMap from "./Location";

const HomePage = () => {
  return (
    <>
      <section className="mw-hero-section">
        <div className="mw-container">
          <div className="mw-hero-content">
            <div className="mw-hero-text">
              <h1>
                Your Mental Health{" "}
                <span className="highlight">Journey Starts Here</span>
              </h1>
              <p>
                Connect with licensed psychiatrists, track your progress, and
                access wellness resources designed specifically for students
                like you.
              </p>
              <div className="mw-hero-actions">
                <button className="mw-button mw-button-cta">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 4C16.418 4 20 7.582 20 12C20 16.418 16.418 20 12 20C7.582 20 4 16.418 4 12C4 7.582 7.582 4 12 4ZM11 7H13V15H11V7ZM11 17H13V19H11V17Z"
                      fill="white"
                    />
                  </svg>
                  Start 21-Days Free Trial
                </button>
                <a href="#counselor" className="mw-talk-counselor">
                  Talk to Counselor
                </a>
              </div>
            </div>
            <div className="mw-hero-image-placeholder">
              <img
                src="\public\meditatingpeople.jpg"
                alt="Person practicing yoga in a peaceful indoor setting, sitting cross-legged on a mat with hands resting on knees. The environment is calm and bright, suggesting relaxation and mindfulness. No visible text in the image. The emotional tone is serene and encouraging."
              />
            </div>
          </div>
          <div className="mw-stats">
            <div className="mw-stat-item">
              <strong>10K+</strong>
              <span>Students Helped</span>
            </div>
            <div className="mw-stat-item">
              <strong>24/7</strong>
              <span>Support Available</span>
            </div>
            <div className="mw-stat-item">
              <strong>95%</strong>
              <span>Success Rate</span>
            </div>
          </div>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.793393752754!2d78.76635397414405!3d23.825944823489113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978d15c01940a2b%3A0x53f0bc9db8fc188e!2z4KSh4KWJ4KWwIOCkueCksOClgOCkuOCkv-CkguCkuSDgpJfgpYzgpLAg4KS14KS_4KS24KWN4KS14KS14KS_4KSm4KWN4KSv4KS-4KSy4KSvLCDgpLjgpL7gpJfgpLA!5e0!3m2!1shi!2sin!4v1758196939889!5m2!1shi!2sin"
            width="900"
            height="450"
            style={{margin:"50px 0 0 0"}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </section>
    </>
  );
};

export default HomePage;
