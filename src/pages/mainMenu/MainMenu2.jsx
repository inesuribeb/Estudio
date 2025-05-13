import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../components/contexts/LanguageContext';
import './mainMenu.css'

function MainMenu2() {
    const { t, getRoute } = useLanguage();
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    const handleNavClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className='main-menu-wrapper'>
            <div className='red-mini-circle-menu'></div>

            <nav>
                <ul>
                    <li>
                        <Link
                            to={getRoute('services')}
                            onClick={handleNavClick}
                            className={isActive(getRoute('services')) ? 'active' : ''}
                        >
                            <div className="link-content">
                                <span className="menu-number menu-number-right">[01]</span>
                                <span className="text-content">{t('services')}</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={getRoute('portfolio')}
                            onClick={handleNavClick}
                            className={isActive(getRoute('portfolio')) ? 'active' : ''}
                        >
                            <div className="link-content">
                                <span className="menu-number menu-number-left">[02]</span>
                                <span className="text-content">{t('portfolio')}</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={getRoute('about')}
                            onClick={handleNavClick}
                            className={isActive(getRoute('about')) ? 'active' : ''}
                        >
                            <div className="link-content">
                                <span className="menu-number menu-number-right">[03]</span>
                                <span className="text-content">{t('about')}</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MainMenu2;