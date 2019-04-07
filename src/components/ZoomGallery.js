import React from 'react';
import ZoomArea from './ZoomArea';
import GalleryArea from './GalleryArea';
// import PropTypes from 'prop-types';

const ZoomGallery = ({ 
  children,  
  }) => {    
  return (    
    <>      
      {children}
    </>
  )
}

ZoomGallery.GalleryArea = GalleryArea;
ZoomGallery.ZoomArea = ZoomArea;

// ZoomGallery.propTypes = {
//   images: PropTypes.array.isRequired,  
// };

export default ZoomGallery;