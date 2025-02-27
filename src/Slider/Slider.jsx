import React, { useState } from 'react';
import './slider.css';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { SliderItems } from './SliderItems';
import { Link } from 'react-router-dom';




function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = SliderItems.length; 

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : SliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < SliderItems.length - 1 ? slideIndex + 1 : 0);
    }

  };

  return (
    
    <div className="slider-container">
      
      <div className='arrow left' onClick={() => handleClick('left')}>
        <IoMdArrowDropleft className='icon' />
      </div>

     
      <div className="slider-wrapper" style={{ transform: `translateX(${slideIndex* -100}vw)` }}>
        {SliderItems.map((item) => (
          <div key={item.id} className="slide" style={{ backgroundColor: `#${item.bg}` }}>
            <div className='img-container'>
              <img src={item.img} alt="" className='img' />
            </div>
            <div className="info-container">
              <h2 className="title">{item.title}</h2>
              <p className="desc">{item.desc}</p>
            <Link to="/Products"> <button className="button">SHOP NOW</button></Link>  
            </div>
          </div>
        ))}
        
      </div>

      
      <div className='arrow right' onClick={() => handleClick('right')}>
        <IoMdArrowDropright className='icon' />
      </div>
    </div>
    );
    }

export default Slider;