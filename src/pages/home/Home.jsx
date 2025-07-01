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
                <h1>ESTUDIø INES URIBE</h1>
      </div>
    </div>
  );
};

export default Home;