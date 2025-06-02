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

        // Eventos que consideramos como actividad del usuario
        const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
        
        // Agregar event listeners
        events.forEach(event => {
            document.addEventListener(event, updateActivity, true);
        });

        // Timer para verificar inactividad cada segundo
        const interval = setInterval(() => {
            const timeSinceLastActivity = Date.now() - lastActivity;
            if (timeSinceLastActivity >= 40000) { // 40 segundos
                setIsVisible(true);
            }
        }, 1000);

        return () => {
            // Limpiar event listeners
            events.forEach(event => {
                document.removeEventListener(event, updateActivity, true);
            });
            clearInterval(interval);
        };
    }, [lastActivity]);

    // Crear los círculos (5 columnas x 4 filas = 20 círculos)
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