import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLanguage } from '../contexts/LanguageContext';
import NorthIcon from '@mui/icons-material/North';
import './Footer.css'

function Footer() {
    const { t } = useLanguage();
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const currentYear = new Date().getFullYear();

    return (
        <div className='footer-wrapper'>
            <div className="footer-content">
                <div className='first-line-footer'>
                    <h5>Bilbao, {t('basqueCountry')}<br />
                        {`${time.getHours() % 12 || 12}:${String(time.getMinutes()).padStart(2, '0')} ${time.getHours() >= 12 ? 'PM' : 'AM'}`}
                    </h5>
                </div>
                <NorthIcon onClick={scrollToTop} style={{ cursor: 'pointer' }} />
            </div>
            <div className={`titulo-cortado ${isMobile ? 'mobile-scroll' : ''}`}>
                <h1>ESTUDIø INES URIBE {isMobile && 'ESTUDIø INES URIBE'}</h1>
            </div>
        </div>
    )
}

export default Footer;