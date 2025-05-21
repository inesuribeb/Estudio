import { useLanguage } from '../../components/contexts/LanguageContext';
import { useState } from 'react';
import ServicesList from './components/ServicesList';
import Clients from './components/Clients';
import Featured from './components/Featured';
import Sectors from './components/Sectors';
import './Services.css'

function Services() {
    const { language, toggleLanguage, t } = useLanguage();
    const [activeComponent, setActiveComponent] = useState('Services');

    const renderActiveComponent = () => {
        switch (activeComponent) {
            case 'Services':
                return <ServicesList t={t} />;
            case 'Sectors':
                return <Sectors t={t} />;
            case 'Featured':
                return <Featured t={t} />;
            case 'Clients':
                return <Clients t={t} />;
            default:
                return <ServicesList t={t} />;
        }
    };

    return (
        <div className='services-wrapper'>
            <div className='statement'>
                {/* <h1 dangerouslySetInnerHTML={{ __html: t('agencyPhrase') }} /> */}
                <h2 dangerouslySetInnerHTML={{ __html: t('description') }} />
                {/* <h3 dangerouslySetInnerHTML={{ __html: `${t('impact')}<br/>${t('intention')}` }} /> */}

            </div>

            <div className='studio-filter'>
                <button
                    onClick={() => setActiveComponent('Services')}
                    className={activeComponent === 'Services' ? 'active' : ''}
                >
                    {t('services')}
                </button>
                <button
                    onClick={() => setActiveComponent('Sectors')}
                    className={activeComponent === 'Sectors' ? 'active' : ''}
                >
                    {t('sectors')}
                </button>
                <button
                    onClick={() => setActiveComponent('Clients')}
                    className={activeComponent === 'Clients' ? 'active' : ''}
                >
                    {t('clients')}
                </button>
                <button
                    onClick={() => setActiveComponent('Featured')}
                    className={activeComponent === 'Featured' ? 'active' : ''}
                >
                    {t('featured')}
                </button>
            </div>
            <div className="filter-render">
                {/* {renderActiveComponent()} */}
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