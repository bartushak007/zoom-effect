import React from 'react';
import './App.css';
import ZoomGallery from './components/ZoomGallery';

const data = [
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
  return (
    <ZoomGallery images={data}/>
  );
  
}

export default App;
