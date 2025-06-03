import { useOutletContext } from 'react-router-dom';
import { useLanguage } from '../../../components/contexts/LanguageContext';
import ProjectItem from '../projectItem/ProjectItem';
import './SectorsPhone.css';

function SectorsPhone({ t, language, sectors, onSectorClick, filteredProjects, activeSector }) {
    const { openCategoryModal } = useOutletContext();
    
    // Si hay un sector activo, mostrar los proyectos filtrados
    if (activeSector) {
        return (
            <div className='phone-sectors-list'>
                <div className='phone-sectors-display'>
                    <div className="phone-filtered-projects">
                        <div className="phone-projects-grid">
                            {filteredProjects.map((project) => (
                                <div key={project.id} className="phone-project-item">
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

    // Función para abrir el modal de sectores
    const handleOpenSectorsModal = () => {
        // Crear estructura de categorías para el modal usando la lista de sectores
        const sectorsCategories = {
            sectors: sectors.map(sector => sector.name) // Array de nombres de sectores
        };

        openCategoryModal(
            sectorsCategories,
            activeSector, // Sector seleccionado actual
            onSectorClick,
            'sectors'
        );
    };

    return (
        <div className='phone-sectors-list'>
            <div className='phone-sectors-display'>
                <div className="phone-sectors-button" onClick={handleOpenSectorsModal}>
                    <span className="phone-sectors-text">{t('viewSectors') || 'Ver Sectores'}</span>
                    <span className="phone-sectors-arrow">→</span>
                </div>
                <div className="phone-sectors-description">
                    <p>{t('selectSectorDescription') || 'Selecciona un sector para ver los proyectos relacionados'}</p>
                </div>
            </div>
        </div>
    );
}

export default SectorsPhone;