// import ProjectItem from '../../projectItem/ProjectItem';
// import './ServicesList.css'

// function ServicesList({ t, language, onServiceClick, filteredProjects, activeService }) {
    
    
//     if (activeService) {
//         return (
//             <div className='services-list'>
//                 <div className='services-display'>
//                     <div className="filtered-projects">
//                         <div className="projects-grid">
//                             {filteredProjects.map((project) => (
//                                 <div key={project.id} className="project-item">
//                                     <ProjectItem 
//                                     project={project}
//                                     language={language}
//                                      />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className='services-list'>
//             <div className='services-display'>
//                 <ul>
//                     {t('servicesList').map((service, index) => (
//                         <div 
//                             key={index} 
//                             className="service-item clickable"
//                             onClick={() => onServiceClick(service)}
//                         >
//                             <li>{service}</li>
//                         </div>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default ServicesList;

import ProjectItem from '../../projectItem/ProjectItem';
import './ServicesList.css'

function ServicesList({ t, language, onServiceClick, filteredProjects, activeService, services }) {
    
    if (activeService) {
        return (
            <div className='services-list'>
                <div className='services-display'>
                    <div className="filtered-projects">
                        <div className="projects-grid">
                            {filteredProjects.map((project) => (
                                <div key={project.id} className="project-item">
                                    <ProjectItem 
                                        project={project}
                                        language={language}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='services-list'>
            <div className='services-display'>
                <ul>
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="service-item clickable"
                            onClick={() => onServiceClick(service.name)}
                        >
                            <li>
                                <span className="service-name">{service.name}</span>
                                <span className="sector-count">({service.count})</span>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ServicesList;