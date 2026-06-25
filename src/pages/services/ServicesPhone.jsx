// import { useLanguage } from '../../components/contexts/LanguageContext';
// import { useState } from 'react';
// import ServicesListPhone from './components/ServicesList/ServicesListPhone';
// import ClientsPhone from './components/Clients/ClientsPhone';
// import Featured from './components/Featured/Featured';
// import SectorsPhone from './components/Sectors/SectorsPhone';
// import AllProjectsPhone from './components/AllProjects/AllProjectsPhone'; 
// import professionalProjects from '../../utils/ProfessionalProjects';
// import './ServicesPhone.css';

// function ServicesPhone({ showTitle = false, openCategoryModal, initialService = null, initialTab = null }) {
//     const { language, toggleLanguage, t, getRoute } = useLanguage();

//     const [activeComponent, setActiveComponent] = useState(() => {
//         if (initialService) return 'Services';
//         if (initialTab) return initialTab;
//         return 'Featured';
//     });


//     const [activeService, setActiveService] = useState(
//         initialService ? decodeURIComponent(initialService) : null
//     );
//     const [activeSector, setActiveSector] = useState(null);
//     const [activeClient, setActiveClient] = useState(null);

//     const clearFilters = () => {
//         setActiveService(null);
//         setActiveSector(null);
//         setActiveClient(null);
//         setActiveComponent('Featured');
//     };

//     const applyServiceFilter = (service) => {
//         setActiveService(service);
//         setActiveSector(null);
//         setActiveClient(null);
//         setActiveComponent('Services');
//     };

//     const applySectorFilter = (sector) => {
//         setActiveSector(sector);
//         setActiveService(null);
//         setActiveClient(null);
//         setActiveComponent('Sectors');
//     };

//     const applyClientFilter = (client) => {
//         setActiveClient(client);
//         setActiveService(null);
//         setActiveSector(null);
//         setActiveComponent('Clients');
//     };

//     const handleOpenServicesModal = () => {
//         const servicesWithCount = getServicesWithCount();
//         const servicesCategories = {
//             services: servicesWithCount
//         };

//         openCategoryModal(
//             servicesCategories,
//             activeService,
//             applyServiceFilter,
//             'services'
//         );
//     };

//     const handleOpenSectorsModal = () => {
//         const sectorsWithCount = getSectorsWithCount();
//         const sectorsCategories = {
//             sectors: sectorsWithCount
//         };

//         openCategoryModal(
//             sectorsCategories,
//             activeSector,
//             applySectorFilter,
//             'sectors'
//         );
//     };

//     const handleOpenClientsModal = () => {
//         const clientsWithCount = getClientsWithCount();
//         const clientsCategories = {
//             clients: clientsWithCount
//         };

//         openCategoryModal(
//             clientsCategories,
//             activeClient,
//             applyClientFilter,
//             'clients'
//         );
//     };

//     const getFilteredProjects = () => {
//         if (activeService) {
//             return professionalProjects.filter(project =>
//                 project.services[language].includes(activeService)
//             );
//         }
//         if (activeSector) {
//             return professionalProjects.filter(project =>
//                 project.sector[language].includes(activeSector)
//             );
//         }
//         if (activeClient) {
//             return professionalProjects.filter(project =>
//                 project.client === activeClient
//             );
//         }
//         return professionalProjects;
//     };

//     const getServicesWithCount = () => {
//         const serviceCount = {};

//         professionalProjects.forEach(project => {
//             project.services[language].forEach(service => {
//                 serviceCount[service] = (serviceCount[service] || 0) + 1;
//             });
//         });

//         return Object.entries(serviceCount).map(([service, count]) => ({
//             name: service,
//             count: count
//         }));
//     };


//     const getSectorsWithCount = () => {
//         const sectorCount = {};

//         professionalProjects.forEach(project => {
//             project.sector[language].forEach(sector => {
//                 sectorCount[sector] = (sectorCount[sector] || 0) + 1;
//             });
//         });

//         return Object.entries(sectorCount).map(([sector, count]) => ({
//             name: sector,
//             count: count
//         }));
//     };

//     const getClientsWithCount = () => {
//         const clientCount = {};

