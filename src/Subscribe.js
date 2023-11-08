import React, { useState, useEffect } from 'react';
import brand from './subscribe.webp'; 
import './Subscribe.css'
import frame from './Frame.webp'
import button from './button.webp'
function Subscribe() {
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);
  return (
    <div className='subscribe'>
        <div className='subscribe__card'>
      <div className='brand'>
        <img src={brand} alt="Brand" />
      </div>
      <div className='subscribe__info'>
        <h4>Stay up to date with latest crypto news and events. Subscribe to ur new letter</h4>
        <div className='email'>
            <input type='email' placeholder='Enter your email address'/>
            <button>Subscribe</button>
        </div>
      </div>
      </div>
      {isMobile && (
        <div className='mobile__view'>
          <img src={frame} alt='Frame' className='frame' />
          <h4>Track your portfolio & taxes</h4>
          <p>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
          
          <div className='button__icon'><button>Sign up at KoinX for free </button>
          <img className='button' src={button} alt='' /></div>
        </div>
      )}
    </div>
  );
}

export default Subscribe;
