// import { useOutletContext } from 'react-router-dom';
import { useLanguage } from '../../../../components/contexts/LanguageContext';
import ProjectItem from '../../projectItem/ProjectItem';

// function SectorsPhone({ t, language, sectors, onSectorClick, filteredProjects, activeSector }) {
function SectorsPhone({ t, language, sectors, onSectorClick, filteredProjects, activeSector, openCategoryModal }) {

    // const { openCategoryModal } = useOutletContext();

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

    const handleOpenSectorsModal = () => {
        const sectorsCategories = {
            sectors: sectors
        };

        openCategoryModal(
            sectorsCategories,
            activeSector,
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