import React, { useEffect, useRef, useState } from 'react';
import './ImageComponent.css'

function ImageComponent({ img, handleImageClick }) {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imageRef}
      src={img.src}
      alt={img.alt}
      loading="lazy"
      onClick={() => handleImageClick(img)}
      className={`fade-image ${isVisible ? 'visible' : ''}`}
    />
  );
}

export default ImageComponent;