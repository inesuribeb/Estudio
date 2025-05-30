// import './ProjectItem.css'

// function ProjectItem({ project, language }) {
    
//     const handleImageClick = () => {
//         if (project.web) {
//             window.open(project.web, '_blank');
//         }
//     };

//     return (
//         <div className="project-item">
//             <div className="project-info">
//                 <img 
//                     src={project.image[0].src} 
//                     alt={project.image[0].alt}
//                     onClick={handleImageClick}
//                     className={project.web ? 'clickable-image' : ''}
//                 />
//                 <h4>{project.client}</h4>
//                 <p className="project-slogan">{project.slogan[language][0]}</p>
//             </div>
//         </div>
//     )
// }

// export default ProjectItem;

import { useState } from 'react';
import './ProjectItem.css'

function ProjectItem({ project, language }) {
    const [isHovered, setIsHovered] = useState(false);
    
    const handleImageClick = () => {
        if (project.web) {
            window.open(project.web, '_blank');
        }
    };

    // Determinar qué imagen mostrar
    const hasMultipleImages = project.image && project.image.length > 1;
    const currentImage = hasMultipleImages && isHovered 
        ? project.image[1] 
        : project.image[0];

    return (
        <div className="project-item">
            <div className="project-info">
                <div 
                    className="image-container"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <img 
                        src={currentImage.src} 
                        alt={currentImage.alt}
                        onClick={handleImageClick}
                        className={`project-image ${project.web ? 'clickable-image' : ''} ${hasMultipleImages ? 'hover-transition' : ''}`}
                        // key={currentImage.src} 
                    />
                </div>
                <h4>{project.client}</h4>
                <p className="project-slogan">{project.slogan[language][0]}</p>
            </div>
        </div>
    )
}

export default ProjectItem;