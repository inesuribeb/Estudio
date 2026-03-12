// import './HeroProject.css';

// function HeroProject({ project, language, t }) {
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
//                                 <li key={index}>{service}</li>
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
import './HeroProject.css';

function HeroProject({ project, language, t }) {
    const navigate = useNavigate();

    const handleServiceClick = (service) => {
        navigate(`/estudio?service=${encodeURIComponent(service)}`);
    };

    return (
        <div className='hero-project-section'>
            <div className='first-line-hero'>
                <div className='first-column-hero'>
                    <h1>{project.client}</h1>
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