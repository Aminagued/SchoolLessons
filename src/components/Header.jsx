// components/Header.jsx
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
              <a
                href="/grade1"
                className={activeLink === "grade1" ? "active" : ""}
                onClick={() => handleLinkClick("grade1")}
              >
                السنة الخامسة
              </a>
            </li>
            <li>
              <a
                href="/grade2"
                className={activeLink === "grade2" ? "active" : ""}
                onClick={() => handleLinkClick("grade2")}
              >
                السنة الرابعة
              </a>
            </li>
            <li>
              <a
                href="/grade3"
                className={activeLink === "grade3" ? "active" : ""}
                onClick={() => handleLinkClick("grade3")}
              >
                السنة الثالثة
              </a>
            </li>
            <li>
              <a
                href="/grade4"
                className={activeLink === "grade4" ? "active" : ""}
                onClick={() => handleLinkClick("grade4")}
              >
                السنة الثانية
              </a>
            </li>
            <li>
              <a
                href="/grade5"
                className={activeLink === "grade5" ? "active" : ""}
                onClick={() => handleLinkClick("grade5")}
              >
                السنة الأولى
              </a>
            </li>
            <li>
              <a
                href="/grade6"
                className={activeLink === "grade6" ? "active" : ""}
                onClick={() => handleLinkClick("grade6")}
              >
                التحضيري
              </a>
            </li>
            <li>
              <a
                href="/"
                className={activeLink === "home" ? "active" : ""}
                onClick={() => handleLinkClick("home")}
              >
                الرئسية
              </a>
            </li>
          </ul>
        </nav>
        <div className="logo">
          <h1>حقيبتي</h1>
        </div>
        <div className="mobile-menu">
          <span>☰</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
