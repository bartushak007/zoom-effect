import React, { useState } from 'react';
import ZoomArea from './ZoomArea';
import GalleryArea from './GalleryArea';
import PropTypes from 'prop-types';

const ZoomGallery = ({ images }) => {
  const [ activeSlide, setActiveSlide ] = useState(images[0]);

  const changeSlide = (slide) => {
    setActiveSlide(slide);
  };

  return (
    <>
      <ZoomArea 
        src={activeSlide.src} 
        alt={activeSlide.alt} 
      />
      <GalleryArea 
        changeSlide={changeSlide}
        images={images.filter(image => image !== activeSlide)} 
      />
    </>
  )
}

ZoomGallery.propTypes = {
  images: PropTypes.array.isRequired,  
};

export default ZoomGallery;