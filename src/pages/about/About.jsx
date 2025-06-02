import './About.css'

function About({ isOpen, onClose }) {
    if (!isOpen) return null;
    
    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleButtonAreaClick = (e) => {
        e.stopPropagation();
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:estudio@inesuribe.es';
    };

    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/estudio.inesuribe/', '_blank');
    };

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/in%C3%A9s-uribe-barr%C3%B3n-325305143/', '_blank');
    };

    const handleLocationClick = () => {
        window.open('https://www.google.com/maps/place/Bilbao,+Basque+Country,+Spain', '_blank');
    };
    
    return (
        <div className='about-modal' onClick={handleBackgroundClick}>
            {/* <button className='about-close-btn' onClick={onClose}>×</button> */}
            <button className='about-close-btn' onClick={onClose}></button>

            <div className='contact-links-to' onClick={handleButtonAreaClick}>
                <button className='email-c' onClick={handleEmailClick}>estudio@inesuribe.es</button>
                <button className='instagram-c' onClick={handleInstagramClick}>INSTAGRAM</button>
                <button className='linkedin-c' onClick={handleLinkedInClick}>LINKEDIN</button>
                <button className='direction-c' onClick={handleLocationClick}>BILBAO, BASQUE COUNTRY</button>
            </div>
        </div>
    )
}

export default About;