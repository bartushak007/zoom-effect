import React from 'react';
import Image from './Image';
import Loupe from './Loupe';
import PropTypes from 'prop-types';

const ZoomArea = ({ 
  children,
  activeSlide: {src, alt},
  handleMouseClick,
  handleMouseMove,
  handleMouseOver,  
  }) => {  

  return (    
    <div onClick={handleMouseClick} onMouseMove={handleMouseMove} onMouseOut={handleMouseOver} className="zoom-area" >
      <Image className="zoom-area__image" {...{ src, alt }} />      
      {children}
    </div>    
  )
}
ZoomArea.Loupe= Loupe;

ZoomArea.propTypes = {
  activeSlide: PropTypes.objectOf(PropTypes.string),  
};

export default ZoomArea;