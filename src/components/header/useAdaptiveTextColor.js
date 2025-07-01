import { useState, useEffect, useRef } from 'react';

/**
 * Hook personalizado para detectar si debe usarse texto claro u oscuro
 * basado en el color de fondo debajo de un elemento
 * 
 * @param {React.RefObject} targetRef - Referencia al elemento cuyo fondo queremos analizar
 * @param {number} offset - Píxeles adicionales debajo del elemento donde analizar el color (por defecto: 2)
 * @param {Object} options - Opciones adicionales
 * @param {string} options.lightColor - Color a usar sobre fondos oscuros (por defecto: 'white')
 * @param {string} options.darkColor - Color a usar sobre fondos claros (por defecto: 'black')
 * @param {boolean} options.debug - Mostrar información de depuración
 * @returns {string} El color adecuado para el texto ('lightColor' o 'darkColor')
 */
const useAdaptiveTextColor = (targetRef, offset = 2, options = {}) => {
    const {
        lightColor = 'white',
        darkColor = 'black',
        debug = false
    } = options;
    
    const [textColor, setTextColor] = useState(darkColor);
    const probeRef = useRef(null);
    
    useEffect(() => {
        const probe = document.createElement('div');
        probe.className = 'color-probe';
        probe.style.position = 'absolute';
        probe.style.width = '100%';
        probe.style.height = '5px';
        probe.style.pointerEvents = 'none';
        probe.style.zIndex = '-1';
        probe.style.backgroundColor = 'transparent';
        document.body.appendChild(probe);
        
        probeRef.current = probe;
        
        const shouldUseLightText = (r, g, b) => {
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            return luminance < 0.5;
        };
        
        const updateTextColor = () => {
            const element = targetRef.current;
            const probe = probeRef.current;
            
            if (!element || !probe) return;
            
            const rect = element.getBoundingClientRect();
            
            probe.style.top = `${rect.bottom + window.scrollY + offset}px`;
            probe.style.left = `${rect.left + window.scrollX}px`;
            probe.style.width = `${rect.width}px`;
            
            const samplePoints = 5;
            let darkBackgroundCount = 0;
            
            for (let i = 0; i < samplePoints; i++) {
                const x = rect.left + (rect.width / samplePoints) * i;
                const y = rect.bottom + offset;
                
                const elementAtPoint = document.elementFromPoint(x, y);
                
                if (elementAtPoint) {
                    const style = window.getComputedStyle(elementAtPoint);
                    const bgColor = style.backgroundColor;
                    const bgImage = style.backgroundImage;
                    
                    if (debug) {
                        console.log(`Punto ${i}: elemento=${elementAtPoint.tagName}, bgColor=${bgColor}, bgImage=${bgImage}`);
                    }
                    
                    if (bgImage && bgImage !== 'none' && !bgImage.includes('gradient')) {
                        darkBackgroundCount++;
                        continue;
                    }
                    
                    if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
                        const match = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
                        
                        if (match) {
                            const r = parseInt(match[1], 10);
                            const g = parseInt(match[2], 10);
                            const b = parseInt(match[3], 10);
                            
                            if (shouldUseLightText(r, g, b)) {
                                darkBackgroundCount++;
                            }
                        }
                    }
                }
            }
            
            if (darkBackgroundCount > samplePoints / 2) {
                if (textColor !== lightColor) {
                    setTextColor(lightColor);
                    if (debug) console.log('Cambiando a texto claro');
                }
            } else {
                if (textColor !== darkColor) {
                    setTextColor(darkColor);
                    if (debug) console.log('Cambiando a texto oscuro');
                }
            }
        };
        
        updateTextColor();
        
        const handleScroll = () => {
            requestAnimationFrame(updateTextColor);
        };
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', updateTextColor);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateTextColor);
            if (probeRef.current) {
                document.body.removeChild(probeRef.current);
            }
        };
    }, [targetRef, offset, lightColor, darkColor, debug]);
    
    return textColor;
};

export default useAdaptiveTextColor;