import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import './HeaderPhone.css'

function HeaderPhone({ isMenuOpen, setIsMenuOpen, className }) {

  const [searchParams, setSearchParams] = useSearchParams();

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('mobile-menu')) {
      e.stopPropagation();
      setIsMenuOpen(false);
    }
  };

  const handleMenuClick = (e) => {
    e.stopPropagation();
    if (isMenuOpen) {
      setShowArtSubmenu(false);
      setShowCodeSubmenu(false);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/'); 
  };

  const [showArtSubmenu, setShowArtSubmenu] = useState(false);
  const [showCodeSubmenu, setShowCodeSubmenu] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      setShowArtSubmenu(false);
      setShowCodeSubmenu(false);
    }
  }, [isMenuOpen]);

  const handleArtClick = (e) => {
    e.preventDefault();
    setShowArtSubmenu(true);
  };

  const handleCodeClick = (e) => {
    e.preventDefault();
    setShowCodeSubmenu(true);
  };

  return (
    <>
      <header className={"header-phone " + className}>
      {/* <header className={`header-phone ${location.pathname === '/contact' && 'header-special-bg'}`}> */}


        <div className="header-phone__container">

          <button
            onClick={handleMenuClick}
            className={`hamburger-button ${isMenuOpen ? 'active' : ''}`}
          >
            <span className="hamburger-line top"></span>
            <span className="hamburger-line middle"></span>
            <span className="hamburger-line bottom"></span>
          </button>

          {/* {!isMenuOpen && (
            <div className="header-phone__title">
              INES URIBE
            </div>
          )} */}
          {!isMenuOpen && (
            <div
              className="header-phone__title"
              onClick={handleTitleClick}
              style={{ cursor: 'pointer' }} 
            >
              INES URIBE
            </div>
          )}
        </div>
      </header>

      {isMenuOpen && (
        <div className="mobile-menu" onClick={handleOverlayClick}>
          <nav className="mobile-menu__nav" onClick={e => e.stopPropagation()}>
            <Link
              to="#"
              className="mobile-menu__link"
              onClick={handleArtClick}
            >
              <span>Art</span>
              <span className="arrow-icon"><KeyboardArrowRightIcon /></span>
            </Link>
            <Link
              to="#"
              className="mobile-menu__link"
              onClick={handleCodeClick}
            >
              <span>Code</span>
              <span className="arrow-icon"><KeyboardArrowRightIcon /></span>
            </Link>

            <Link
              to="/contact"
              className="mobile-menu__link"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
            >
              <span>Contact</span>
              <span className="arrow-icon"><KeyboardArrowRightIcon /></span>
            </Link>
          </nav>
        </div>
      )}
      {isMenuOpen && showArtSubmenu && (
        <div className="mobile-menu submenu">
          <nav className="mobile-menu__nav" onClick={e => e.stopPropagation()}>
            <div className="arrow-icon-left">
              <button onClick={() => setShowArtSubmenu(false)}>
                <KeyboardArrowLeftIcon />
              </button>
            </div>
            <Link
              to="/art?category=all"
              className="mobile-menu__link"
              onClick={() => {
                setSearchParams({ category: 'all' });
                setIsMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
            >
              <span>All</span>
            </Link>
            <Link
              to="/art?category=photography"
              className="mobile-menu__link"
              onClick={() => {
                setSearchParams({ category: 'Photography' });
                setIsMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
            >
              <span>Photography</span>
            </Link>
            <Link
              to="/art?category=design"
              className="mobile-menu__link"
              onClick={() => {
                setSearchParams({ category: 'Design' });
                setIsMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
            >
              <span>Design</span>
            </Link>
          </nav>
        </div>
      )}

      {isMenuOpen && showCodeSubmenu && (
        <div className="mobile-menu submenu">
          <nav className="mobile-menu__nav" onClick={e => e.stopPropagation()}>
            <div className="arrow-icon-left">
              <button onClick={() => setShowCodeSubmenu(false)}>
                <KeyboardArrowLeftIcon />
              </button>
            </div>
            <Link
              to="/code?category=all"
              className="mobile-menu__link"
              onClick={() => {
                setSearchParams({ category: 'all' });
                setIsMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
            >
              <span>All</span>
            </Link>
            <Link
              to="/code?category=frontend"
              className="mobile-menu__link"
              onClick={() => {
                setSearchParams({ category: 'front-end' });
                setIsMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
            >
              <span>Front-End</span>
            </Link>
            <Link
              to="/code?category=fullstack"
              className="mobile-menu__link"
              onClick={() => {
                setSearchParams({ category: 'full-stack' });
                setIsMenuOpen(false);
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
            >
              <span>Full-Stack</span>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}


export default HeaderPhone;