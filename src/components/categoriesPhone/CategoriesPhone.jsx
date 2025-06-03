// import { useState } from 'react';
// import { useLanguage } from '../../components/contexts/LanguageContext';
// import MenuIcon from '@mui/icons-material/Menu';
// import ModalPhone from '../modalPhone/ModalPhone';
// import './CategoriesPhone.css';

// function CategoriesPhone({ categories, selectedCategory, onCategoryChange, type = 'art' }) {
//     const { language, t } = useLanguage();
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handleCategoryClick = () => {
//         setIsModalOpen(true);
//     };

//     const handleCategorySelect = (category) => {
//         onCategoryChange(category);
//         setIsModalOpen(false);
//     };

//     const getSelectedCategoryText = () => {
//         if (selectedCategory === 'All') {
//             return categories.all[language];
//         }

//         if (type === 'art') {
//             if (selectedCategory === 'Photography') return categories.photography[language];
//             if (selectedCategory === 'Design') return categories.design[language];
//         }

//         if (type === 'code') {
//             if (selectedCategory === 'Front-end') return categories.frontend[language];
//             if (selectedCategory === 'Full-stack') return categories.fullstack[language];
//         }

//         return categories.all[language];
//     };

//     return (
//         <>
//             <div className="categories-phone-header">
//                 <div className="categories-phone-left" onClick={handleCategoryClick}>
//                     <div className="custom-hamburger">
//                         <span className="hamburger-line"></span>
//                         <span className="hamburger-line"></span>
//                         <span className="hamburger-line"></span>
//                     </div>
//                     <span className="categories-label">{t('categories')}</span>
//                 </div>

//                 <div className="categories-phone-right">
//                     <span className="selected-category">{getSelectedCategoryText()}</span>
//                 </div>
//             </div>

//             <ModalPhone
//                 isOpen={isModalOpen}
//                 onClose={() => setIsModalOpen(false)}
//                 categories={categories}
//                 selectedCategory={selectedCategory}
//                 onCategorySelect={handleCategorySelect}
//                 type={type}
//             />
//         </>
//     );
// }

// export default CategoriesPhone;

import { useLanguage } from '../../components/contexts/LanguageContext';
import { useOutletContext } from 'react-router-dom';
import './CategoriesPhone.css';

function CategoriesPhone({ categories, selectedCategory, onCategoryChange, type = 'art' }) {
    const { language, t } = useLanguage();
    const { openCategoryModal } = useOutletContext(); // ← Obtener función del contexto

    const handleCategoryClick = () => {
        // ← Usar la función del RootPhone para abrir el modal
        openCategoryModal(categories, selectedCategory, onCategoryChange, type);
    };

    // Obtener el texto de la categoría seleccionada
    const getSelectedCategoryText = () => {
        if (selectedCategory === 'All') {
            return categories.all[language];
        }
        
        // Para art
        if (type === 'art') {
            if (selectedCategory === 'Photography') return categories.photography[language];
            if (selectedCategory === 'Design') return categories.design[language];
        }
        
        // Para code
        if (type === 'code') {
            if (selectedCategory === 'Front-end') return categories.frontend[language];
            if (selectedCategory === 'Full-stack') return categories.fullstack[language];
        }
        
        return categories.all[language];
    };

    return (
        <div className="categories-phone-header">
            <div className="categories-phone-left" onClick={handleCategoryClick}>
                <div className="custom-hamburger">
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </div>
                <span className="categories-label">{t('categories')}</span>
            </div>
            
            <div className="categories-phone-right">
                <span className="selected-category">{getSelectedCategoryText()}</span>
            </div>
        </div>
    );
}

export default CategoriesPhone;