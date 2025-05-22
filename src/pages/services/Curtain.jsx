import { useState, useEffect } from 'react';
import './Curtain.css';

function Curtain({ onAnimationStart, startFade }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const showTimer = setTimeout(() => {
            onAnimationStart();
        }, 1000);

        return () => {
            clearTimeout(showTimer);
        };
    }, [onAnimationStart]);

    useEffect(() => {
        if (startFade) {
            const hideTimer = setTimeout(() => {
                setIsVisible(false);
            }, 300); 

            return () => clearTimeout(hideTimer);
        }
    }, [startFade]);

    if (!isVisible) return null;

    return (
        <div className={`curtain ${startFade ? 'fade-out' : ''}`}>
        </div>
    );
}

export default Curtain;
