// import { useOutletContext } from 'react-router-dom';
import { useLanguage } from '../../../../components/contexts/LanguageContext'
// import ProjectItem from '../../projectItem/ProjectItem';
import ProjectItem from '../../projectItem/ProjectItem';

import './ServicesListPhone.css';

// function ServicesListPhone({ t, language, onServiceClick, filteredProjects, activeService }) {
function ServicesListPhone({ t, language, onServiceClick, filteredProjects, activeService, openCategoryModal }) {

    // const { openCategoryModal } = useOutletContext();

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

    const servicesCategories = {
        services: t('servicesList').reduce((acc, service, index) => {
            acc[service] = service;
            return acc;
        }, {})
    };

    const handleOpenServicesModal = () => {
        openCategoryModal(
            servicesCategories,
            null,
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