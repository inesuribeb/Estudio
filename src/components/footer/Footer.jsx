import NorthIcon from '@mui/icons-material/North';
import './Footer.css'

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="footer-content">
        {/* <div className={`footer-content ${className || ''}`}> */}

            <div className="footer-text">
                {/* <h1 className='my-name'>INES URIBE</h1> */}
                <h1>Copyright © 2024 Ines Uribe. All Rights Reserved.</h1>
            </div>
            <NorthIcon onClick={scrollToTop} style={{ cursor: 'pointer' }} />
        </div>
    )
}

export default Footer;