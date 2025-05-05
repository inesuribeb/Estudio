import { useEffect, useState } from 'react';
import SectionWeb from '../../components/sectionWeb/SectionWeb'
import './WebProjects.css'


function WebProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');


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

  const projectsData = [
    {
      title: "KAZOKU",
      description: "Kazoku is a social network for developers, allowing users to create profiles, showcase web projects, and link social media accounts. It features a like system, followers/following, and an internal chat. For non-users, it also serves as an inspiring website for web development ideas. Developed with Saúl Mora, Ekaitz Guerra and Jon Latxiondo.",
      category: "Full-stack",
      method: "React • JavaScript • CSS3 • Mongo DB • Node • Multer • Socket IO",
      link: "https://github.com/EkaitzGA/kazoku",
      images: [
        { src: "https://i.ibb.co/2VvcwMc/favicon.jpg", alt: "descripción2" },
        { src: "https://i.ibb.co/qYbGPTR0/2k.png", alt: "descripción1" },
        { src: "https://i.ibb.co/PXRFRXR/10k.png", alt: "descripción1" },

        { src: "https://i.ibb.co/8D0qhHwY/3k.png", alt: "descripción2" },
        { src: "https://i.ibb.co/b523GVpT/6k.png", alt: "descripción2" },
        { src: "https://i.ibb.co/tpW2tK8X/5k.png", alt: "descripción2" },
        { src: "https://i.ibb.co/YTLtSLNq/4k.png", alt: "descripción2" },
        { src: "https://i.ibb.co/84bNmZn6/1k.png", alt: "descripción2" },
        { src: "https://i.ibb.co/HDmvLmtZ/9k.png", alt: "descripción2" },
        
      ]
    },
    {
      title: "SWIPE AGENCY",
      web: "https://swipeagency.es/",
      description: "SWIPE AGENCY is a fashion representation agency based in Bilbao. Its brands combine design and tradition. The platform is a React-based digital catalog with responsive design, exclusive layouts for desktop and mobile, and dynamic navigation.",
      category: "Front-end",
      method: "React • JavaScript • CSS3",
      link: "https://github.com/inesuribeb/Swipe-Agency",
      images: [
        { src: "https://i.ibb.co/2ZN5PWg/Captura-de-Pantalla-2025-01-05-a-las-14-37-55.png", alt: "descripción1" },
        { src: "https://i.ibb.co/f297Rbr/IMG-6464.jpg", alt: "descripción2" },
        { src: "https://i.ibb.co/wYrqG72/Captura-de-Pantalla-2025-01-05-a-las-14-38-04.png", alt: "descripción2" },
        { src: "https://i.ibb.co/wLJ4tHm/IMG-6463.jpg", alt: "descripción2" },
        { src: "https://i.ibb.co/FYD5818/Captura-de-Pantalla-2025-01-05-a-las-14-38-13.png", alt: "descripción2" },
        { src: "https://i.ibb.co/34fpbXf/IMG-6456.jpg", alt: "descripción2" },
        { src: "https://i.ibb.co/HnbQfMF/Captura-de-Pantalla-2025-01-05-a-las-14-38-53.png", alt: "descripción2" },
        { src: "https://i.ibb.co/YLxXVG1/IMG-6458.jpg", alt: "descripción2" },
        { src: "https://i.ibb.co/B6YTXBy/Captura-de-Pantalla-2025-01-05-a-las-14-39-26.png", alt: "descripción2" },
        { src: "https://i.ibb.co/wCxz7kr/IMG-6457.jpg", alt: "descripción2" },
        { src: "https://i.ibb.co/y4PbtNS/Captura-de-Pantalla-2025-01-05-a-las-14-39-04.png", alt: "descripción2" },
        { src: "https://i.ibb.co/0hKVKy7/IMG-6459.jpg", alt: "descripción2" },
        { src: "https://i.ibb.co/WgKJpSx/IMG-6460.jpg", alt: "descripción2" },
      ]
    },
    {
      title: "MACHIMBAG",
      web: "https://machimba.inesuribe.es/home",
      description: "MACHIMBA is an e-commerce platform offering unique, limited-edition bags designed and crafted by Rocío Machimbarrena. It combines elegant design with a seamless shopping experience. Developed in collaboration with Samuel Correia and Ekaitz Guerra.",
      category: "Full-stack",
      method: "Node.js • MySQL • JavaScript • Pug • CSS3",
      link: "https://github.com/inesuribeb/Machimba",
      images: [
        { src: "https://i.ibb.co/BP1v1BX/Captura-de-Pantalla-2025-01-05-a-las-10-44-45.png", alt: "descripción1" },
        { src: "https://i.ibb.co/dcWB4nJ/Captura-de-Pantalla-2025-01-05-a-las-10-45-23.png", alt: "descripción2" },
        { src: "https://i.ibb.co/vZ4W5YX/WEB-ABOUT-DIOSA.png", alt: "descripción2" },
        { src: "https://i.ibb.co/dGzsKvK/Captura-de-Pantalla-2025-01-05-a-las-10-50-18.png", alt: "descripción2" },
        { src: "https://i.ibb.co/x7yz2MH/Captura-de-Pantalla-2025-01-05-a-las-10-48-48.png", alt: "descripción2" },
        { src: "https://i.ibb.co/M9J7B6T/Captura-de-Pantalla-2025-01-05-a-las-13-20-12.png", alt: "descripción2" },
        { src: "https://i.ibb.co/MSRCwG1/Captura-de-Pantalla-2025-01-05-a-las-10-51-16.png", alt: "descripción2" },
        { src: "https://i.ibb.co/CvY7hck/Captura-de-Pantalla-2025-01-05-a-las-13-26-42.png", alt: "descripción2" },
      ]
    },
    {
      title: "The Bike Country",
      web: "https://bikecountry.inesuribe.es/",
      description: "TBC is a premium tourism company specialized in cycling in the Basque Country (Euskadi). Its e-commerce platform enables users to explore packages, book experiences, and manage their journeys seamlessly. Developed in collaboration with Yeray Moreno and Estefania Mendes.",
      category: "Full-stack",
      method: "MySQL • React • CSS3 • JavaScript",
      link: "https://github.com/inesuribeb/The-Bike_Country-Frontend-2-",
      images: [
        { src: "https://i.ibb.co/Q3r16jgG/tbc9.png", alt: "descripción1" },
        { src: "https://i.ibb.co/Y4zt3tjP/tbc8.png", alt: "descripción1" },
        { src: "https://i.ibb.co/HTYh3ZSR/tbc7.png", alt: "descripción1" },
        { src: "https://i.ibb.co/HTkJMwwV/tbc6.png", alt: "descripción1" },
        { src: "https://i.ibb.co/JRzkWJwG/tbc4.png", alt: "descripción1" },
        { src: "https://i.ibb.co/LDT5mBtM/tbc3.png", alt: "descripción1" },
        { src: "https://i.ibb.co/tpmzrtcP/tbc10.png", alt: "descripción1" },
      ]
    },
    {
      title: "KHROMA",
      web: "https://khroma.inesuribe.es/",
      description: "KHROMA is a project that allows users to explore and generate custom color schemes, identify and convert colors, and create versatile palettes for various applications.",
      category: "Front-end",
      method: "JavaScript • API REST • CSS3",
      link: "https://github.com/inesuribeb/Khroma",
      images: [
        { src: "https://i.ibb.co/RSYwyM7/Captura-de-Pantalla-2025-01-05-a-las-11-06-58.png", alt: "descripción1" },
        // { src: "https://i.ibb.co/kmC40Ng/Captura-de-Pantalla-2025-01-05-a-las-11-04-03.png", alt: "descripción2" },
        { src: "https://i.ibb.co/B2s3VkS/Captura-de-Pantalla-2025-01-05-a-las-11-08-21.png", alt: "descripción2" },
        { src: "https://i.ibb.co/4tL0LJD/Captura-de-Pantalla-2025-01-05-a-las-11-14-22.png", alt: "descripción2" },
        // { src: "https://i.ibb.co/0ZrjwD3/Captura-de-Pantalla-2025-01-05-a-las-11-13-29.png", alt: "descripción2" },
        { src: "https://i.ibb.co/LrXqhMw/Captura-de-Pantalla-2025-01-05-a-las-11-15-42.png", alt: "descripción2" },
        { src: "https://i.ibb.co/wKMp1W6/Captura-de-Pantalla-2025-01-05-a-las-11-14-48.png", alt: "descripción2" },
        { src: "https://i.ibb.co/FWd9xzw/Captura-de-Pantalla-2025-01-05-a-las-16-55-00.png", alt: "descripción2" },
        { src: "https://i.ibb.co/bgwkgMz/Captura-de-Pantalla-2025-01-05-a-las-16-55-41.png", alt: "descripción2" },
      ]
    },
    {
      title: "BYTE BITES",
      web: "https://byte-bites.inesuribe.es/",
      description: "BYTE BITES is a web platform designed to make exploring and discovering recipes easier, offering users personalized searches, recommendations, and query-based searches. Developed in collaboration with Jon Latxiondo.",
      category: "Front-end",
      method: "JavaScript • API REST • CSS3",
      link: "https://github.com/inesuribeb/Byte-Bites",
      images: [
        { src: "https://i.ibb.co/NSm28g6/Captura-de-Pantalla-2025-01-05-a-las-10-31-02.png", alt: "descripción1" },
        { src: "https://i.ibb.co/h2fHPgc/Captura-de-Pantalla-2025-01-05-a-las-10-31-47.png", alt: "descripción2" },
        { src: "https://i.ibb.co/bmFwMcJ/Captura-de-Pantalla-2025-01-05-a-las-10-39-57.png", alt: "descripción2" },
        { src: "https://i.ibb.co/P9fXLxp/Captura-de-Pantalla-2025-01-05-a-las-10-33-56.png", alt: "descripción2" },
        { src: "https://i.ibb.co/nnZZdQh/Captura-de-Pantalla-2025-01-05-a-las-10-40-04.png", alt: "descripción2" },
      ]
    },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <div className="webproject-container">
      <div className="categories">
        <span
          className={selectedCategory === 'All' ? 'active' : ''}
          onClick={() => setSelectedCategory('All')}
        >
          All
        </span>
        <span className="separator">, </span>
        <span
          className={selectedCategory === 'Front-end' ? 'active' : ''}
          onClick={() => setSelectedCategory('Front-end')}
        >
          Front-end
        </span>
        <span className="separator">, </span>
        <span
          className={selectedCategory === 'Full-stack' ? 'active' : ''}
          onClick={() => setSelectedCategory('Full-stack')}
        >
          Full-stack
        </span>
      </div>



      <div className="web-projects" style={{ marginBottom: `${marginBottom}px` }}>
        {filteredProjects.map((project, index) => (
          <SectionWeb
            key={index}
            className={index === activeIndex ? 'active' : ''}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}

export default WebProjects;