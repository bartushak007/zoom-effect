import React, { useState } from 'react';
import Image from './Image';
import Loupe from './Loupe';
import PropTypes from 'prop-types';

const ZoomArea = props => {
  const { src, alt } = props;

  const [mouseX, setMouseX] = useState(110);
  const [mouseY, setMouseY] = useState(110);
  const [areaWidth, setAreaWidth] = useState(110);
  const [areaHeight, setAreaHeight] = useState(110);
  const [loupeSize, setLoupeSize] = useState();  
  const [loupeHide, setLoupeHide] = useState();
  const [borderR , setBorderR  ] = useState(50);  

  const handleMouseMove = (event) => {
    const { offsetX: x } = event.nativeEvent;
    const { offsetY: y } = event.nativeEvent;
    const {width, height} = event.target;  

    setMouseX(x);
    setMouseY(y);
    setAreaWidth(width);
    setAreaHeight(height);
    setLoupeSize(areaWidth/4);
    setLoupeHide('block');    
  };

  const handleMouseOver = () => {
    setLoupeHide('none');    
  }

  const handleMouseClick = () => {
    setBorderR(borderR === 50 ? 3 : 50);    
  }

  return (
    <div>
      <div onClick={handleMouseClick} onMouseMove={handleMouseMove} onMouseOut={handleMouseOver} className="zoom-area" >
        <Image className="zoom-area__image" {...{ src, alt }} />
        <Loupe {...{ mouseX, mouseY, src, areaWidth, areaHeight, loupeSize, loupeHide, borderR }} />
      </div>
    </div>
  )
}

ZoomArea.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default ZoomArea;