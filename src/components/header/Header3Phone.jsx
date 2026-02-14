import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import { useLanguage } from '../contexts/LanguageContext';
import './Header3Phone.css';

function Header3Phone({ onContactClick, onAboutClick }) {
    const location = useLocation();
    const titleRef = useRef(null);
    const { language, toggleLanguage, t, getRoute } = useLanguage();
    const [showSubmenu, setShowSubmenu] = useState(false);

    const isHomePage = location.pathname === '/';
    const isOnArtPage = location.pathname === getRoute('art');
    const isOnCodePage = location.pathname === getRoute('code');
    const shouldShowSubmenu = isOnArtPage || isOnCodePage;

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
        <div className="phone-header-container">
            <div className="phone-header-wrapper">
                <div className="phone-header-logo">
                    <div className='phone-logo-indicator'></div>
                    <Link to={getRoute('home')} className="phone-header-title-link">
                        <h1 ref={titleRef} className="phone-header-title-text">
                            ESTUDIØ INES URIBE
                        </h1>
                    </Link>
                </div>

                <div className="phone-header-bottom">
                    <div className="phone-header-nav">
                        <nav className="phone-main-nav">
                            <ul className="phone-nav-list">
                                <li className="phone-nav-item">
                                    <Link
                                        to={getRoute('services')}
                                        className={`phone-nav-link ${isActive(getRoute('services')) ? 'phone-nav-active' : ''}`}
                                    >
                                        {isActive(getRoute('services')) && <span className="phone-link-indicator"></span>}
                                        {/* [{t('studio')}] */}
                                        {t('studio')}
                                    </Link>
                                </li>
                                <li 
                                    className={`phone-nav-item ${shouldShowSubmenu ? 'phone-nav-item-expandable' : ''}`}
                                    onMouseEnter={() => shouldShowSubmenu && setShowSubmenu(true)}
                                    onMouseLeave={() => setShowSubmenu(false)}
                                >
                                    <Link
                                        to={getRoute('portfolio')}
                                        className={`phone-nav-link ${isActive(getRoute('portfolio')) ? 'phone-nav-active' : ''}`}
                                    >
                                        {isActive(getRoute('portfolio')) && <span className="phone-link-indicator"></span>}
                                        {/* [{t('portfolio')}] */}
                                        {t('portfolio')}
                                    </Link>
                                    
                                    {shouldShowSubmenu && showSubmenu && otherRoute && (
                                        <div className="phone-portfolio-submenu">
                                            <Link 
                                                to={otherRoute.route}
                                                className="phone-submenu-link"
                                            >
                                                <EastIcon className="phone-submenu-icon" />
                                                <span>{otherRoute.label}</span>
                                            </Link>
                                        </div>
                                    )}
                                </li>
                            
                                <li className="phone-nav-item">
                                    <button 
                                        className="phone-nav-link" 
                                        onClick={onAboutClick}
                                    >
                                        {/* [{t('about')}] */}
                                        {t('about')}
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {!isHomePage && (
                        <div className="phone-language-toggle">
                            <span
                                className={`phone-lang-option ${language === 'es' ? 'phone-lang-active' : ''}`}
                                onClick={() => language !== 'es' && handleLanguageChange()}
                            >
                                ES
                            </span>
                            <span className="phone-lang-divider">|</span>
                            <span
                                className={`phone-lang-option ${language === 'en' ? 'phone-lang-active' : ''}`}
                                onClick={() => language !== 'en' && handleLanguageChange()}
                            >
                                EN
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header3Phone;