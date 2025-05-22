// import './About.css'

// function About({ isOpen, onClose }) {
//     if (!isOpen) return null;
    
//     return (
//         <div className='about-modal'>
//             <button className='about-close-btn' onClick={onClose}>×</button>

//             <div className='contact-links-to'>
//                 <button className='email-c'>estudio@inesuribe.es</button>
//                 <button className='instagram-c'>INSTAGRAM</button>
//                 <button className='linkedin-c'>LINKEDIN</button>
//                 <button className='direction-c'>BILBAO, BASQUE COUNTRY</button>

//             </div>
            
//         </div>
//     )
// }

// export default About;

import './About.css'

function About({ isOpen, onClose }) {
    if (!isOpen) return null;
    
    const handleBackgroundClick = (e) => {
        // Solo cerrar si se hace clic en el fondo, no en los elementos hijos
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleButtonAreaClick = (e) => {
        // Evitar que el clic se propague al fondo
        e.stopPropagation();
    };
    
    return (
        <div className='about-modal' onClick={handleBackgroundClick}>
            <button className='about-close-btn' onClick={onClose}>×</button>

            <div className='contact-links-to' onClick={handleButtonAreaClick}>
                <button className='email-c'>estudio@inesuribe.es</button>
                <button className='instagram-c'>INSTAGRAM</button>
                <button className='linkedin-c'>LINKEDIN</button>
                <button className='direction-c'>BILBAO, BASQUE COUNTRY</button>
            </div>
        </div>
    )
}

export default About;