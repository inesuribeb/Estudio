// import { useLanguage } from '../../components/contexts/LanguageContext';
// import { useState } from 'react';
// import ServicesListPhone from './components/ServicesListPhone';
// import Clients from './components/Clients';
// import Featured from './components/Featured';
// import Sectors from './components/Sectors';
// import professionalProjects from '../../utils/ProfessionalProjects';
// import './ServicesPhone.css'

// function ServicesPhone({ showTitle = false }) {
//     const { language, toggleLanguage, t, getRoute} = useLanguage();
//     const [activeComponent, setActiveComponent] = useState('Featured');

//     const [activeService, setActiveService] = useState(null);
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
//             case 'Services':
//                 return (
//                     <ServicesListPhone
//                         t={t}
//                         language={language}
//                         onServiceClick={applyServiceFilter}
//                         filteredProjects={filteredProjects}
//                         activeService={activeService}
//                     />
//                 );
//             case 'Sectors':
//                 return (
//                     <Sectors
//                         t={t}
//                         language={language}
//                         sectors={getSectorsWithCount()}
//                         onSectorClick={applySectorFilter}
//                         filteredProjects={filteredProjects}
//                         activeSector={activeSector}
//                     />
//                 );
//             case 'Featured':
//                 return <Featured t={t} projects={professionalProjects} language={language} getRoute={getRoute} />;
//             case 'Clients':
//                 return (
//                     <Clients
//                         t={t}
//                         language={language}
//                         clients={getClientsWithCount()}
//                         onClientClick={applyClientFilter}
//                         filteredProjects={filteredProjects}
//                         activeClient={activeClient}
//                     />
//                 );
//             default:
//                 return <Featured t={t} projects={professionalProjects} language={language} getRoute={getRoute} />;
//             }
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
//                         setActiveComponent('Services');
//                     }}
//                     className={activeComponent === 'Services' ? 'active' : ''}
//                 >
//                     {renderButtonText(t('services'), activeService)}
//                 </button>

//                 <button
//                     onClick={() => {
//                         setActiveService(null);
//                         setActiveSector(null);
//                         setActiveClient(null);
//                         setActiveComponent('Sectors');
//                     }}
//                     className={activeComponent === 'Sectors' ? 'active' : ''}
//                 >
//                     {renderButtonText(t('sectors'), activeSector)}
//                 </button>

//                 <button
//                     onClick={() => {
//                         setActiveService(null);
//                         setActiveSector(null);
//                         setActiveClient(null);
//                         setActiveComponent('Clients');
//                     }}
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

// import { useLanguage } from '../../components/contexts/LanguageContext';
// import { useOutletContext } from 'react-router-dom';
// import { useState } from 'react';
// import ServicesListPhone from './components/ServicesListPhone';
// import Clients from './components/Clients';
// import Featured from './components/Featured';
// import Sectors from './components/Sectors';
// import professionalProjects from '../../utils/ProfessionalProjects';
// import './ServicesPhone.css'

// function ServicesPhone({ showTitle = false }) {
//     const { language, toggleLanguage, t, getRoute} = useLanguage();
//     const { openCategoryModal } = useOutletContext();
//     const [activeComponent, setActiveComponent] = useState('Featured');

//     const [activeService, setActiveService] = useState(null);
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
//         const servicesCategories = {
//             services: t('servicesList').reduce((acc, service, index) => {
//                 acc[service] = service;
//                 return acc;
//             }, {})
//         };

//         openCategoryModal(
//             servicesCategories,
//             null, 
//             applyServiceFilter,
//             'services'
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
//             case 'Services':
//                 return (
//                     <ServicesListPhone
//                         t={t}
//                         language={language}
//                         onServiceClick={applyServiceFilter}
//                         filteredProjects={filteredProjects}
//                         activeService={activeService}
//                     />
//                 );
//             case 'Sectors':
//                 return (
//                     <Sectors
//                         t={t}
//                         language={language}
//                         sectors={getSectorsWithCount()}
//                         onSectorClick={applySectorFilter}
//                         filteredProjects={filteredProjects}
//                         activeSector={activeSector}
//                     />
//                 );
//             case 'Featured':
//                 return <Featured t={t} projects={professionalProjects} language={language} getRoute={getRoute} />;
//             case 'Clients':
//                 return (
//                     <Clients
//                         t={t}
//                         language={language}
//                         clients={getClientsWithCount()}
//                         onClientClick={applyClientFilter}
//                         filteredProjects={filteredProjects}
//                         activeClient={activeClient}
//                     />
//                 );
//             default:
//                 return <Featured t={t} projects={professionalProjects} language={language} getRoute={getRoute} />;
//             }
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
//                     onClick={handleOpenServicesModal}
//                     className={activeComponent === 'Services' ? 'active' : ''}
//                 >
//                     {renderButtonText(t('services'), activeService)}
//                 </button>

