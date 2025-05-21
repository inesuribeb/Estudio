import './ServicesList.css'

function ServicesList({ t }) {
    return (
        <div className='services-list'>
            {/* <div className='services-title'>
                <h1>{t('servicesTitle')}</h1>
            </div> */}
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
        </div>
    )
}

export default ServicesList;