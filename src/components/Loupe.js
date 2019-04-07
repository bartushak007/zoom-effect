import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
const Loupe = ({ 
  activeSlide, 
  mouseX, 
  mouseY, 
  areaHeight, 
  areaWidth, 
  loupeSize, 
  loupeHide,
  borderR, 
  setBorderR,
  loupeShape 
}) => {
  useEffect((didMount) => loupeShape && setBorderR( loupeShape === 'circle' ? 50 : 3), []);

  const calcPosition = (value, position) => {
    const percentagePosition = (100 / value) * position;    
    const divideCoeficient = (value / (loupeSize + loupeSize / (value / (loupeSize * (loupeSize / 161.8))))); 

    return  (percentagePosition < 50) ? 
      percentagePosition - (50 - percentagePosition) / divideCoeficient : 
      percentagePosition + (percentagePosition - 50) / divideCoeficient;
  };  
   
  return (
    <div className="gallery-area__loupe-border"
      style={{ 
        left: mouseX + "px",
        top: mouseY + "px",
        width: loupeSize + "px",
        height: loupeSize + "px",
        display: loupeHide,
        borderRadius: borderR +'%'         
      }}      
    >
      <div 
        style={{ 
          backgroundSize: `${areaWidth}px ${areaHeight}px`,          
          backgroundPosition: `${calcPosition(areaWidth, mouseX)}% ${calcPosition(areaHeight, mouseY)}%`,
          backgroundImage: `url(${activeSlide.src})` 
        }} 
        className="gallery-area__loupe"
      >            
      </div>
    </div>
  )
}

Loupe.propTypes = {  
  mouseX: PropTypes.number.isRequired,
  mouseY: PropTypes.number.isRequired,
  // src: PropTypes.string,
  areaHeight: PropTypes.number,
  areaWidth: PropTypes.number,
  loupeSize: PropTypes.number,
  loupeHide: PropTypes.string,   
  borderR: PropTypes.number   
};

export default Loupe;