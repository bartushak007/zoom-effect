import React, { useState } from 'react';
import './App.css';
import ZoomGallery from './components/ZoomGallery';

const images = [
  {
    src:'/images/1.jpg',
    alt:'',
  },
  {
    src:'/images/2.jpg',
    alt:'',
  },
  {
    src:'/images/3.jpg',
    alt:'',
  },
  {
    src:'/images/4.jpg',
    alt:'',
  },
]

const App = () => {   
  const [ activeSlide, setActiveSlide ] = useState(images[0]);  
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [areaWidth, setAreaWidth] = useState(0);
  const [areaHeight, setAreaHeight] = useState(0);
  const [loupeSize, setLoupeSize] = useState();  
  const [loupeHide, setLoupeHide] = useState();
  const [borderR , setBorderR  ] = useState(50); 
  
  const changeSlide = (slide) => {
    setActiveSlide(slide);
  };

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

  const loupeShape = 'circle'; //or 'square' 

  return (
    <ZoomGallery>      
      <ZoomGallery.ZoomArea 
        {...{
          activeSlide,
          handleMouseMove,
          handleMouseOver,
          handleMouseClick,          
        }}
      >
        <ZoomGallery.ZoomArea.Loupe 
          {...{ 
            mouseX, 
            mouseY, 
            areaWidth, 
            activeSlide, 
            areaHeight, 
            loupeSize, 
            loupeHide, 
            borderR,
            loupeShape,
            setBorderR 
          }}
        />
      </ZoomGallery.ZoomArea> 
      <ZoomGallery.GalleryArea 
        changeSlide={changeSlide}
        images={images.filter(image => image !== activeSlide)} 
      /> 
    </ZoomGallery>
  );  
}

export default App;
