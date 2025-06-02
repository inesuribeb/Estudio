import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './HomePhone.css';

const HomePhone = () => {
  const navigate = useNavigate();
  const [isPageClickEnabled, setIsPageClickEnabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageClickEnabled(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handlePageClick = (e) => {
    if (isPageClickEnabled && !e.target.closest('.title')) {
      navigate('/art');
    }
  };

  const handleTitleClick = (e) => {
    e.stopPropagation();
    navigate('/art');
  };

  return (
    <div 
      className="home-container-phone"
      onClick={handlePageClick}
      style={{ cursor: isPageClickEnabled ? 'pointer' : 'default' }}
    >
      <h1 
        className="title-home-phone"
        // onClick={handleTitleClick}
      >
        ESTUDIø<br/>INES URIBE
      </h1>
    </div>
  );
};

export default HomePhone;