//                 <button
//                     onClick={() => {
//                         setActiveService(null);
//                         setActiveSector(null);
//                         setActiveClient(null);
//                         setActiveComponent('Sectors');
//                     }}
//                     className={activeComponent === 'Sectors' ? 'active' : ''}
//                 >
//                     {renderButtonText(t('sectors'), activeSector)}
//                 </button>

//                 <button
//                     onClick={() => {
//                         setActiveService(null);
//                         setActiveSector(null);
//                         setActiveClient(null);
//                         setActiveComponent('Clients');
//                     }}
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
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import ServicesListPhone from './components/ServicesListPhone';
import Clients from './components/Clients';
import Featured from './components/Featured';
import Sectors from './components/Sectors';
import professionalProjects from '../../utils/ProfessionalProjects';
import './ServicesPhone.css';

function ServicesPhone({ showTitle = false }) {
    const { language, toggleLanguage, t, getRoute} = useLanguage();
    const { openCategoryModal } = useOutletContext();
    const [activeComponent, setActiveComponent] = useState('Featured');

    const [activeService, setActiveService] = useState(null);
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

    // Función para abrir el modal de servicios
    const handleOpenServicesModal = () => {
        // Crear estructura de categorías para el modal usando servicesList
        const servicesCategories = {
            services: t('servicesList') // Directamente el array de servicios
        };

        openCategoryModal(
            servicesCategories,
            activeService, // Categoría seleccionada actual
            applyServiceFilter,
            'services'
        );
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
            case 'Services':
                return (
                    <ServicesListPhone
                        t={t}
                        language={language}
                        onServiceClick={applyServiceFilter}
                        filteredProjects={filteredProjects}
                        activeService={activeService}
                    />
                );
            // case 'Sectors':
            //     return (
            //         <Sectors
            //             t={t}
            //             language={language}
            //             sectors={getSectorsWithCount()}
            //             onSectorClick={applySectorFilter}
            //             filteredProjects={filteredProjects}
            //             activeSector={activeSector}
            //         />
            //     );
            case 'Featured':
                return <Featured t={t} projects={professionalProjects} language={language} getRoute={getRoute} />;
            // case 'Clients':
            //     return (
            //         <Clients
            //             t={t}
            //             language={language}
            //             clients={getClientsWithCount()}
            //             onClientClick={applyClientFilter}
            //             filteredProjects={filteredProjects}
            //             activeClient={activeClient}
            //         />
            //     );
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

            <div className='phone-studio-filter'>
                <button
                    onClick={() => clearFilters()}
                    className={activeComponent === 'Featured' ? 'active' : ''}
                >
                    {t('featured')}
                </button>

                <button
                    onClick={handleOpenServicesModal}
                    className={activeComponent === 'Services' ? 'active' : ''}
                >
                    {renderButtonText(t('services'), activeService)}
                </button>

                <button
                    onClick={() => {
                        setActiveService(null);
                        setActiveSector(null);
                        setActiveClient(null);
                        setActiveComponent('Sectors');
                    }}
                    className={activeComponent === 'Sectors' ? 'active' : ''}
                >
                    {renderButtonText(t('sectors'), activeSector)}
                </button>

                <button
                    onClick={() => {
                        setActiveService(null);
                        setActiveSector(null);
                        setActiveClient(null);
                        setActiveComponent('Clients');
                    }}
                    className={activeComponent === 'Clients' ? 'active' : ''}
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
    )
}

export default ServicesPhone;