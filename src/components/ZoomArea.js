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
  mouseX,    
  mouseY,
  areaWidth,
  areaHeight,
  loupeSize,
  loupeHide,
  borderR,
  setBorderR,
  loupeShape
  }) => {  

  return (    
    <div onClick={handleMouseClick} onMouseMove={handleMouseMove} onMouseOut={handleMouseOver} className="zoom-area" >
      <Image className="zoom-area__image" {...{ src, alt }} />
      {/* <Loupe {...{ mouseX, mouseY, src, areaWidth, areaHeight, loupeSize, loupeHide, borderR }} /> */}
      {children}
    </div>    
  )
}
ZoomArea.Loupe= Loupe;

ZoomArea.propTypes = {
  activeSlide: PropTypes.objectOf(PropTypes.string),  
};

export default ZoomArea;