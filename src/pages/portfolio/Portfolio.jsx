import { useLanguage } from '../../components/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import './Portfolio.css'

function Portfolio() {
    const { t, getRoute } = useLanguage();
    return (
        <div className='portfolio-wrapper'>
            <div className='portfolio-options'>
                <div className='option-art'>
                    <Link to={getRoute('art')}>
                        <h1>{t('art')}</h1>
                        <img src="/CAPTURAS/alazne.png" alt="" />
                        {/* <img src="/CAPTURAS/2.2.2.png" alt="" /> */}
                    </Link>
                </div>
                <div className='option-web'>
                    <Link to={getRoute('code')}>
                        <h1>{t('code')}</h1>
                        <img src="/CAPTURAS/gif.gif" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;