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
import MainMenu from '../mainMenu/MainMenu';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [isPageClickEnabled, setIsPageClickEnabled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuTimeoutRef = useRef(null);

  useEffect(() => {
    // Establecer un temporizador para mostrar el menú después de 3 segundos
    menuTimeoutRef.current = setTimeout(() => {
      setShowMenu(true);
    }, 3000);

    // Limpiar el temporizador si el componente se desmonta
    return () => {
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current);
      }
    };
  }, []);

  const handleTitleClick = (e) => {
    e.stopPropagation();
    
    // Cancelar el temporizador existente
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
    
    // Mostrar el menú inmediatamente al hacer clic en el título
    setShowMenu(true);
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
        <span className="title-home-desktop-text">INES URIBE</span>
      </h1>
      
      {/* Renderizar el menú condicionalmente */}
      {showMenu && <MainMenu />}
    </div>
  );
};

export default Home;