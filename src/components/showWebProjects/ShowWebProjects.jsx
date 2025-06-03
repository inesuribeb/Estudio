// import PortfolioCarousel from '../portfolioCarousel/PortfolioCarousel';
// import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import './ShowWebProjects.css'

// function ShowWebProjects({ className, title, description, method, web, link, images, language }) {

//     return (
//         <section className={`web-section-mobile ${className}`}>

//             <div className="first-line-intro">
//                 <h3>
//                     <a href={web} target="_blank" rel="noopener noreferrer">
//                         # {title} <ArrowOutwardIcon />
//                     </a>
//                 </h3>

//                 <p>
//                     <a href={link} target="_blank" rel="noopener noreferrer" className='github-icon'>
//                         See on <GitHubIcon />
//                     </a>
//                 </p>
//             </div>

//             <div className='second-line-intro'>
//                 <p className="description">
//                     {typeof description === 'object' ? description[language] : description}
//                 </p>
//             </div>

//             <div className='third-line-intro'>
//                 <p>{method}</p>
//             </div>
//             <div className="second-line">
//                 <PortfolioCarousel>
//                     {images.map((img, index) => (
//                         <img
//                             key={index}
//                             src={img.src}
//                             alt={img.alt}
//                             loading="lazy"
//                         />
//                     ))}
//                 </PortfolioCarousel>
//             </div>
//         </section>
//     );
// }

// export default ShowWebProjects;


import { useMediaQuery } from 'react-responsive';
import PortfolioCarousel from '../portfolioCarousel/PortfolioCarousel';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useLanguage } from '../../components/contexts/LanguageContext';
import './ShowWebProjects.css'

function ShowWebProjects({ className, title, description, method, web, link, images, language, mobileWebReady }) {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const { t } = useLanguage();

    // Determinar si el enlace web debe ser clickeable
    const isWebClickable = isMobile ? mobileWebReady && web : web;

    return (
        <section className={`web-section-mobile ${className}`}>

            <div className="first-line-intro">
                <h3>
                    {isWebClickable ? (
                        <a href={web} target="_blank" rel="noopener noreferrer">
                            # {title} <ArrowOutwardIcon />
                        </a>
                    ) : (
                        <span className="non-clickable-title">
                            # {title} {isMobile && !mobileWebReady ? (
                                <span className="mobile-not-ready">({t('warning')})</span>
                            ) : (
                                <ArrowOutwardIcon />
                            )}
                        </span>
                    )}
                </h3>

                <p>
                    <a href={link} target="_blank" rel="noopener noreferrer" className='github-icon'>
                    {t('seeOn')} <GitHubIcon />
                    </a>
                </p>
            </div>

            <div className='second-line-intro'>
                <p className="description">
                    {typeof description === 'object' ? description[language] : description}
                </p>
            </div>

            <div className='third-line-intro'>
                <p>{method}</p>
            </div>
            <div className="second-line">
                <PortfolioCarousel>
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                        />
                    ))}
                </PortfolioCarousel>
            </div>
        </section>
    );
}

export default ShowWebProjects;