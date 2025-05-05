import { useRef, useEffect, useState } from 'react';
import './Carousel.css'

const Carousel = ({ children }) => {
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
        <div className="carousel">
            <div 
                className={`carousel-track ${isVisible ? 'is-visible' : ''}`}
                ref={trackRef}
            >
                {children}
                {children}
            </div>
        </div>
    );
};

export default Carousel;






