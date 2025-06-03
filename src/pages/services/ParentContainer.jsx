import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLanguage } from '../../components/contexts/LanguageContext';
import Curtain from './Curtain';
import AnimatedTitle from './AnimatedTitle';
import Services from './Services';
import ServicesPhone from './ServicesPhone';

function ParentContainer() {
    const { t } = useLanguage();
    const [startTitleAnimation, setStartTitleAnimation] = useState(false);
    const [startCurtainFade, setStartCurtainFade] = useState(false);
    const [showServicesTitle, setShowServicesTitle] = useState(false);
    const [isAnimating, setIsAnimating] = useState(true);
    
    const isMobile = useMediaQuery({ maxWidth: 768 });

    useEffect(() => {
        if (isAnimating) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

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
            
            {isMobile ? (
                <ServicesPhone showTitle={showServicesTitle} />
            ) : (
                <Services showTitle={showServicesTitle} />
            )}
        </div>
    );
}

export default ParentContainer;

