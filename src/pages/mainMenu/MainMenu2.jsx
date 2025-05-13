import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../components/contexts/LanguageContext';
import './mainMenu.css'

// function MainMenu2({ t, getRoute }) 
function MainMenu2(){
    const { t, getRoute } = useLanguage();

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
            {/* <h1>Hola</h1> */}
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

export default MainMenu2;