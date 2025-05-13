import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useLanguage } from '../contexts/LanguageContext';
import './Header2.css';
import './TitleStyle.css'

const SCROLL_POSITION_KEY = 'estudio_scroll_position';

function Header2({ onContactClick }) {
    const location = useLocation();
    const [closing, setClosing] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const iconRef = useRef(null);
    const titleRef = useRef(null);
    const menuRef = useRef(null);
    // const { t, getRoute } = useLanguage();
    const { language, toggleLanguage, t, getRoute } = useLanguage();


    const handleLanguageChange = () => {
        // Guardar la posición actual de scroll
        const scrollPosition = window.scrollY;
        localStorage.setItem(SCROLL_POSITION_KEY, scrollPosition.toString());
        
        // Indicar que se está realizando un cambio de idioma
        localStorage.setItem('is_language_change', 'true');
        
        // Llamar a la función de cambio de idioma del contexto
        toggleLanguage();
    };

    const titleLetters = "ESTUDIO INES URIBE".split('').map((char, index) => {
        if (char === ' ') {
            return <span key={index} className="title-space"></span>;
        }
        return <span key={index} className="title-letter">{char}</span>;
    });

    useEffect(() => {
        const handleIconHover = () => {
            setIsMenuOpen(true);
        };

        const handleTitleHover = () => {
            setIsMenuOpen(true);
        };

        const handleMenuHover = () => {
            setIsMenuOpen(true);
        };

        const handleMouseLeave = () => {
            const isMouseOverMenu = menuRef.current?.matches(':hover');
            const isMouseOverIcon = iconRef.current?.matches(':hover');
            const isMouseOverTitle = titleRef.current?.matches(':hover');

            if (!isMouseOverMenu && !isMouseOverIcon && !isMouseOverTitle) {
                setIsMenuOpen(false);
            }
        };

        const iconElement = iconRef.current;
        const titleElement = titleRef.current;
        const menuElement = menuRef.current;
        const headerElement = document.querySelector('.header-container-mobile');

        if (iconElement) {
            iconElement.addEventListener('mouseenter', handleIconHover);
        }

        if (titleElement) {
            titleElement.addEventListener('mouseenter', handleTitleHover);
        }

        if (menuElement) {
            menuElement.addEventListener('mouseenter', handleMenuHover);
        }

        if (headerElement) {
            headerElement.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (iconElement) {
                iconElement.removeEventListener('mouseenter', handleIconHover);
            }

            if (titleElement) {
                titleElement.removeEventListener('mouseenter', handleTitleHover);
            }

            if (menuElement) {
                menuElement.removeEventListener('mouseenter', handleMenuHover);
            }

            if (headerElement) {
                headerElement.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    useEffect(() => {
        const hamburgerEl = document.querySelector('.header-hamburger');

        if (isMenuOpen && hamburgerEl) {
            hamburgerEl.style.width = '0';
            hamburgerEl.style.opacity = '0';
            hamburgerEl.style.overflow = 'hidden';
            hamburgerEl.style.margin = '0';
            hamburgerEl.style.padding = '0';
        } else if (hamburgerEl) {
            hamburgerEl.style.width = 'auto';
            hamburgerEl.style.opacity = '1';
            hamburgerEl.style.overflow = 'visible';
            hamburgerEl.style.margin = '';
            hamburgerEl.style.padding = '';
        }
    }, [isMenuOpen]);

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
        setIsMenuOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className="header-container-mobile">
            <div className="header-top-section">
                <div className='header-hamburger'>
                    {/* <DragHandleIcon 
                        ref={iconRef}
                        sx={{ fontSize: 22 }} 
                    /> */}
                    <div className='red-mini-circle'></div>
                </div>
                <div className='header-title-div'>
                    {/* <Link to="/" onClick={handleNavClick} className="header-title"> */}
                    <Link to={getRoute('home')} onClick={handleNavClick} className="header-title">
                        <h1 ref={titleRef} className="title-with-spacing">
                            {titleLetters}
                        </h1>
                    </Link>
                </div>

                <div className="language-selector">
                    <span
                        className={language === 'es' ? 'active' : ''}
                        onClick={() => language !== 'es' && handleLanguageChange()}
                    >
                        ES
                    </span>
                    <span className="divider">|</span>
                    <span
                        className={language === 'en' ? 'active' : ''}
                        onClick={() => language !== 'en' && handleLanguageChange()}
                    >
                        EN
                    </span>
                </div>
            </div>

            <div
                ref={menuRef}
                className={`navigator-mobile ${isMenuOpen ? 'open' : ''}`}
            >
                <nav>
                    <ul>
                        <li>
                            <Link
                                // to="/services"
                                to={getRoute('services')}
                                onClick={handleNavClick}
                                // className={isActive('/services') ? 'active' : ''}
                                className={isActive(getRoute('services')) ? 'active' : ''}  // ✅ CORRECTO
                            >
                                {t('services')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                // to="/portfolio"
                                to={getRoute('portfolio')}
                                onClick={handleNavClick}
                                // className={isActive('/portfolio') ? 'active' : ''}
                                className={isActive(getRoute('portfolio')) ? 'active' : ''}  // ✅ CORRECTO
                            >
                                {t('portfolio')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                // to="/about"
                                to={getRoute('about')}
                                onClick={handleNavClick}
                                // className={isActive('/about') ? 'active' : ''}
                                className={isActive(getRoute('about')) ? 'active' : ''}  // ✅ CORRECTO
                            >
                                {t('about')}
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                to="/art"
                                onClick={handleNavClick}
                                className={isActive('/art') ? 'active' : ''}
                            >
                                Art
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/code"
                                onClick={handleNavClick}
                                className={isActive('/code') ? 'active' : ''}
                            >
                                Code
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={handleContactToggle}
                                className="contact-button"
                            >
                                Contact
                            </button>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header2;