//         professionalProjects.forEach(project => {
//             clientCount[project.client] = (clientCount[project.client] || 0) + 1;
//         });

//         return Object.entries(clientCount).map(([client, count]) => ({
//             name: client,
//             count: count
//         }));
//     };

//     const renderActiveComponent = () => {
//         const filteredProjects = getFilteredProjects();

//         switch (activeComponent) {
//             case 'All':
//                 return (
//                     <AllProjectsPhone
//                         projects={professionalProjects}
//                         language={language}
//                     />
//                 );
//             case 'Services':
//                 return (
//                     <ServicesListPhone
//                         t={t}
//                         language={language}
//                         onServiceClick={applyServiceFilter}
//                         filteredProjects={filteredProjects}
//                         activeService={activeService}
//                         services={getServicesWithCount()}
//                         openCategoryModal={openCategoryModal} 
//                     />
//                 );
//             case 'Sectors':
//                 return (
//                     <SectorsPhone
//                         t={t}
//                         language={language}
//                         sectors={getSectorsWithCount()}
//                         onSectorClick={applySectorFilter}
//                         filteredProjects={filteredProjects}
//                         activeSector={activeSector}
//                         openCategoryModal={openCategoryModal}  
//                     />
//                 );
//             case 'Featured':
//                 return <Featured t={t} projects={professionalProjects} language={language} getRoute={getRoute} />;
//             case 'Clients':
//                 return (
//                     <ClientsPhone
//                         t={t}
//                         language={language}
//                         clients={getClientsWithCount()}
//                         onClientClick={applyClientFilter}
//                         filteredProjects={filteredProjects}
//                         activeClient={activeClient}
//                         openCategoryModal={openCategoryModal}  
//                     />
//                 );
//             default:
//                 return <Featured t={t} projects={professionalProjects} language={language} getRoute={getRoute} />;
//         }
//     };

//     const renderButtonText = (baseText, activeFilter) => {
//         if (activeFilter) {
//             return (
//                 <span className="phone-button-with-filter">
//                     {baseText}: {activeFilter}
//                     <span className="phone-filter-close" onClick={(e) => {
//                         e.stopPropagation();
//                         clearFilters();
//                     }}>
//                         ×
//                     </span>
//                 </span>
//             );
//         }
//         return baseText;
//     };

//     return (
//         <div className='phone-services-wrapper'>
//             <div className='phone-statement'>
//                 <h2
//                     className={showTitle ? 'phone-services-title-visible' : 'phone-services-title-hidden'}
//                     dangerouslySetInnerHTML={{ __html: t('description') }}
//                 />
//             </div>

//             <div className='phone-studio-filter'>
//                 <button
//                     onClick={() => clearFilters()}
//                     className={activeComponent === 'Featured' ? 'active' : ''}
//                 >
//                     {t('featured')}
//                 </button>

//                 <button
//                     onClick={() => {
//                         setActiveService(null);
//                         setActiveSector(null);
//                         setActiveClient(null);
//                         setActiveComponent('All');
//                     }}
//                     className={activeComponent === 'All' ? 'active' : ''}
//                 >
//                     {t('all')}
//                 </button>

//                 <button
//                     onClick={handleOpenServicesModal}
//                     className={activeComponent === 'Services' ? 'active' : ''}
//                 >
//                     {renderButtonText(t('services'), activeService)}
//                 </button>

//                 <button
//                     onClick={handleOpenSectorsModal}
//                     className={activeComponent === 'Sectors' ? 'active' : ''}
//                 >
//                     {renderButtonText(t('sectors'), activeSector)}
//                 </button>

//                 <button
//                     onClick={handleOpenClientsModal}
//                     className={activeComponent === 'Clients' ? 'active' : ''}
//                 >
//                     {renderButtonText(t('clients'), activeClient)}
//                 </button>
//             </div>

//             <div className="phone-filter-render">
//                 <div className="phone-animated-content" key={activeComponent}>
//                     {renderActiveComponent()}
//                 </div>
//             </div>

//             <div className='phone-statement'>
//                 <h2 dangerouslySetInnerHTML={{ __html: t('personality') }} />
//             </div>
//         </div>
//     )
// }

// export default ServicesPhone;


