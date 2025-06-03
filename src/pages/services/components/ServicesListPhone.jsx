import { useOutletContext } from 'react-router-dom';
import { useLanguage } from '../../../components/contexts/LanguageContext';
import ProjectItem from '../projectItem/ProjectItem';
import './ServicesListPhone.css';

function ServicesListPhone({ t, language, onServiceClick, filteredProjects, activeService }) {
    const { openCategoryModal } = useOutletContext();
    
    // Si hay un servicio activo, mostrar los proyectos filtrados
    if (activeService) {
        return (
            <div className='phone-services-list'>
                <div className='phone-services-display'>
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

    // Crear estructura de categorías para el modal
    const servicesCategories = {
        services: t('servicesList').reduce((acc, service, index) => {
            acc[service] = service;
            return acc;
        }, {})
    };

    // Función para abrir el modal de servicios
    const handleOpenServicesModal = () => {
        openCategoryModal(
            servicesCategories,
            null, // No hay categoría seleccionada inicialmente
            onServiceClick,
            'services'
        );
    };

    return (
        <div className='phone-services-list'>
            <div className='phone-services-display'>
                <div className="phone-services-button" onClick={handleOpenServicesModal}>
                    <span className="phone-services-text">{t('viewServices')}</span>
                    <span className="phone-services-arrow">→</span>
                </div>
                <div className="phone-services-description">
                    <p>{t('selectServiceDescription')}</p>
                </div>
            </div>
        </div>
    );
}

export default ServicesListPhone;