import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './mainMenu.css'

function MainMenu () {
    const location = useLocation();
    const {t, getRoute } = useLanguage();

    // Función para verificar si una ruta está activa
    const isActive = (path) => {
        return location.pathname === path;
    };

    const handleNavClick = () => {
        // Si necesitas realizar alguna acción al hacer clic en un enlace, agrégala aquí
        // Por ejemplo, desplazarse al inicio de la página:
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
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

export default MainMenu;