import { useState, useEffect } from 'react';
import './AnimatedTitle.css';

function AnimatedTitle({ t, startAnimation, onReachedPosition }) {
    const [phase, setPhase] = useState('centered');

    useEffect(() => {
        if (startAnimation) {
            setPhase('moving');

            setTimeout(() => {
                onReachedPosition && onReachedPosition();
                setPhase('integrated');
            }, 1000);
        }
    }, [startAnimation, onReachedPosition]);

    return (
        <h2 
            className={`animated-title ${phase}`}
            dangerouslySetInnerHTML={{ __html: t('description') }}
        />
    );
}

export default AnimatedTitle;
