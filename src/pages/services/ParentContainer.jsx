// import { useState, useEffect } from 'react';
// import { useMediaQuery } from 'react-responsive';
// import { useSearchParams } from 'react-router-dom';
// import { useLanguage } from '../../components/contexts/LanguageContext';
// import Curtain from './Curtain';
// import AnimatedTitle from './AnimatedTitle';
// import Services from './Services';
// import ServicesPhone from './ServicesPhone';

// function ParentContainer({ openCategoryModal, initialTab = null  }) {
//     const { t } = useLanguage();
//     const [searchParams] = useSearchParams();
//     const serviceParam = searchParams.get('service');

//     const skipAnimation = !!serviceParam || initialTab === 'Services';

//     const [startTitleAnimation, setStartTitleAnimation] = useState(!!serviceParam);
//     const [startCurtainFade, setStartCurtainFade] = useState(!!serviceParam);
//     const [showServicesTitle, setShowServicesTitle] = useState(!!serviceParam);
//     const [isAnimating, setIsAnimating] = useState(!serviceParam);

//     const isMobile = useMediaQuery({ maxWidth: 768 });

//     useEffect(() => {
//         if (isAnimating) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'auto';
//         }
//         return () => {
//             document.body.style.overflow = 'auto';
//         };
//     }, [isAnimating]);

//     const handleAnimationStart = () => setStartTitleAnimation(true);

//     const handleTitleReachedPosition = () => {
//         setStartCurtainFade(true);
//         setShowServicesTitle(true);
//         setTimeout(() => setIsAnimating(false), 1000);
//     };

//     return (
//         <div className="parent-container">
//             <Curtain onAnimationStart={handleAnimationStart} startFade={startCurtainFade} />
//             <AnimatedTitle t={t} startAnimation={startTitleAnimation} onReachedPosition={handleTitleReachedPosition} />
//             {isMobile ? (
//                 // <ServicesPhone showTitle={showServicesTitle} openCategoryModal={openCategoryModal} />
//                 <ServicesPhone 
//                 showTitle={showServicesTitle} 
//                 openCategoryModal={openCategoryModal} 
//                 initialService={serviceParam}
//                 initialTab={initialTab}  
//                  />
//             ) : (
//                 <Services
//                 showTitle={showServicesTitle} 
//                 initialService={serviceParam} 
//                 initialTab={initialTab}  
//                 />
//             )}
//         </div>
//     );
// }

// export default ParentContainer;




import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../../components/contexts/LanguageContext';
import Curtain from './Curtain';
import AnimatedTitle from './AnimatedTitle';
import Services from './Services';
import ServicesPhone from './ServicesPhone';

const INTRO_KEY = 'servicesIntroSeen';

const hasSeenIntro = () => {
    try {
        return sessionStorage.getItem(INTRO_KEY) === '1';
    } catch {
        return false;
    }
};

const markIntroSeen = () => {
    try {
        sessionStorage.setItem(INTRO_KEY, '1');
    } catch {}
};

function ParentContainer({ openCategoryModal, initialTab = null }) {
    const { t } = useLanguage();
    const [searchParams] = useSearchParams();
    const serviceParam = searchParams.get('service');

    // Se calcula una sola vez al montar
    const [skipAnimation] = useState(() => !!serviceParam || hasSeenIntro());

    const [startTitleAnimation, setStartTitleAnimation] = useState(skipAnimation);
    const [startCurtainFade, setStartCurtainFade] = useState(skipAnimation);
    const [showServicesTitle, setShowServicesTitle] = useState(skipAnimation);
    const [isAnimating, setIsAnimating] = useState(!skipAnimation);

    const isMobile = useMediaQuery({ maxWidth: 768 });

    useEffect(() => {
        document.body.style.overflow = isAnimating ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isAnimating]);

    const handleAnimationStart = () => setStartTitleAnimation(true);

    const handleTitleReachedPosition = () => {
        setStartCurtainFade(true);
        setShowServicesTitle(true);
        markIntroSeen();
        setTimeout(() => setIsAnimating(false), 1000);
    };

    return (
        <div className="parent-container">
            {!skipAnimation && (
                <>
                    <Curtain onAnimationStart={handleAnimationStart} startFade={startCurtainFade} />
                    <AnimatedTitle t={t} startAnimation={startTitleAnimation} onReachedPosition={handleTitleReachedPosition} />
                </>
            )}

            {isMobile ? (
                <ServicesPhone
                    showTitle={showServicesTitle}
                    openCategoryModal={openCategoryModal}
                    initialService={serviceParam}
                    initialTab={initialTab}
                />
            ) : (
                <Services
                    showTitle={showServicesTitle}
                    initialService={serviceParam}
                    initialTab={initialTab}
                />
            )}
        </div>
    );
}

export default ParentContainer;