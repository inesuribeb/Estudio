import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Header3.css'; 

function Header3({ onContactClick, onAboutClick }) {
    const location = useLocation();
    const titleRef = useRef(null);
    const { language, toggleLanguage, t, getRoute } = useLanguage();

    const isHomePage = location.pathname === '/';

    const isActive = (route) => {
        return location.pathname === route;
    };

    const handleLanguageChange = () => {
        toggleLanguage();
    };

    return (
        <div className="header-container">
            <div className="header-wrapper">
                <div className="header-logo">
                    <div className='logo-indicator'></div>
                    <Link to={getRoute('home')} className="header-title-link">
                        <h1 ref={titleRef} className="header-title-text">
                            ESTUDIO INES URIBE
                        </h1>
                    </Link>
                </div>

                <div className="header-nav">
                    <nav className="main-nav">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <Link
                                    to={getRoute('services')}
                                    className={`nav-link ${isActive(getRoute('services')) ? 'nav-active' : ''}`}
                                >
                                    {isActive(getRoute('services')) && <span className="link-indicator"></span>}
                                    {/* [{t('services')}] */}
                                    [ESTUDIO]
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to={getRoute('portfolio')}
                                    className={`nav-link ${isActive(getRoute('portfolio')) ? 'nav-active' : ''}`}
                                >
                                    {isActive(getRoute('portfolio')) && <span className="link-indicator"></span>}
                                    [{t('portfolio')}]
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link
                                    to={getRoute('about')}
                                    className={`nav-link ${isActive(getRoute('about')) ? 'nav-active' : ''}`}
                                >
                                    {isActive(getRoute('about')) && <span className="link-indicator"></span>}
                                    [{t('about')}]
                                </Link>
                            </li> */}
                            <li className="nav-item">
                            <button 
                                className="nav-link" 
                                onClick={onAboutClick}
                            >
                                [Contact]
                            </button>
                        </li>
                        </ul>
                    </nav>
                </div>

                {/* <div className="language-toggle">
                    <span
                        className={`lang-option ${language === 'es' ? 'lang-active' : ''}`}
                        onClick={() => language !== 'es' && handleLanguageChange()}
                    >
                        ES
                    </span>
                    <span className="lang-divider">|</span>
                    <span
                        className={`lang-option ${language === 'en' ? 'lang-active' : ''}`}
                        onClick={() => language !== 'en' && handleLanguageChange()}
                    >
                        EN
                    </span>
                </div> */}

                {/* Renderizar el language toggle solo si NO estamos en la página de inicio */}
                {!isHomePage && (
                    <div className="language-toggle">
                        <span
                            className={`lang-option ${language === 'es' ? 'lang-active' : ''}`}
                            onClick={() => language !== 'es' && handleLanguageChange()}
                        >
                            ES
                        </span>
                        <span className="lang-divider">|</span>
                        <span
                            className={`lang-option ${language === 'en' ? 'lang-active' : ''}`}
                            onClick={() => language !== 'en' && handleLanguageChange()}
                        >
                            EN
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header3;