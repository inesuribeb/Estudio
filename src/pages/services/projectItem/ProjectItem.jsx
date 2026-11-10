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

        navigate(`/proyecto/${project.slug}`);
    };

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const hasMultipleImages = project.image && project.image.length > 1;
    const currentImage = hasMultipleImages && isHovered
        ? project.image[1]
        : project.image[0];

    const isClickable = !project.soon && (isMobile ? project.mobileWebReady : true);
    const showWebButton = project.web && !project.soon && (isMobile ? project.mobileWebReady : true);

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

                    {showWebButton && (
                        <a
                            href={project.web}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-web-button"
                            aria-label={`${project.client} — web`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    )}

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