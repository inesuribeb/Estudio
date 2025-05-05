import React, { useRef, useState, useEffect } from 'react';
import './PortfolioCarousel.css';

function PortfolioCarousel({ children }) {
    const trackRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            {
                threshold: 0.1
            }
        );
        
        if (trackRef.current) {
            observer.observe(trackRef.current);
        }
        
        return () => {
            if (trackRef.current) {
                observer.unobserve(trackRef.current);
            }
        };
    }, []);
    
    return (
        <div className="carousel-portfolio-mobile">
            <div 
                className={`carousel-track-mobile ${isVisible ? 'is-visible' : ''}`}
                ref={trackRef}
            >
                {children}
                {children}
            </div>
        </div>
    );
}

export default PortfolioCarousel;