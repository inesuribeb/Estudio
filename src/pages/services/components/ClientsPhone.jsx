import { useOutletContext } from 'react-router-dom';
import { useLanguage } from '../../../components/contexts/LanguageContext';
import ProjectItem from '../projectItem/ProjectItem';
import './ClientsPhone.css';

function ClientsPhone({ t, language, clients, onClientClick, filteredProjects, activeClient }) {
    const { openCategoryModal } = useOutletContext();
    
    if (activeClient) {
        return (
            <div className='phone-clients-list'>
                <div className='phone-clients-display'>
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

    const handleOpenClientsModal = () => {
        const clientsCategories = {
            clients: clients 
        };

        openCategoryModal(
            clientsCategories,
            activeClient,
            onClientClick,
            'clients'
        );
    };

    return (
        <div className='phone-clients-list'>
            <div className='phone-clients-display'>
                <div className="phone-clients-button" onClick={handleOpenClientsModal}>
                    <span className="phone-clients-text">{t('viewClients') || 'Ver Clientes'}</span>
                    <span className="phone-clients-arrow">→</span>
                </div>
                <div className="phone-clients-description">
                    <p>{t('selectClientDescription') || 'Selecciona un cliente para ver sus proyectos'}</p>
                </div>
            </div>
        </div>
    );
}

export default ClientsPhone;