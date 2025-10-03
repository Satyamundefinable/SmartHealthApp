import React from "react";
import "./CSS/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="mindcare-logo footer-div">
          <h2>MindCare</h2>
          <p>Empowering students with comprehensive mental health support and wellness tools </p>
        </div>
        <div className="footer-div">
          <h4>
            Services
          </h4>
          <ul>
            <li>Therapy Sessions</li>
            <li>Progress Tracker</li>
            <li>Crisis Support</li>
            <li>Wellness Store</li>
          </ul>
        </div>
        <div className="footer-div">
          <h4>
            Support
          </h4>
          <ul>
            <li>Help Center</li>
            <li>Emergency Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="footer-div">
          <h4>
            Contact
          </h4>
          <ul>
            <li>Emergency:_______</li>
            <li>Crisis Text:_____</li>
            <li>Support:help@mindcare.com</li>
          </ul>
        </div>
        <a href="tel:+91 98177 40044" className="floating-emergency-button">
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
          !! Emergency Help
        </a>
      </footer>
    </>
  );
};

export default Footer;
