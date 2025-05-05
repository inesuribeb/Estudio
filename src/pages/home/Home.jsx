// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/art');
//   };

//   return (
//     <div className="home-container">
//       <h1 
//         className="title"
//         onClick={handleClick}
//       >
//         <span className="title-text">Hello!</span>
//       </h1>
//     </div>
//   );
// };

// export default Home;

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [isPageClickEnabled, setIsPageClickEnabled] = useState(false);

  useEffect(() => {
    // Habilitar el clic en toda la página después de 3 segundos
    const timer = setTimeout(() => {
      setIsPageClickEnabled(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // const handlePageClick = (e) => {
  //   if (isPageClickEnabled && !e.target.closest('.title')) {
  //     navigate('/art');
  //   }
  // };

  // const handleTitleClick = (e) => {
  //   e.stopPropagation(); 
  //   navigate('/art');
  // };

  const handlePageClick = (e) => {
    if (isPageClickEnabled && !e.target.closest('.title')) {
      navigate('/art', { state: { from: '/' } });
    }
  };
  
  const handleTitleClick = (e) => {
    e.stopPropagation();
    navigate('/art', { state: { from: '/' } });
  };

  return (
    <div 
      className="home-container"
      onClick={handlePageClick}
      style={{ cursor: isPageClickEnabled ? 'pointer' : 'default' }}
    >
      <h1 
        className="title-home-desktop"
        onClick={handleTitleClick}
      >
        <span className="title-home-desktop-text">INES URIBE</span>
      </h1>
    </div>
  );
};

export default Home;