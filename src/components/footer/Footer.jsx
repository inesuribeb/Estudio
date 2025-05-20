import NorthIcon from '@mui/icons-material/North';
import './Footer.css'

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <div className='footer-wrapper'>
            <div className="footer-content">
                {/* <div className={`footer-content ${className || ''}`}> */}

                <div className="footer-text">
                    {/* <h1 className='my-name'>INES URIBE</h1> */}
                    <h1>Copyright © {currentYear} Ines Uribe. All Rights Reserved.</h1>
                </div>
                <NorthIcon onClick={scrollToTop} style={{ cursor: 'pointer' }} />
            </div>
            <div className='titulo-cortado'>
                <h1>ESTUDIO INES URIBE</h1>
            </div>
        </div>
    )
}

export default Footer;