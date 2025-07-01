import { useLanguage } from '../../components/contexts/LanguageContext';
import { useOutletContext } from 'react-router-dom';
import './CategoriesPhone.css';

function CategoriesPhone({ categories, selectedCategory, onCategoryChange, type = 'art' }) {
    const { language, t } = useLanguage();
    const { openCategoryModal } = useOutletContext(); 

    const handleCategoryClick = () => {
        openCategoryModal(categories, selectedCategory, onCategoryChange, type);
    };

    const getSelectedCategoryText = () => {
        if (selectedCategory === 'All') {
            return categories.all[language];
        }
        
        if (type === 'art') {
            if (selectedCategory === 'Photography') return categories.photography[language];
            if (selectedCategory === 'Design') return categories.design[language];
        }
        
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