import { useLanguage } from '../../components/contexts/LanguageContext';
import { useState, useRef, useEffect } from 'react';
import ServicesListPhone from './components/ServicesList/ServicesListPhone';
import ClientsPhone from './components/Clients/ClientsPhone';
import Featured from './components/Featured/Featured';
import SectorsPhone from './components/Sectors/SectorsPhone';
import AllProjectsPhone from './components/AllProjects/AllProjectsPhone';
import professionalProjects from '../../utils/ProfessionalProjects';
import './ServicesPhone.css';

function ServicesPhone({ showTitle = false, openCategoryModal, initialService = null, initialTab = null }) {
    const { language, toggleLanguage, t, getRoute } = useLanguage();

    const [activeComponent, setActiveComponent] = useState(() => {
        if (initialService) return 'Services';
        if (initialTab) return initialTab;
        return 'Featured';
    });

    const [activeService, setActiveService] = useState(
        initialService ? decodeURIComponent(initialService) : null
    );
    const [activeSector, setActiveSector] = useState(null);
    const [activeClient, setActiveClient] = useState(null);

    const filterRef = useRef(null);
    const [dotLeft, setDotLeft] = useState(null);
    const [hoveredButton, setHoveredButton] = useState(null);

    const moveDotToButton = (btn) => {
        if (!btn || !filterRef.current) return;
        const containerRect = filterRef.current.getBoundingClientRect();
        const btnRect = btn.getBoundingClientRect();
        const center = btnRect.left - containerRect.left + btnRect.width / 2;
        setDotLeft(center);
    };

    useEffect(() => {
        if (hoveredButton) return;
        const activeBtn = filterRef.current?.querySelector('button.active');
        moveDotToButton(activeBtn);
    }, [activeComponent, hoveredButton]);

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

    const handleOpenServicesModal = () => {
        const servicesWithCount = getServicesWithCount();
        const servicesCategories = { services: servicesWithCount };
        openCategoryModal(servicesCategories, activeService, applyServiceFilter, 'services');
    };

    const handleOpenSectorsModal = () => {
        const sectorsWithCount = getSectorsWithCount();
        const sectorsCategories = { sectors: sectorsWithCount };
        openCategoryModal(sectorsCategories, activeSector, applySectorFilter, 'sectors');
    };

    const handleOpenClientsModal = () => {
        const clientsWithCount = getClientsWithCount();
        const clientsCategories = { clients: clientsWithCount };
        openCategoryModal(clientsCategories, activeClient, applyClientFilter, 'clients');
    };

    const getFilteredProjects = () => {
        if (activeService) return professionalProjects.filter(project => project.services[language].includes(activeService));
        if (activeSector) return professionalProjects.filter(project => project.sector[language].includes(activeSector));
        if (activeClient) return professionalProjects.filter(project => project.client === activeClient);
        return professionalProjects;
    };

    const getServicesWithCount = () => {
        const serviceCount = {};
        professionalProjects.forEach(project => {
            project.services[language].forEach(service => {
                serviceCount[service] = (serviceCount[service] || 0) + 1;
            });
        });
        return Object.entries(serviceCount).map(([service, count]) => ({ name: service, count }));
    };

    const getSectorsWithCount = () => {
        const sectorCount = {};
        professionalProjects.forEach(project => {
            project.sector[language].forEach(sector => {
                sectorCount[sector] = (sectorCount[sector] || 0) + 1;
            });
        });
        return Object.entries(sectorCount).map(([sector, count]) => ({ name: sector, count }));
    };

    const getClientsWithCount = () => {
        const clientCount = {};
        professionalProjects.forEach(project => {
            clientCount[project.client] = (clientCount[project.client] || 0) + 1;
        });
        return Object.entries(clientCount).map(([client, count]) => ({ name: client, count }));
    };

    const renderActiveComponent = () => {
        const filteredProjects = getFilteredProjects();

        switch (activeComponent) {
            case 'All':
                return <AllProjectsPhone projects={professionalProjects} language={language} />;
            case 'Services':
                return (
                    <ServicesListPhone
                        t={t}
                        language={language}
                        onServiceClick={applyServiceFilter}
                        filteredProjects={filteredProjects}
                        activeService={activeService}
                        services={getServicesWithCount()}
                        openCategoryModal={openCategoryModal}
                    />
                );
            case 'Sectors':
                return (
                    <SectorsPhone
                        t={t}
                        language={language}
                        sectors={getSectorsWithCount()}
                        onSectorClick={applySectorFilter}
                        filteredProjects={filteredProjects}
                        activeSector={activeSector}
                        openCategoryModal={openCategoryModal}
                    />
                );
            case 'Featured':
                return <Featured t={t} projects={professionalProjects} language={language} getRoute={getRoute} />;
            case 'Clients':
                return (
                    <ClientsPhone
                        t={t}
                        language={language}
                        clients={getClientsWithCount()}
                        onClientClick={applyClientFilter}
                        filteredProjects={filteredProjects}
                        activeClient={activeClient}
                        openCategoryModal={openCategoryModal}
                    />
                );
            default:
                return <Featured t={t} projects={professionalProjects} language={language} getRoute={getRoute} />;
        }
    };

    const renderButtonText = (baseText, activeFilter) => {
        if (activeFilter) {
            return (
                <span className="phone-button-with-filter">
                    {baseText}: {activeFilter}
                    <span className="phone-filter-close" onClick={(e) => {
                        e.stopPropagation();
                        clearFilters();
                    }}>
                        ×
                    </span>
                </span>
            );
        }
        return baseText;
    };

    return (
        <div className='phone-services-wrapper'>
            <div className='phone-statement'>
                <h2
                    className={showTitle ? 'phone-services-title-visible' : 'phone-services-title-hidden'}
                    dangerouslySetInnerHTML={{ __html: t('description') }}
                />
            </div>

            <div className='phone-studio-filter' ref={filterRef}>
                {dotLeft !== null && (
                    <span
                        className="studio-filter-dot"
                        style={{ left: `${dotLeft}px` }}
                    />
                )}

                <button
                    onClick={() => clearFilters()}
                    className={activeComponent === 'Featured' ? 'active' : ''}
                    onMouseEnter={(e) => { setHoveredButton(e.currentTarget); moveDotToButton(e.currentTarget); }}
                    onMouseLeave={() => setHoveredButton(null)}
                >
                    {t('featured')}
                </button>

                <button
                    onClick={() => {
                        setActiveService(null);
                        setActiveSector(null);
                        setActiveClient(null);
                        setActiveComponent('All');
                    }}
                    className={activeComponent === 'All' ? 'active' : ''}
                    onMouseEnter={(e) => { setHoveredButton(e.currentTarget); moveDotToButton(e.currentTarget); }}
                    onMouseLeave={() => setHoveredButton(null)}
                >
                    {t('all')}
                </button>

                <button
                    onClick={handleOpenServicesModal}
                    className={activeComponent === 'Services' ? 'active' : ''}
                    onMouseEnter={(e) => { setHoveredButton(e.currentTarget); moveDotToButton(e.currentTarget); }}
                    onMouseLeave={() => setHoveredButton(null)}
                >
                    {renderButtonText(t('services'), activeService)}
                </button>

                <button
                    onClick={handleOpenSectorsModal}
                    className={activeComponent === 'Sectors' ? 'active' : ''}
                    onMouseEnter={(e) => { setHoveredButton(e.currentTarget); moveDotToButton(e.currentTarget); }}
                    onMouseLeave={() => setHoveredButton(null)}
                >
                    {renderButtonText(t('sectors'), activeSector)}
                </button>

                <button
                    onClick={handleOpenClientsModal}
                    className={activeComponent === 'Clients' ? 'active' : ''}
                    onMouseEnter={(e) => { setHoveredButton(e.currentTarget); moveDotToButton(e.currentTarget); }}
                    onMouseLeave={() => setHoveredButton(null)}
                >
                    {renderButtonText(t('clients'), activeClient)}
                </button>
            </div>

            <div className="phone-filter-render">
                <div className="phone-animated-content" key={activeComponent}>
                    {renderActiveComponent()}
                </div>
            </div>

            <div className='phone-statement'>
                <h2 dangerouslySetInnerHTML={{ __html: t('personality') }} />
            </div>
        </div>
    );
}

export default ServicesPhone;