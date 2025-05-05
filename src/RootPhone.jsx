import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HeaderPhone from './components/header/HeaderPhone';
import { useState, useEffect } from 'react';
import './RootPhone.css'



function RootPhone() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      let scrollTimeout;

      const handleScroll = () => {
        clearTimeout(scrollTimeout);

        setIsUserScrolling(true);

        scrollTimeout = setTimeout(() => {
          setIsUserScrolling(false);

          if (window.scrollY > 0) {
            setIsMenuOpen(false);
          }
        }, 150);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    }
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <HeaderPhone 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        onMenuClick={handleMenuClick}
        className={location.pathname === '/contact' ? 'header-special-bg' : ''}
      />
      {/* <div className={`root-phone__content ${isMenuOpen ? 'shifted' : ''}`}>
        <Outlet context={{ isMenuOpen, setIsMenuOpen }} />
      </div> */}
      <div 
        className={`root-phone__content ${isMenuOpen ? 'shifted' : ''}`}
        key={location.pathname} 
      >
        <Outlet context={{ isMenuOpen, setIsMenuOpen }} />
      </div>
    </>
  );
}

export default RootPhone;