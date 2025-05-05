import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import './LazyImage.css'

function LazyImage({ src, alt }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div 
      ref={ref} 
      className="image-container"
      style={{ 
        backgroundColor: '#e0e0e0',
        position: 'relative',
        paddingBottom: '100%' 
      }}
    >
      {inView && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${isLoaded ? 'loaded' : ''}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      )}
    </div>
  );
}

export default LazyImage;