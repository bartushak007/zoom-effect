import React from 'react';
import Image from './Image';
import PropTypes from 'prop-types';

const GalleryArea = ({ images, changeSlide }) => {
  return (
    <div className='gallery-area'>
      {images.map(image => (
          <div className="gallery-area__container" key={image.src} onClick={() => changeSlide(image)}>
            <Image className='gallery-area__image' {...image} />
          </div>
      ))}
    </div>
  )
}

GalleryArea.propTypes = {  
  images: PropTypes.array.isRequired,
};

export default GalleryArea;