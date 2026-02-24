// import React, { useRef, useState, useEffect } from 'react';
// import './PortfolioCarousel.css';

// function PortfolioCarousel({ children }) {
//     const trackRef = useRef(null);
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach(entry => {
//                     setIsVisible(entry.isIntersecting);
//                 });
//             },
//             {
//                 threshold: 0.1
//             }
//         );

//         if (trackRef.current) {
//             observer.observe(trackRef.current);
//         }

//         return () => {
//             if (trackRef.current) {
//                 observer.unobserve(trackRef.current);
//             }
//         };
//     }, []);

//     return (
//         <div className="carousel-portfolio-mobile">
//             <div 
//                 className={`carousel-track-mobile ${isVisible ? 'is-visible' : ''}`}
//                 ref={trackRef}
//             >
//                 {children}
//                 {children}
//             </div>
//         </div>
//     );
// }

// export default PortfolioCarousel;

import React, { useRef, useState, useEffect } from 'react';
import './PortfolioCarousel.css';

function PortfolioCarousel({ children }) {
    const trackRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [touchStartX, setTouchStartX] = useState(null);

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

    const [accumulatedDelay, setAccumulatedDelay] = useState(0);

    const onTouchStart = (e) => {
        setIsPaused(true);
        setTouchStartX(e.touches[0].clientX);
    };

    const onTouchMove = (e) => {
        if (!trackRef.current || touchStartX === null) return;
        const delta = touchStartX - e.touches[0].clientX;
        trackRef.current.style.animationDelay = `${(accumulatedDelay + delta) * -0.06}s`;
    };

    const onTouchEnd = (e) => {
        const delta = touchStartX - e.changedTouches[0].clientX;
        setAccumulatedDelay(prev => prev + delta);
        setTouchStartX(null);
    };

    return (
        <div
            className="carousel-portfolio-mobile"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div
                className={`carousel-track-mobile ${isVisible ? 'is-visible' : ''}`}
                ref={trackRef}
                style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
                {children}
                {children}
            </div>
        </div>
    );
}

export default PortfolioCarousel;