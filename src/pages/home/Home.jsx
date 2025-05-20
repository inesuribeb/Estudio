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



// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState, useRef } from 'react';
// import './Home.css';

// const Home = () => {
//   const navigate = useNavigate();
//   const [isPageClickEnabled, setIsPageClickEnabled] = useState(false);
//   const [showMenu, setShowMenu] = useState(false);
//   const menuTimeoutRef = useRef(null);

//   useEffect(() => {
//     menuTimeoutRef.current = setTimeout(() => {
//       navigate('/menu');
//     }, 3000);

//     return () => {
//       if (menuTimeoutRef.current) {
//         clearTimeout(menuTimeoutRef.current);
//       }
//     };
//   }, [navigate]);

//   const handleTitleClick = (e) => {
//     e.stopPropagation();
    
//     if (menuTimeoutRef.current) {
//       clearTimeout(menuTimeoutRef.current);
//       menuTimeoutRef.current = null;
//     }
    
//     navigate('/menu');
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
//         <span className="title-home-desktop-text">ESTUDIO INES URIBE</span>
//       </h1>
//     </div>
//   );
// };

// export default Home;


import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Header3 from '../../components/header/Header3';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [isPageClickEnabled, setIsPageClickEnabled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuTimeoutRef = useRef(null);

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

      <div className='header-main'>
                <h1>ESTUDIO INES URIBE</h1>
      </div>
      {/* <Header3 /> */}
    </div>
  );
};

export default Home;