import { useEffect, useState } from 'react';
import { useLanguage } from '../../components/contexts/LanguageContext';
import SectionWeb from '../../components/sectionWeb/SectionWeb'
import projectsData, { getProjectsByCategory } from '../../utils/WebProjects'
import './WebProjects.css'

function WebProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { language, t } = useLanguage();

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

  const marginBottom = Math.max(80 - (scrollPosition * 0.1), 10);

  const filteredProjects = getProjectsByCategory(selectedCategory);

  return (
    <div className="webproject-container">
      <div className="categories">
        <span
          className={selectedCategory === 'All' ? 'active' : ''}
          onClick={() => setSelectedCategory('All')}
        >
          {/* All */}
          {categories.all[language]}
        </span>
        <span className="separator">, </span>
        <span
          className={selectedCategory === 'Front-end' ? 'active' : ''}
          onClick={() => setSelectedCategory('Front-end')}
        >
          {/* Front-end */}
          {categories.frontend[language]}
        </span>
        <span className="separator">, </span>
        <span
          className={selectedCategory === 'Full-stack' ? 'active' : ''}
          onClick={() => setSelectedCategory('Full-stack')}
        >
          {/* Full-stack */}
          {categories.fullstack[language]}
        </span>
      </div>

      <div className="web-projects" style={{ marginBottom: `${marginBottom}px` }}>
        {filteredProjects.map((project, index) => (
          <SectionWeb
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

export default WebProjects;