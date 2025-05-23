import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './mainMenu.css'

function MainMenuPhone () {
    const {t, getRoute } = useLanguage();

    return (
        <div className='main-menu-wrapper'>
            <nav>
                    <ul>
                        <li>
                            <Link
                                to={getRoute('services')}
                                onClick={handleNavClick}
                                className={isActive(getRoute('services')) ? 'active' : ''}  // ✅ CORRECTO
                            >
                                {t('services')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={getRoute('portfolio')}
                                onClick={handleNavClick}
                                className={isActive(getRoute('portfolio')) ? 'active' : ''}  // ✅ CORRECTO
                            >
                                {t('portfolio')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={getRoute('about')}
                                onClick={handleNavClick}
                                className={isActive(getRoute('about')) ? 'active' : ''}  // ✅ CORRECTO
                            >
                                {t('about')}
                            </Link>
                        </li>
                    </ul>
                </nav>
        </div>
    )
}

export default MainMenuPhone;