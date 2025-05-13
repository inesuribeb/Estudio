import { useState , useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header({ onContactClick }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const location = useLocation();
  const [closing, setClosing] = useState(false);

  const handleContactToggle = () => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent?.classList.contains('shifted')) {
      setClosing(true);
      setTimeout(() => {
        setClosing(false);
        onContactClick();
      }, 600);
    } else {
      onContactClick();
    }
  };

  const handleNavClick = () => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent?.classList.contains('shifted')) {
      handleContactToggle();
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    if (location.state?.from === '/') {
      setShouldAnimate(true);
    }
  }, []);

  return (
    <div className="header-container-desktop">
      <div className="header-home-desktop">
        <Link to="/"
          onClick={handleNavClick}

        >
          <h1 className={shouldAnimate ? 'typewriter' : ''}>Estudio Ines Uribe</h1>
        </Link>
      </div>
      <div className="navigator-desktop">
        <nav>
          <ul>
            <li>
              <Link
                to="/art"
                onClick={handleNavClick}
                // className={isActive('/art') ? 'active' : ''}
                className={`${isActive('/art') ? 'active' : ''} ${shouldAnimate ? 'typewriter-delay-1' : ''}`}
              >
                Art
              </Link>
            </li>
            <li>
              <Link
                to="/code"
                onClick={handleNavClick}
                // className={isActive('/code') ? 'active' : ''}
                className={`${isActive('/code') ? 'active' : ''} ${shouldAnimate ? 'typewriter-delay-2' : ''}`}
              >
                Code
              </Link>
            </li>
            <li>
              <button
                onClick={handleContactToggle}

                // className="contact-button"
                className={`contact-button ${shouldAnimate ? 'typewriter-delay-3' : ''}`}

              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;