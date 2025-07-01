import { useEffect, useState } from 'react';
import ShowWebProjects from '../../components/showWebProjects/ShowWebProjects';
import { useSearchParams } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { useLanguage } from '../../components/contexts/LanguageContext';
import projectsData, { getProjectsByCategory } from '../../utils/WebProjects';
import CategoriesPhone from '../../components/categoriesPhone/CategoriesPhone';

import './PortfolioProjectSection.css'

function PortfolioProjectSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const { language, t } = useLanguage();
  const { isMenuOpen, setIsMenuOpen } = useOutletContext();
  const [searchParams] = useSearchParams();

  const categories = {
    all: {
      es: "Todos",
      en: "All"
    },
    frontend: {
      es: "Front-end",
      en: "Front-end"
    },
    fullstack: {
      es: "Full-stack",
      en: "Full-stack"
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.web-section');
      const position = window.pageYOffset;

      setScrollPosition(position);

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const marginBottom = Math.max(80 - (scrollPosition * 0.1), 10);

  const filteredProjects = getProjectsByCategory(selectedCategory);

  return (
    <div className="webproject-container-mobile" onClick={(e) => {
      e.stopPropagation();
      setIsMenuOpen(false);
    }}>
      <h2 className='titulo-principal-p'>{t('code')}</h2>
      <CategoriesPhone
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        type="code"
      />

      <div className="web-projects-mobile" style={{ marginBottom: `${marginBottom}px` }}>
        {filteredProjects.map((project, index) => (
          <ShowWebProjects
            key={index}
            className={index === activeIndex ? 'active' : ''}
            language={language}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}

export default PortfolioProjectSection;