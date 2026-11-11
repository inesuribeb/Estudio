// import { useNavigate } from 'react-router-dom';
// import './HeroProject.css';

// function HeroProject({ project, language, t }) {
//     const navigate = useNavigate();

//     const handleServiceClick = (service) => {
//         navigate(`/estudio?service=${encodeURIComponent(service)}`);
//     };

//     return (
//         <div className='hero-project-section'>
//             <div className='first-line-hero'>
//                 <div className='first-column-hero'>
//                     <h1>{project.client}</h1>
//                     <p>{project.slogan[language][0]}</p>
//                 </div>
//                 <div className='second-column-hero'>
//                     <p>{project.description[language]}</p>
//                     <div className='services-included'>
//                         <h2>{t('services')}</h2>
//                         <ul>
//                             {project.services[language].map((service, index) => (
//                                 <li 
//                                     key={index} 
//                                     onClick={() => handleServiceClick(service)}
//                                     style={{ cursor: 'pointer' }}
//                                 >
//                                     {service}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div className='second-line-hero'>
//                 <img src={project.imgHero.src} alt={project.imgHero.alt} />
//             </div>
//         </div>
//     )
// }

// export default HeroProject;

import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './HeroProject.css';

function HeroProject({ project, language, t }) {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const handleServiceClick = (service) => {
        navigate(`/estudio?service=${encodeURIComponent(service)}`);
    };

    const showWebLink = project.web && !project.soon && (isMobile ? project.mobileWebReady : true);

    // Separa la última palabra para que la flecha vaya siempre pegada a ella
    const clientName = project.client.trim();
    const lastSpace = clientName.lastIndexOf(' ');
    const nameStart = lastSpace === -1 ? '' : clientName.slice(0, lastSpace + 1);
    const nameLast = lastSpace === -1 ? clientName : clientName.slice(lastSpace + 1);

    return (
        <div className='hero-project-section'>
            <div className='first-line-hero'>
                <div className='first-column-hero'>
                    <h1>
                        {showWebLink ? (
                            <a
                                href={project.web}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-web-link"
                            >
                                {nameStart}
                                <span className='hero-client-last'>
                                    {nameLast}
                                    <svg
                                        className="hero-web-icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </span>
                            </a>
                        ) : (
                            project.client
                        )}
                    </h1>
                    <p>{project.slogan[language][0]}</p>
                </div>
                <div className='second-column-hero'>
                    <p>{project.description[language]}</p>
                    <div className='services-included'>
                        <h2>{t('services')}</h2>
                        <ul>
                            {project.services[language].map((service, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleServiceClick(service)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='second-line-hero'>
                <img src={project.imgHero.src} alt={project.imgHero.alt} />
            </div>
        </div>
    )
}

export default HeroProject;