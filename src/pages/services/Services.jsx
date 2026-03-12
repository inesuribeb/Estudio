import { useLanguage } from '../../components/contexts/LanguageContext';
import { useState } from 'react';
import ServicesList from './components/ServicesList/ServicesList';
import Clients from './components/Clients/Clients';
import Featured from './components/Featured/Featured';
import Sectors from './components/Sectors/Sectors';
import professionalProjects from '../../utils/ProfessionalProjects';
import AllProjects from './components/AllProjects/AllProjects';
import StudioFilter from './Filter/StudioFilter'; // 👈 Import nuevo
import './Services.css'

// function Services({ showTitle = false }) {
//     const { language, toggleLanguage, t, getRoute } = useLanguage();
//     const [activeComponent, setActiveComponent] = useState('Featured');
// const [activeService, setActiveService] = useState(null);

function Services({ showTitle = false, initialService = null }) {
    const { language, toggleLanguage, t, getRoute } = useLanguage();
    const [activeComponent, setActiveComponent] = useState(initialService ? 'Services' : 'Featured');
    const [activeService, setActiveService] = useState(initialService ? decodeURIComponent(initialService) : null);


    const [activeSector, setActiveSector] = useState(null);
    const [activeClient, setActiveClient] = useState(null);

    const clearFilters = () => {
        setActiveService(null);
        setActiveSector(null);
        setActiveClient(null);
        setActiveComponent('Featured');
    };

    const applyServiceFilter = (service) => {
        setActiveService(service);
        setActiveSector(null);
        setActiveClient(null);
        setActiveComponent('Services');
    };

    const applySectorFilter = (sector) => {
        setActiveSector(sector);
        setActiveService(null);
        setActiveClient(null);
        setActiveComponent('Sectors');
    };

    const applyClientFilter = (client) => {
        setActiveClient(client);
        setActiveService(null);
        setActiveSector(null);
        setActiveComponent('Clients');
    };

    const getFilteredProjects = () => {
        if (activeService) {
            return professionalProjects.filter(project =>
                project.services[language].includes(activeService)
            );
        }
        if (activeSector) {
            return professionalProjects.filter(project =>
                project.sector[language].includes(activeSector)
            );
        }
        if (activeClient) {
            return professionalProjects.filter(project =>
                project.client === activeClient
            );
        }
        return professionalProjects;
    };

    const getServicesWithCount = () => {
        const serviceCount = {};
    
        professionalProjects.forEach(project => {
            project.services[language].forEach(service => {
                serviceCount[service] = (serviceCount[service] || 0) + 1;
            });
        });
    
        return Object.entries(serviceCount).map(([service, count]) => ({
            name: service,
            count: count
        }));
    };

    const getSectorsWithCount = () => {
        const sectorCount = {};

        professionalProjects.forEach(project => {
            project.sector[language].forEach(sector => {
                sectorCount[sector] = (sectorCount[sector] || 0) + 1;
            });
        });

        return Object.entries(sectorCount).map(([sector, count]) => ({
            name: sector,
            count: count
        }));
    };

    const getClientsWithCount = () => {
        const clientCount = {};

        professionalProjects.forEach(project => {
            clientCount[project.client] = (clientCount[project.client] || 0) + 1;
        });

        return Object.entries(clientCount).map(([client, count]) => ({
            name: client,
            count: count
        }));
    };

    const renderActiveComponent = () => {
        const filteredProjects = getFilteredProjects();

        switch (activeComponent) {
            case 'All':
                return (
                    <AllProjects
                        projects={professionalProjects}
                        language={language}
                    />
                );

            case 'Services':
                return (
                    <ServicesList
                        t={t}
                        language={language}
                        onServiceClick={applyServiceFilter}
                        filteredProjects={filteredProjects}
                        activeService={activeService}
                        services={getServicesWithCount()} 
                    />
                );
            case 'Sectors':
                return (
                    <Sectors
                        t={t}
                        language={language}
                        sectors={getSectorsWithCount()}
                        onSectorClick={applySectorFilter}
                        filteredProjects={filteredProjects}
                        activeSector={activeSector}
                    />
                );
            case 'Featured':
                return <Featured t={t} projects={professionalProjects} language={language} getRoute={getRoute} />;
            case 'Clients':
                return (
                    <Clients
                        t={t}
                        language={language}
                        clients={getClientsWithCount()}
                        onClientClick={applyClientFilter}
                        filteredProjects={filteredProjects}
                        activeClient={activeClient}
                    />
                );
            default:
                return <Featured t={t} projects={professionalProjects} language={language} getRoute={getRoute} />;
        }
    };

    return (
        <div className='services-wrapper'>
            <div className='statement'>
                <h2
                    className={showTitle ? 'services-title-visible' : 'services-title-hidden'}
                    dangerouslySetInnerHTML={{ __html: t('description') }}
                />
            </div>

            {/* 👇 Componente separado */}
            <StudioFilter 
                t={t}
                activeComponent={activeComponent}
                activeService={activeService}
                activeSector={activeSector}
                activeClient={activeClient}
                clearFilters={clearFilters}
                setActiveService={setActiveService}
                setActiveSector={setActiveSector}
                setActiveClient={setActiveClient}
                setActiveComponent={setActiveComponent}
            />

            <div className="filter-render">
                <div className="animated-content" key={activeComponent}>
                    {renderActiveComponent()}
                </div>
            </div>

            <div className='statement'>
                <h2 dangerouslySetInnerHTML={{ __html: t('personality') }} />
            </div>
        </div>
    )
}

export default Services;