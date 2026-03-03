// import { useState, useEffect } from 'react';
// import './AnimatedTitle.css';

// function AnimatedTitle({ t, startAnimation, onReachedPosition }) {
//     const [phase, setPhase] = useState('centered');

//     useEffect(() => {
//         if (startAnimation) {
//             setPhase('moving');

//             setTimeout(() => {
//                 onReachedPosition && onReachedPosition();
//                 setPhase('integrated');
//             }, 1000);
//         }
//     }, [startAnimation, onReachedPosition]);

//     return (
//         <h2 
//             className={`animated-title ${phase}`}
//             dangerouslySetInnerHTML={{ __html: t('description') }}
//         />
//     );
// }

// export default AnimatedTitle;




// mayusculas minusculas
import { useState, useEffect } from 'react';
import './AnimatedTitle.css';

function AnimatedTitle({ t, startAnimation, onReachedPosition }) {
    const [phase, setPhase] = useState('centered');
    const [showCaps, setShowCaps] = useState(false);
    const [showEm, setShowEm] = useState(false);

    // Al montarse, anima las palabras durante el segundo que la curtain espera
    useEffect(() => {
        const capsTimer = setTimeout(() => setShowCaps(true), 100);
        const emTimer = setTimeout(() => setShowEm(true), 200);
        return () => {
            clearTimeout(capsTimer);
            clearTimeout(emTimer);
        };
    }, []);

    useEffect(() => {
        if (startAnimation) {
            setPhase('moving');
            setTimeout(() => {
                onReachedPosition && onReachedPosition();
                setPhase('integrated');
            }, 1000);
        }
    }, [startAnimation, onReachedPosition]);

    const parseDescription = (html) => {
        const parts = [];
        const regex = /<em>(.*?)<\/em>|([^<]+)/g;
        let match;
        while ((match = regex.exec(html)) !== null) {
            if (match[1] !== undefined) {
                parts.push({ type: 'em', text: match[1] });
            } else if (match[2]) {
                parts.push({ type: 'caps', text: match[2] });
            }
        }
        return parts;
    };

    const parts = parseDescription(t('description'));

    return (
        <h2 className={`animated-title ${phase}`}>
            {parts.map((part, i) => (
                <span
                    key={i}
                    style={{
                        fontStyle: part.type === 'em' ? 'italic' : 'normal',
                        opacity: part.type === 'caps' ? (showCaps ? 1 : 0) : (showEm ? 1 : 0),
                        transition: 'opacity 0.8s ease',
                        display: 'inline',
                    }}
                >
                    {part.text}
                </span>
            ))}
        </h2>
    );
}

export default AnimatedTitle;
