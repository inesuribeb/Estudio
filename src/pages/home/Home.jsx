// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import './Home.css';

// const Home = () => {
//   const navigate = useNavigate();
//   const [isPageClickEnabled, setIsPageClickEnabled] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsPageClickEnabled(true);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);


//   const handlePageClick = (e) => {
//     if (isPageClickEnabled && !e.target.closest('.title')) {
//       navigate('/arte', { state: { from: '/' } });
//     }
//   };
  
//   const handleTitleClick = (e) => {
//     e.stopPropagation();
//     navigate('/arte', { state: { from: '/' } });
//   };

//   return (
//     <div 
//       className="home-container"
//       onClick={handlePageClick}
//       style={{ cursor: isPageClickEnabled ? 'pointer' : 'default' }}
//     >
//       <h1 
//         className="title-home-desktop"
//         onClick={handleTitleClick}
//       >
//         <span className="title-home-desktop-text">INES URIBE</span>
//       </h1>
//     </div>
//   );
// };

// export default Home;



import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [isPageClickEnabled, setIsPageClickEnabled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuTimeoutRef = useRef(null);

  useEffect(() => {
    menuTimeoutRef.current = setTimeout(() => {
      navigate('/menu');
    }, 3000);

    return () => {
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current);
      }
    };
  }, [navigate]);

  const handleTitleClick = (e) => {
    e.stopPropagation();
    
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
    
    navigate('/menu');
  };

  return (
    <div 
      className="home-container"
      style={{ cursor: isPageClickEnabled ? 'pointer' : 'default' }}
    >
      <h1 
        className="title-home-desktop"
        onClick={handleTitleClick}
      >
        <span className="title-home-desktop-text">ESTUDIO INES URIBE</span>
      </h1>
    </div>
  );
};

export default Home;

// Home.jsx actualizado para navegar al menú según el idioma actual

// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState, useRef } from 'react';
// import { useLanguage } from '../../components/contexts/LanguageContext';
// import './Home.css';

// const Home = () => {
//   const navigate = useNavigate();
//   const [isPageClickEnabled, setIsPageClickEnabled] = useState(false);
//   const menuTimeoutRef = useRef(null);
  
//   let languageContext;
//   try {
//     languageContext = useLanguage();
//   } catch (error) {
//     languageContext = { 
//       language: 'es', 
//       getRoute: (route) => route === 'menu' ? '/menu' : '/' 
//     };
//   }
  
//   const { language, getRoute } = languageContext;
  
//   useEffect(() => {
//     menuTimeoutRef.current = setTimeout(() => {
//       const menuRoute = getRoute('menu');
//       navigate(menuRoute);
//     }, 3000);

//     return () => {
//       if (menuTimeoutRef.current) {
//         clearTimeout(menuTimeoutRef.current);
//       }
//     };
//   }, [navigate, getRoute]);

//   const handleTitleClick = (e) => {
//     e.stopPropagation();
    
//     if (menuTimeoutRef.current) {
//       clearTimeout(menuTimeoutRef.current);
//       menuTimeoutRef.current = null;
//     }
    
//     const menuRoute = getRoute('menu');
//     navigate(menuRoute);
//   };

//   return (
//     <div 
//       className="home-container"
//       style={{ cursor: isPageClickEnabled ? 'pointer' : 'default' }}
//     >
//       <h1 
//         className="title-home-desktop"
//         onClick={handleTitleClick}
//       >
//         <span className="title-home-desktop-text">INES URIBE</span>
//       </h1>
//     </div>
//   );
// };

// export default Home;