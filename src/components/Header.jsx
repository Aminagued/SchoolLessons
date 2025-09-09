// src/components/Header.jsx
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ activeLink, setActiveLink }) => {
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <ul>
            <li>
              <Link
                to="/grade1"
                className={activeLink === "grade1" ? "active" : ""}
                onClick={() => handleLinkClick("grade1")}
              >
                السنة الخامسة
              </Link>
            </li>
            <li>
              <Link
                to="/grade2"
                className={activeLink === "grade2" ? "active" : ""}
                onClick={() => handleLinkClick("grade2")}
              >
                السنة الرابعة
              </Link>
            </li>
            <li>
              <Link
                to="/grade3"
                className={activeLink === "grade3" ? "active" : ""}
                onClick={() => handleLinkClick("grade3")}
              >
                السنة الثالثة
              </Link>
            </li>
            <li>
              <Link
                to="/grade4"
                className={activeLink === "grade4" ? "active" : ""}
                onClick={() => handleLinkClick("grade4")}
              >
                السنة الثانية
              </Link>
            </li>
            <li>
              <Link
                to="/grade5"
                className={activeLink === "grade5" ? "active" : ""}
                onClick={() => handleLinkClick("grade5")}
              >
                السنة الأولى
              </Link>
            </li>
            <li>
              <Link
                to="/grade6"
                className={activeLink === "grade6" ? "active" : ""}
                onClick={() => handleLinkClick("grade6")}
              >
                التحضيري
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={activeLink === "home" ? "active" : ""}
                onClick={() => handleLinkClick("home")}
              >
                الرئيسية
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mobile-menu">
          <span>☰</span>
        </div>
        <div className="logo">
          <Link to="/" onClick={() => handleLinkClick("home")}>
            <h1>PrimaryClub</h1>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
