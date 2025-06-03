// import { useLanguage } from '../../components/contexts/LanguageContext';
// import './ModalPhone.css';

// function ModalPhone({ isOpen, onClose, categories, selectedCategory, onCategorySelect, type = 'art' }) {
//     const { language } = useLanguage();

//     if (!isOpen) return null;

//     const handleCategoryClick = (categoryKey) => {
//         onCategorySelect(categoryKey);
//     };

//     const renderCategories = () => {
//         const categoryItems = [
//             { key: 'All', label: categories.all[language] }
//         ];

//         if (type === 'art') {
//             categoryItems.push(
//                 { key: 'Photography', label: categories.photography[language] },
//                 { key: 'Design', label: categories.design[language] }
//             );
//         } else if (type === 'code') {
//             categoryItems.push(
//                 { key: 'Front-end', label: categories.frontend[language] },
//                 { key: 'Full-stack', label: categories.fullstack[language] }
//             );
//         }

//         return categoryItems.map((item) => (
//             <div
//                 key={item.key}
//                 className={`modal-category-item ${selectedCategory === item.key ? 'active' : ''}`}
//                 onClick={() => handleCategoryClick(item.key)}
//             >
//                 {item.label}
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
import './ModalPhone.css';

function ModalPhone({ isOpen, onClose, categories, selectedCategory, onCategorySelect, type = 'art' }) {
    const { language } = useLanguage();

    if (!isOpen) return null;

    const handleCategoryClick = (categoryKey) => {
        onCategorySelect(categoryKey);
        onClose(); // Cerrar el modal después de seleccionar
    };

    const renderCategories = () => {
        // Para servicios, la estructura es un array
        if (type === 'services') {
            if (!categories.services || !Array.isArray(categories.services)) return null;
            
            return categories.services.map((service) => (
                <div
                    key={service}
                    className={`modal-category-item ${selectedCategory === service ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(service)}
                >
                    {service}
                </div>
            ));
        }

        // Para art y code (estructura original)
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

        return categoryItems.map((item) => (
            <div
                key={item.key}
                className={`modal-category-item ${selectedCategory === item.key ? 'active' : ''}`}
                onClick={() => handleCategoryClick(item.key)}
            >
                {item.label}
            </div>
        ));
    };

    return (
        <div className="modal-phone-overlay" onClick={onClose}>
            <div className="modal-phone-content" onClick={(e) => e.stopPropagation()}>
                <button className="about-close-btn" onClick={onClose}>
                    
                </button>
                
                <div className="modal-categories-list">
                    {renderCategories()}
                </div>
            </div>
        </div>
    );
}

export default ModalPhone;