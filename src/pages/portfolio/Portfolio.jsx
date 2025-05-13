// import { useLanguage } from '../../components/contexts/LanguageContext';
// import './Portfolio.css'

// function Portfolio() {
//     const { t, getRoute } = useLanguage();
//     return (
//         <div className='portfolio-wrapper'>
//             {/* <h1>{t('portfolio')}</h1> */}
//             <div className='portfolio-options'>
//                 <div className='option-art'>
//                     <img src="/CAPTURAS/MANOSATRAS.png" alt="" />
//                 </div>
//                 <div className='option-web'>
//                     <img src="/CAPTURAS/ramoflores.png" alt="" />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Portfolio;

import { useLanguage } from '../../components/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import './Portfolio.css'

function Portfolio() {
    const { t, getRoute } = useLanguage();
    return (
        <div className='portfolio-wrapper'>
            {/* <h1>{t('portfolio')}</h1> */}
            <div className='portfolio-options'>
                <div className='option-art'>
                    <Link to={getRoute('art')}>
                        <img src="/CAPTURAS/MANOSATRAS.png" alt="" />
                    </Link>
                </div>
                <div className='option-web'>
                    <Link to={getRoute('code')}>
                        <img src="/CAPTURAS/prueba.jpg" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;