import React from 'react';
import Image from './Image';
import PropTypes from 'prop-types';

const GalleryArea = ({ 
  children, 
  images, 
  changeSlide  
}) => {
  return (
    <div className='gallery-area'>
      {images.map(image => (
          <div className="gallery-area__container" key={image.src} onClick={() => changeSlide(image)}>
            <Image className='gallery-area__image' {...image} />
          </div>
      ))}
      {children}
    </div>
  )
}

GalleryArea.propTypes = {  
  images: PropTypes.array.isRequired,
};

export default GalleryArea;