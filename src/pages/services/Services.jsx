import { useLanguage } from '../../components/contexts/LanguageContext';
import ServicesList from './components/ServicesList';
import './Services.css'

function Services() {
    const { language, toggleLanguage, t } = useLanguage();

    return (
        <div className='services-wrapper'>
            <div className='statement'>
                {/* <h1 dangerouslySetInnerHTML={{ __html: t('agencyPhrase') }} /> */}
                <h2 dangerouslySetInnerHTML={{ __html: t('description') }} />
                <h3 dangerouslySetInnerHTML={{ __html: `${t('impact')}<br/>${t('intention')}` }} />

            </div>

            {/* <div className='services-list'>
                <div className='services-title'>
                    <h1>{t('servicesTitle')}</h1>
                </div>
                <div className='services-display'>
                    <ul>
                        {t('servicesList').map((service, index) => (
                            <div key={index} className="service-item">
                                <span className="menu-number menu-number-right">[{(index + 1).toString().padStart(2, '0')}]</span>
                                <li>{service}</li>
                            </div>
                        ))}
                    </ul>
                </div>
            </div> */}

            <ServicesList t={t} />

            <div className='statement'>
                <h2 dangerouslySetInnerHTML={{ __html: t('personality') }} />
            </div>
        </div>
    )
}

export default Services;