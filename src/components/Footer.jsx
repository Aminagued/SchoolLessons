// src/components/Footer.jsx
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Elementary Learning Hub</h3>
            <p>
              Providing quality educational resources for elementary school
              students, teachers, and parents.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <span>📘</span>
              </a>
              <a href="#" aria-label="Twitter">
                <span>🐦</span>
              </a>
              <a href="#" aria-label="Instagram">
                <span>📸</span>
              </a>
              <a href="#" aria-label="YouTube">
                <span>📺</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/grade1">Grade 1</a>
              </li>
              <li>
                <a href="/grade2">Grade 2</a>
              </li>
              <li>
                <a href="/grade3">Grade 3</a>
              </li>
              <li>
                <a href="/grade4">Grade 4</a>
              </li>
              <li>
                <a href="/grade5">Grade 5</a>
              </li>
              <li>
                <a href="/grade6">Grade 6</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Math Worksheets</a>
              </li>
              <li>
                <a href="#">Reading Materials</a>
              </li>
              <li>
                <a href="#">Science Projects</a>
              </li>
              <li>
                <a href="#">Art Activities</a>
              </li>
              <li>
                <a href="#">Lesson Plans</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <p>📧 info@elementarylearninghub.com</p>
              <p>📞 (123) 456-7890</p>
              <p>🏫 123 Education Street, Learning City</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Elementary Learning Hub. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
