import './PhotoDesign.css';
import React, { useState , useEffect} from 'react';
import { useLanguage } from '../../components/contexts/LanguageContext';
import { useOutletContext } from 'react-router-dom';
import ImageComponent from './ImageComponent';
import { column1Images, column2Images, column3Images, allImages, getImagesByCategory } from '../../utils/Pictures'
import Modal from './Modal';


function PhotoDesign() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { language, t } = useLanguage();

  const { 
    isModalOpen, 
    setIsModalOpen, 
    selectedImage, 
    setSelectedImage,
    setNavigationHandlers
  } = useOutletContext();

  const categories = {
    all: {
      es: "Todos",
      en: "All"
    },
    photography: {
      es: "Fotografía",
      en: "Photography"
    },
    design: {
      es: "Diseño",
      en: "Design"
    }
  };

  const filteredImages = getImagesByCategory(selectedCategory);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleNextImage = () => {
      if (!selectedImage) return;
      
      const currentImages = getImagesByCategory(selectedCategory);
      
      const currentOrder = selectedImage.order;
      const nextImage = currentImages.find(img => img.order > currentOrder) || currentImages[0];
      setSelectedImage(nextImage);
    };

    const handlePreviousImage = () => {
      if (!selectedImage) return;
      
      const currentImages = getImagesByCategory(selectedCategory);
      
      const currentOrder = selectedImage.order;
      const previousImages = currentImages.filter(img => img.order < currentOrder);
      const previousImage = previousImages.length > 0
        ? previousImages[previousImages.length - 1]
        : currentImages[currentImages.length - 1];
      setSelectedImage(previousImage);
    };

    setNavigationHandlers({
      handleNext: handleNextImage,
      handlePrevious: handlePreviousImage
    });
  }, [selectedCategory, selectedImage, setSelectedImage, setNavigationHandlers]);

  const renderContent = () => {
    if (selectedCategory === 'All') {
      return (
        <>
          <div className="column1">
            {filteredImages
              .filter(img => img.order <= 11)
              .map(img => (
                <ImageComponent 
                  key={img.order}
                  img={img}
                  handleImageClick={handleImageClick}
                />
              ))}
          </div>
          <div className="column2">
            {filteredImages
              .filter(img => img.order > 11 && img.order <= 24)
              .map(img => (
                <ImageComponent 
                  key={img.order}
                  img={img}
                  handleImageClick={handleImageClick}
                />
              ))}
          </div>
          <div className="column3">
            {filteredImages
              .filter(img => img.order > 24)
              .map(img => (
                <ImageComponent 
                  key={img.order}
                  img={img}
                  handleImageClick={handleImageClick}
                />
              ))}
          </div>
        </>
      );
    } else {
      const columns = [[], [], []];
      filteredImages.forEach((img, index) => {
        columns[index % 3].push(img);
      });

      return columns.map((column, i) => (
        <div key={i} className={`column${i + 1}`}>
          {column.map(img => (
            <ImageComponent 
              key={img.order}
              img={img}
              handleImageClick={handleImageClick}
            />
          ))}
        </div>
      ));
    }
  };

  return (
    <div className="photo-design-container">
      <div className="categories">
        <span
          className={selectedCategory === 'All' ? 'active' : ''}
          onClick={() => setSelectedCategory('All')}
        >
          {categories.all[language]}
        </span>
        <span className="separator">, </span>
        <span
          className={selectedCategory === 'Photography' ? 'active' : ''}
          onClick={() => setSelectedCategory('Photography')}
        >
          {categories.photography[language]}
        </span>
        <span className="separator">, </span>
        <span
          className={selectedCategory === 'Design' ? 'active' : ''}
          onClick={() => setSelectedCategory('Design')}
        >
          {categories.design[language]}
        </span>
      </div>
      <section className="contentContainer" key={selectedCategory}>
        {renderContent()}
      </section>
    </div>
  );
}

export default PhotoDesign;