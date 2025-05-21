import { useLanguage } from '../../components/contexts/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Portfolio.css';

function Portfolio() {
    const { t, getRoute } = useLanguage();
    const navigate = useNavigate();
    const [animatingDiv, setAnimatingDiv] = useState(null);
    
    const handleClick = (e, route) => {
        e.preventDefault();
        
        // Identificar qué div estamos animando
        const isArt = route === getRoute('art');
        setAnimatingDiv(isArt ? 'art' : 'code');
        
        // Navegar después de la animación (2s de expansión + 2s de espera + tiempo para desvanecerse)
        setTimeout(() => {
            navigate(route);
        }, 4000);
    };
    
    return (
        <div className='portfolio-wrapper'>
            <div className='portfolio-options'>
                <div className={`option-art ${animatingDiv === 'art' ? 'animating' : ''}`}>
                    <Link to={getRoute('art')} onClick={(e) => handleClick(e, getRoute('art'))}>
                        <h1>{t('art')}</h1>
                        <img src="/CAPTURAS/alazne.png" alt="" />
                    </Link>
                </div>
                <div className={`option-web ${animatingDiv === 'code' ? 'animating' : ''}`}>
                    <Link to={getRoute('code')} onClick={(e) => handleClick(e, getRoute('code'))}>
                        <h1>{t('code')}</h1>
                        <img src="/CAPTURAS/gif.gif" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
