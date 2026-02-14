// import { useLanguage } from '../../components/contexts/LanguageContext';
// import { useEffect } from 'react';
// import './ModalPhone.css';

// function ModalPhone({ isOpen, onClose, categories, selectedCategory, onCategorySelect, type = 'art' }) {
//     const { language } = useLanguage();

//     useEffect(() => {
//         if (isOpen) {
//             const scrollY = window.scrollY;
//             document.body.style.position = 'fixed';
//             document.body.style.top = `-${scrollY}px`;
//             document.body.style.width = '100%';
//         } else {
//             const scrollY = document.body.style.top;
//             document.body.style.position = '';
//             document.body.style.top = '';
//             document.body.style.width = '';
//             if (scrollY) {
//                 window.scrollTo(0, parseInt(scrollY || '0') * -1);
//             }
//         }

//         return () => {
//             // Cleanup
//             document.body.style.position = '';
//             document.body.style.top = '';
//             document.body.style.width = '';
//         };
//     }, [isOpen]);

//     if (!isOpen) return null;

//     const handleCategoryClick = (categoryKey) => {
//         onCategorySelect(categoryKey);
//         onClose(); 
//     };

//     const renderCategories = () => {
//         if (type === 'services') {
//             if (!categories.services || !Array.isArray(categories.services)) return null;
            
//             return categories.services.map((service, index) => (
//                 <div
//                     key={`service-${index}`}
//                     className={`modal-category-item ${selectedCategory === service ? 'active' : ''}`}
//                     onClick={() => handleCategoryClick(service)}
//                 >
//                     <span className="phone-menu-text">{service}</span>
//                 </div>
//             ));
//         }

//         if (type === 'sectors') {
//             if (!categories.sectors || !Array.isArray(categories.sectors)) return null;
            
//             return categories.sectors.map((sector, index) => (
//                 <div
//                     key={`sector-${index}`}
//                     className={`modal-category-item ${selectedCategory === sector.name ? 'active' : ''}`}
//                     onClick={() => handleCategoryClick(sector.name)}
//                 >
//                     <span className="phone-menu-text">{sector.name} ({sector.count})</span>
//                 </div>
//             ));
//         }

//         if (type === 'clients') {
//             if (!categories.clients || !Array.isArray(categories.clients)) return null;
            
//             return categories.clients.map((client, index) => (
//                 <div
//                     key={`client-${index}`}
//                     className={`modal-category-item ${selectedCategory === client.name ? 'active' : ''}`}
//                     onClick={() => handleCategoryClick(client.name)}
//                 >
//                     <span className="phone-menu-text">{client.name} ({client.count})</span>
//                 </div>
//             ));
//         }

//         const categoryItems = [
//             { key: 'All', label: categories.all?.[language] || 'All' }
//         ];

//         if (type === 'art') {
//             categoryItems.push(
//                 { key: 'Photography', label: categories.photography?.[language] || 'Photography' },
//                 { key: 'Design', label: categories.design?.[language] || 'Design' }
//             );
//         } else if (type === 'code') {
//             categoryItems.push(
//                 { key: 'Front-end', label: categories.frontend?.[language] || 'Front-end' },
//                 { key: 'Full-stack', label: categories.fullstack?.[language] || 'Full-stack' }
//             );
//         }

//         return categoryItems.map((item, index) => (
//             <div
//                 key={item.key}
//                 className={`modal-category-item ${selectedCategory === item.key ? 'active' : ''}`}
//                 onClick={() => handleCategoryClick(item.key)}
//             >
//                 <span className="phone-menu-number">[{(index + 1).toString().padStart(2, '0')}]</span>
//                 <span className="phone-menu-text">{item.label}</span>
//             </div>
//         ));
//     };

//     return (
//         <div className="modal-phone-overlay" onClick={onClose}>
//             <div className="modal-phone-content" onClick={(e) => e.stopPropagation()}>
//                 <button className="about-close-btn" onClick={onClose}>
                    
//                 </button>
                
//                 <div className="modal-categories-list">
//                     {renderCategories()}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ModalPhone;

import { useLanguage } from '../../components/contexts/LanguageContext';
import { useEffect } from 'react';
import './ModalPhone.css';

function ModalPhone({ isOpen, onClose, categories, selectedCategory, onCategorySelect, type = 'art' }) {
    const { language } = useLanguage();

    useEffect(() => {
        if (isOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        }

        return () => {
            // Cleanup
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleCategoryClick = (categoryKey) => {
        onCategorySelect(categoryKey);
        onClose(); 
    };

    const renderCategories = () => {
        // Para services, sectors, clients (sin numeración)
        if (type === 'services') {
            if (!categories.services || !Array.isArray(categories.services)) return null;
            
            return categories.services.map((service, index) => (
                <div
                    key={`service-${index}`}
                    className={`modal-filter-item ${selectedCategory === service ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(service)}
                >
                    <span className="phone-menu-text">{service}</span>
                </div>
            ));
        }

        if (type === 'sectors') {
            if (!categories.sectors || !Array.isArray(categories.sectors)) return null;
            
            return categories.sectors.map((sector, index) => (
                <div
                    key={`sector-${index}`}
                    className={`modal-filter-item ${selectedCategory === sector.name ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(sector.name)}
                >
                    <span className="phone-menu-text">{sector.name} ({sector.count})</span>
                </div>
            ));
        }

        if (type === 'clients') {
            if (!categories.clients || !Array.isArray(categories.clients)) return null;
            
            return categories.clients.map((client, index) => (
                <div
                    key={`client-${index}`}
                    className={`modal-filter-item ${selectedCategory === client.name ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(client.name)}
                >
                    <span className="phone-menu-text">{client.name} ({client.count})</span>
                </div>
            ));
        }

        // Para art/code (con numeración [01], [02]...)
        const categoryItems = [
            { key: 'All', label: categories.all?.[language] || 'All' }
        ];

        if (type === 'art') {
            categoryItems.push(
                { key: 'Photography', label: categories.photography?.[language] || 'Photography' },
                { key: 'Design', label: categories.design?.[language] || 'Design' }
            );
        } else if (type === 'code') {
            categoryItems.push(
                { key: 'Front-end', label: categories.frontend?.[language] || 'Front-end' },
                { key: 'Full-stack', label: categories.fullstack?.[language] || 'Full-stack' }
            );
        }

        return categoryItems.map((item, index) => (
            <div
                key={item.key}
                className={`modal-category-item ${selectedCategory === item.key ? 'active' : ''}`}
                onClick={() => handleCategoryClick(item.key)}
            >
                <span className="phone-menu-number">[{(index + 1).toString().padStart(2, '0')}]</span>
                <span className="phone-menu-text">{item.label}</span>
            </div>
        ));
    };

    return (
        <div className="modal-phone-overlay" onClick={onClose}>
            <div className="modal-phone-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    ×
                </button>
                
                {/* <div className="modal-categories-list"> */}
                <div className={`modal-categories-list ${(type === 'services' || type === 'sectors' || type === 'clients') ? 'modal-categories-list-filters' : ''}`}>
                    {renderCategories()}
                </div>
            </div>
        </div>
    );
}

export default ModalPhone;