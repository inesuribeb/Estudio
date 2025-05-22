// import { useState } from 'react';
// import { useLanguage } from '../../components/contexts/LanguageContext';
// import Curtain from './Curtain';
// import AnimatedTitle from './AnimatedTitle';
// import Services from './Services';

// function ParentContainer() {
//     const { t } = useLanguage();
//     const [startTitleAnimation, setStartTitleAnimation] = useState(false);
//     const [startCurtainFade, setStartCurtainFade] = useState(false);
//     const [showServicesTitle, setShowServicesTitle] = useState(false);

//     const handleAnimationStart = () => {
//         setStartTitleAnimation(true);
//     };

//     const handleTitleReachedPosition = () => {
//         setStartCurtainFade(true);
//         setShowServicesTitle(true);
//     };

//     return (
//         <div className="parent-container">
//             <Curtain 
//                 onAnimationStart={handleAnimationStart}
//                 startFade={startCurtainFade}
//             />
            
//             <AnimatedTitle 
//                 t={t} 
//                 startAnimation={startTitleAnimation}
//                 onReachedPosition={handleTitleReachedPosition}
//             />
            
//             <Services showTitle={showServicesTitle} />
//         </div>
//     );
// }

// export default ParentContainer;


// import { useState, useEffect } from 'react';
// import { useLanguage } from '../../components/contexts/LanguageContext';
// import Curtain from './Curtain';
// import AnimatedTitle from './AnimatedTitle';
// import Services from './Services';

// console.log('FILE LOADED'); 

// function ParentContainer() {
//     console.log('COMPONENT RENDER'); 
    
//     const { t } = useLanguage();
//     const [startTitleAnimation, setStartTitleAnimation] = useState(false);
//     const [startCurtainFade, setStartCurtainFade] = useState(false);
//     const [showServicesTitle, setShowServicesTitle] = useState(false);

//     useEffect(() => {
//         console.log('USEEFFECT RUNNING');
//         document.body.style.overflow = 'hidden';
        
//         setTimeout(() => {
//             console.log('UNBLOCKING SCROLL');
//             document.body.style.overflow = 'auto';
//         }, 3000);
//     }, []);

//     const handleAnimationStart = () => {
//         setStartTitleAnimation(true);
//     };

//     const handleTitleReachedPosition = () => {
//         setStartCurtainFade(true);
//         setShowServicesTitle(true);
//     };

//     return (
//         <div className="parent-container">
//             <Curtain 
//                 onAnimationStart={handleAnimationStart}
//                 startFade={startCurtainFade}
//             />
            
//             <AnimatedTitle 
//                 t={t} 
//                 startAnimation={startTitleAnimation}
//                 onReachedPosition={handleTitleReachedPosition}
//             />
            
//             <Services showTitle={showServicesTitle} />
//         </div>
//     );
// }

// export default ParentContainer;


import { useState, useEffect } from 'react';
import { useLanguage } from '../../components/contexts/LanguageContext';
import Curtain from './Curtain';
import AnimatedTitle from './AnimatedTitle';
import Services from './Services';

function ParentContainer() {
    const { t } = useLanguage();
    const [startTitleAnimation, setStartTitleAnimation] = useState(false);
    const [startCurtainFade, setStartCurtainFade] = useState(false);
    const [showServicesTitle, setShowServicesTitle] = useState(false);
    const [isAnimating, setIsAnimating] = useState(true);

    // Bloquear scroll durante la animación
    useEffect(() => {
        if (isAnimating) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup al desmontar
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isAnimating]);

    const handleAnimationStart = () => {
        setStartTitleAnimation(true);
    };

    const handleTitleReachedPosition = () => {
        setStartCurtainFade(true);
        setShowServicesTitle(true);
        
        // Desbloquear scroll cuando termine la animación
        setTimeout(() => {
            setIsAnimating(false);
        }, 1000);

    };

    return (
        <div className="parent-container">
            <Curtain 
                onAnimationStart={handleAnimationStart}
                startFade={startCurtainFade}
            />
            
            <AnimatedTitle 
                t={t} 
                startAnimation={startTitleAnimation}
                onReachedPosition={handleTitleReachedPosition}
            />
            
            <Services showTitle={showServicesTitle} />
        </div>
    );
}

export default ParentContainer;