import { useState } from 'react';
import { useLanguage } from '../../components/contexts/LanguageContext';
import Curtain from './Curtain';
import AnimatedTitle from './AnimatedTitle';
import Services from './Services';

function ParentContainer() {
    const { t } = useLanguage();
    const [startTitleAnimation, setStartTitleAnimation] = useState(false);
    const [startCurtainFade, setStartCurtainFade] = useState(false);
    const [showServicesTitle, setShowServicesTitle] = useState(false);

    const handleAnimationStart = () => {
        setStartTitleAnimation(true);
    };

    const handleTitleReachedPosition = () => {
        setStartCurtainFade(true);
        setShowServicesTitle(true);
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