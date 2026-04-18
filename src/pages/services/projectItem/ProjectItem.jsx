// import { useState } from 'react';
// import { useMediaQuery } from 'react-responsive';
// import { createPortal } from 'react-dom';
// import { useLanguage } from '../../../components/contexts/LanguageContext';
// import './ProjectItem.css'

// function ProjectItem({ project, language }) {
//     const [isHovered, setIsHovered] = useState(false);
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//     const [showOverlay, setShowOverlay] = useState(false);
//     const isMobile = useMediaQuery({ maxWidth: 768 });
//     const { t } = useLanguage();
    
//     const handleImageClick = () => {
//         if (project.soon) {
//             if (isMobile) setShowOverlay(true);
//             return;
//         }
//         if (isMobile && !project.mobileWebReady) return;
//         if (project.web) {
//             window.open(project.web, '_blank');
//         }
//     };

//     const handleMouseMove = (e) => {
//         setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const hasMultipleImages = project.image && project.image.length > 1;
//     const currentImage = hasMultipleImages && isHovered 
//         ? project.image[1] 
//         : project.image[0];

//     const isClickable = !project.soon && (isMobile ? project.mobileWebReady && project.web : project.web);

//     return (
//         <div className="project-item">
//             <div className="project-info">
//                 <div 
//                     className="image-container"
//                     onMouseEnter={() => setIsHovered(true)}
//                     onMouseLeave={() => setIsHovered(false)}
//                     onMouseMove={handleMouseMove}
//                 >
//                     <img 
//                         src={currentImage.src} 
//                         alt={currentImage.alt}
//                         onClick={handleImageClick}
//                         className={`project-image ${isClickable ? 'clickable-image' : ''} ${hasMultipleImages ? 'hover-transition' : ''}`}
//                     />

//                     {showOverlay && (
//                         <div className="soon-overlay" onClick={() => setShowOverlay(false)}>
//                             <p>Próximamente</p>
//                         </div>
//                     )}
//                 </div>
//                 <h4>{project.client}</h4>
//                 <p className="project-slogan">{project.slogan[language][0]}</p>
//             </div>

//             {!isMobile && project.soon && isHovered && createPortal(
//     <span
//         className="soon-button"
//         style={{
//             left: mousePosition.x,
//             top: mousePosition.y,
//         }}
//     >
//         {t('soon')}
//     </span>,
//     document.body
// )}
//         </div>
//     )
// }

// export default ProjectItem;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { createPortal } from 'react-dom';
import { useLanguage } from '../../../components/contexts/LanguageContext';
import './ProjectItem.css'

function ProjectItem({ project, language }) {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showOverlay, setShowOverlay] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const { t } = useLanguage();
    const navigate = useNavigate();
    
    const handleImageClick = () => {
        if (project.soon) {
            if (isMobile) setShowOverlay(true);
            return;
        }
        if (isMobile && !project.mobileWebReady) return;

        // OPCIÓN A: Navegar a página de proyecto
        // navigate(`/proyecto/${project.slug}`);

        // OPCIÓN B: Abrir web en blank (descomentar cuando esté en producción)
        if (project.web) {
            window.open(project.web, '_blank');
        }
    };

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const hasMultipleImages = project.image && project.image.length > 1;
    const currentImage = hasMultipleImages && isHovered 
        ? project.image[1] 
        : project.image[0];

    const isClickable = !project.soon && (isMobile ? project.mobileWebReady : true);

    return (
        <div className="project-item">
            <div className="project-info">
                <div 
                    className="image-container"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onMouseMove={handleMouseMove}
                >
                    <img 
                        src={currentImage.src} 
                        alt={currentImage.alt}
                        onClick={handleImageClick}
                        className={`project-image ${isClickable ? 'clickable-image' : ''} ${hasMultipleImages ? 'hover-transition' : ''}`}
                    />

                    {showOverlay && (
                        <div className="soon-overlay" onClick={() => setShowOverlay(false)}>
                            <p>Próximamente</p>
                        </div>
                    )}
                </div>
                <h4>{project.client}</h4>
                <p className="project-slogan">{project.slogan[language][0]}</p>
            </div>

            {!isMobile && project.soon && isHovered && createPortal(
                <span
                    className="soon-button"
                    style={{
                        left: mousePosition.x,
                        top: mousePosition.y,
                    }}
                >
                    {t('soon')}
                </span>,
                document.body
            )}
        </div>
    )
}

export default ProjectItem;