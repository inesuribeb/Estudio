import { useLanguage } from '../../components/contexts/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './PortfolioPhone.css';

function PortfolioPhone() {
    const { t, getRoute } = useLanguage();
    const navigate = useNavigate();
    const [animatingDiv, setAnimatingDiv] = useState(null);
    
    const handleClick = (e, route) => {
        e.preventDefault();
        
        console.log('PortfolioPhone click:', route);
        
        const isArt = route === getRoute('art');
        setAnimatingDiv(isArt ? 'art' : 'code');
        
        setTimeout(() => {
            navigate(route);
        }, 3000);
    };
    
    return (
        <div className='phone-portfolio-wrapper'>
            <div className='phone-portfolio-options'>
                <div className={`phone-option-art ${animatingDiv === 'art' ? 'phone-animating' : ''}`}>
                    <Link to={getRoute('art')} onClick={(e) => handleClick(e, getRoute('art'))}>
                        <h1>{t('art')}</h1>
                        <img src="/CAPTURAS/alazne.png" alt="" />
                    </Link>
                </div>
                <div className={`phone-option-web ${animatingDiv === 'code' ? 'phone-animating' : ''}`}>
                    <Link to={getRoute('code')} onClick={(e) => handleClick(e, getRoute('code'))}>
                        <h1>{t('code')}</h1>
                        <img src="/CAPTURAS/prueba.jpg" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PortfolioPhone;