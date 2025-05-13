// Root.jsx modificado para ocultar footer en rutas de menú y portafolio

import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { LanguageProvider } from './components/contexts/LanguageContext';
import Header2 from './components/header/Header2';
import React, { useState, useEffect } from 'react';
import Contact from './pages/contact/Contact';
import Modal from './pages/art/Modal';
import Footer from './components/footer/Footer';
import './Root.css'

function Root() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [headerClosing, setHeaderClosing] = useState(false);
    const [isUserScrolling, setIsUserScrolling] = useState(false);
    const location = useLocation();

    // Verificar si estamos en una ruta de menú
    const isMenuRoute = location.pathname === '/menu' || location.pathname === '/main-menu';
    
    // Verificar si estamos en una ruta de portafolio
    const isPortfolioRoute = location.pathname === '/portfolio' || location.pathname === '/portafolio';
    
    // Verificar si debemos ocultar el footer (en rutas de menú o portafolio)
    const hideFooter = isMenuRoute || isPortfolioRoute;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [navigationHandlers, setNavigationHandlers] = useState({
        handleNext: () => { },
        handlePrevious: () => { }
    });

    useEffect(() => {
        if (isContactOpen) {
            let scrollTimeout;

            const handleScroll = () => {
                clearTimeout(scrollTimeout);
                setIsUserScrolling(true);

                scrollTimeout = setTimeout(() => {
                    setIsUserScrolling(false);
                    if (window.scrollY > 0) {
                        setIsContactOpen(false);
                    }
                }, 150);
            };

            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
                clearTimeout(scrollTimeout);
            };
        }
    }, [isContactOpen]);

    const handleContactClick = () => {
        if (isContactOpen) {
            setHeaderClosing(true);
            setTimeout(() => {
                setHeaderClosing(false);
                setIsContactOpen(false);
            }, 600);
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            setIsContactOpen(true);
        }
    };

    return (
        <LanguageProvider>
            <div className="root-container">
                <Contact
                    isOpen={isContactOpen}
                    onClose={() => setIsContactOpen(false)}
                    headerClosing={headerClosing}
                />

                <div className={`main-content ${isContactOpen && !isMenuRoute ? 'shifted' : ''}`}>
                    {!isMenuRoute && (
                        <Header2 onContactClick={handleContactClick} />
                    )}
                    <main className='outlet-desktop' key={location.pathname}>
                        <Outlet context={{
                            isModalOpen,
                            setIsModalOpen,
                            selectedImage,
                            setSelectedImage,
                            setNavigationHandlers
                        }} />
                    </main>
                </div>
                
                {/* Mostrar Footer solo si no estamos en una ruta de menú o portafolio */}
                {!hideFooter && (
                    <div className="fade-in" key={location.pathname}>
                        <Footer />
                    </div>
                )}

                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    image={selectedImage}
                    onNext={navigationHandlers.handleNext}
                    onPrevious={navigationHandlers.handlePrevious}
                />
            </div>
        </LanguageProvider>
    );
}

export default Root;

