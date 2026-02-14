import './StudioFilter.css'; // Si necesitas CSS separado

function StudioFilter({ 
    t, 
    activeComponent, 
    activeService, 
    activeSector, 
    activeClient,
    clearFilters,
    setActiveService,
    setActiveSector,
    setActiveClient,
    setActiveComponent
}) {
    
    const renderButtonText = (baseText, activeFilter) => {
        if (activeFilter) {
            return (
                <span className="button-with-filter">
                    {baseText}: {activeFilter}
                    <span className="filter-close" onClick={(e) => {
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
        <div className='studio-filter'>
            <button
                onClick={() => clearFilters()}
                className={activeComponent === 'Featured' ? 'active' : ''}
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
            >
                {t('all')}
            </button>

            <button
                onClick={() => {
                    setActiveService(null);
                    setActiveSector(null);
                    setActiveClient(null);
                    setActiveComponent('Services');
                }}
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
    );
}

export default StudioFilter;