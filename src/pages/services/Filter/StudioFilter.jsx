// import './StudioFilter.css'; 

// function StudioFilter({ 
//     t, 
//     activeComponent, 
//     activeService, 
//     activeSector, 
//     activeClient,
//     clearFilters,
//     setActiveService,
//     setActiveSector,
//     setActiveClient,
//     setActiveComponent
// }) {
    
//     const renderButtonText = (baseText, activeFilter) => {
//         if (activeFilter) {
//             return (
//                 <span className="button-with-filter">
//                     {baseText}: {activeFilter}
//                     <span className="filter-close" onClick={(e) => {
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
//         <div className='studio-filter'>
//             <button
//                 onClick={() => clearFilters()}
//                 className={activeComponent === 'Featured' ? 'active' : ''}
//             >
//                 {t('featured')}
//             </button>

//             <button
//                 onClick={() => {
//                     setActiveService(null);
//                     setActiveSector(null);
//                     setActiveClient(null);
//                     setActiveComponent('All');
//                 }}
//                 className={activeComponent === 'All' ? 'active' : ''}
//             >
//                 {t('all')}
//             </button>

//             <button
//                 onClick={() => {
//                     setActiveService(null);
//                     setActiveSector(null);
//                     setActiveClient(null);
//                     setActiveComponent('Services');
//                 }}
//                 className={activeComponent === 'Services' ? 'active' : ''}
//             >
//                 {renderButtonText(t('services'), activeService)}
//             </button>

//             <button
//                 onClick={() => {
//                     setActiveService(null);
//                     setActiveSector(null);
//                     setActiveClient(null);
//                     setActiveComponent('Sectors');
//                 }}
//                 className={activeComponent === 'Sectors' ? 'active' : ''}
//             >
//                 {renderButtonText(t('sectors'), activeSector)}
//             </button>

//             <button
//                 onClick={() => {
//                     setActiveService(null);
//                     setActiveSector(null);
//                     setActiveClient(null);
//                     setActiveComponent('Clients');
//                 }}
//                 className={activeComponent === 'Clients' ? 'active' : ''}
//             >
//                 {renderButtonText(t('clients'), activeClient)}
//             </button>
//         </div>
//     );
// }

// export default StudioFilter;


import { useRef, useState, useEffect } from 'react';
import './StudioFilter.css';

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
    const containerRef = useRef(null);
    const [dotLeft, setDotLeft] = useState(null);
    const [hoveredButton, setHoveredButton] = useState(null);

    const moveDotToButton = (btn) => {
        if (!btn || !containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const btnRect = btn.getBoundingClientRect();
        const center = btnRect.left - containerRect.left + btnRect.width / 2;
        setDotLeft(center);
    };

    // cuando cambia el activo, mueve el dot al botón activo
    useEffect(() => {
        if (hoveredButton) return; // si hay hover, no sobreescribir
        const activeBtn = containerRef.current?.querySelector('button.active');
        moveDotToButton(activeBtn);
    }, [activeComponent, hoveredButton]);

    return (
        <div className='studio-filter' ref={containerRef}>
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
                onMouseLeave={() => { setHoveredButton(null); }}
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
                onMouseLeave={() => { setHoveredButton(null); }}
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
                onMouseEnter={(e) => { setHoveredButton(e.currentTarget); moveDotToButton(e.currentTarget); }}
                onMouseLeave={() => { setHoveredButton(null); }}
            >
                {t('services')}
            </button>

            <button
                onClick={() => {
                    setActiveService(null);
                    setActiveSector(null);
                    setActiveClient(null);
                    setActiveComponent('Sectors');
                }}
                className={activeComponent === 'Sectors' ? 'active' : ''}
                onMouseEnter={(e) => { setHoveredButton(e.currentTarget); moveDotToButton(e.currentTarget); }}
                onMouseLeave={() => { setHoveredButton(null); }}
            >
                {t('sectors')}
            </button>

            <button
                onClick={() => {
                    setActiveService(null);
                    setActiveSector(null);
                    setActiveClient(null);
                    setActiveComponent('Clients');
                }}
                className={activeComponent === 'Clients' ? 'active' : ''}
                onMouseEnter={(e) => { setHoveredButton(e.currentTarget); moveDotToButton(e.currentTarget); }}
                onMouseLeave={() => { setHoveredButton(null); }}
            >
                {t('clients')}
            </button>
        </div>
    );
}

export default StudioFilter;