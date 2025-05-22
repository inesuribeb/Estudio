import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import { useLanguage } from '../contexts/LanguageContext';
import './Header3.css'; 

function Header3({ onContactClick, onAboutClick }) {
    const location = useLocation();
    const titleRef = useRef(null);
    const { language, toggleLanguage, t, getRoute } = useLanguage();
    const [showSubmenu, setShowSubmenu] = useState(false);

    const isHomePage = location.pathname === '/';
    const isOnArtPage = location.pathname === getRoute('art');
    const isOnCodePage = location.pathname === getRoute('code');
    const shouldShowSubmenu = isOnArtPage || isOnCodePage;

    // const isHomePage = location.pathname === '/';

    const isActive = (route) => {
        return location.pathname === route;
    };

    const handleLanguageChange = () => {
        toggleLanguage();
    };

    const getOtherRoute = () => {
        if (isOnArtPage) {
            return { route: getRoute('code'), label: 'Web', icon: true };
        } else if (isOnCodePage) {
            return { route: getRoute('art'), label: 'Art', icon: true };
        }
        return null;
    };

    const otherRoute = getOtherRoute();

    return (
        <div className="header-container">
            <div className="header-wrapper">
                <div className="header-logo">
                    <div className='logo-indicator'></div>
                    <Link to={getRoute('home')} className="header-title-link">
                        <h1 ref={titleRef} className="header-title-text">
                            ESTUDIØ INES URIBE
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
                            {/* <li className="nav-item">
                                <Link
                                    to={getRoute('portfolio')}
                                    className={`nav-link ${isActive(getRoute('portfolio')) ? 'nav-active' : ''}`}
                                >
                                    {isActive(getRoute('portfolio')) && <span className="link-indicator"></span>}
                                    [{t('portfolio')}]
                                </Link>
                            </li> */}
                            <li 
                                className={`nav-item ${shouldShowSubmenu ? 'nav-item-expandable' : ''}`}
                                onMouseEnter={() => shouldShowSubmenu && setShowSubmenu(true)}
                                onMouseLeave={() => setShowSubmenu(false)}
                            >
                                <Link
                                    to={getRoute('portfolio')}
                                    className={`nav-link ${isActive(getRoute('portfolio')) ? 'nav-active' : ''}`}
                                >
                                    {isActive(getRoute('portfolio')) && <span className="link-indicator"></span>}
                                    [{t('portfolio')}]
                                </Link>
                                
                                {shouldShowSubmenu && showSubmenu && otherRoute && (
                                    <div className="portfolio-submenu">
                                        <Link 
                                            to={otherRoute.route}
                                            className="submenu-link"
                                        >
                                            <EastIcon className="submenu-icon" />
                                            <span>{otherRoute.label}</span>
                                        </Link>
                                    </div>
                                )}
                            </li>
                        
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