import React from 'react';
import './scrollbutton.scss';

const ScrollButton = () => {
    const clickHandle = () => {
      document.body.scrollIntoView({ behavior: 'smooth'});
    }
    return(
      <div 
        className="componentcontainer-scrollbutton" id="scrTop" onClick={clickHandle}>
        <i className="fa fa-angle-up" id="scrUp" aria-hidden="true"></i>
      </div>
    )
  }

export default ScrollButton;
