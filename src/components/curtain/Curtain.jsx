import { useState, useEffect } from 'react';
import './Curtain.css';

function Curtain() {
    const [isVisible, setIsVisible] = useState(false);
    const [lastActivity, setLastActivity] = useState(Date.now());

    useEffect(() => {
        const updateActivity = () => {
            setLastActivity(Date.now());
            setIsVisible(false);
        };

        const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
        
        events.forEach(event => {
            document.addEventListener(event, updateActivity, true);
        });

        const interval = setInterval(() => {
            const timeSinceLastActivity = Date.now() - lastActivity;
            if (timeSinceLastActivity >= 40000) { 
                setIsVisible(true);
            }
        }, 1000);

        return () => {
            events.forEach(event => {
                document.removeEventListener(event, updateActivity, true);
            });
            clearInterval(interval);
        };
    }, [lastActivity]);

    const circles = [];
    for (let i = 0; i < 20; i++) {
        circles.push(<div key={i} className="curtain-circle" />);
    }

    if (!isVisible) return null;

    return (
        <div className="curtain-overlay">
            <div className="curtain-grid">
                {circles}
            </div>
        </div>
    );
}

export default Curtain;