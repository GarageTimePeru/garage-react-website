import React, { useState, useEffect } from 'react';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import './Mapa.css';
import Navbar from '../../Navbar';

function Mapa() {
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
    
      useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return (
          window.removeEventListener('resize', showButton)
        );
      }, []);

    window.addEventListener('resize',showButton);

  return (
    <>
      <Navbar/>
      <div className="backgroundMapa">
        <div className='imgMapa'>
          <img src={'../../../images/garage.PNG'} alt={'garage'} className='img' /> 
        </div>

        <div className="mapa">
          <div className="nav-btn">
            {button ? (
              <Link to='/mapa-lugares' className="btn-link">
                <Button buttonStyle='btn--outline'>
                  Lugares
                </Button>
              </Link>
            ) : (
              <Link to='/mapa-lugares' className="btn-link">
                <Button buttonStyle='btn--outline'
                        buttonSize='btn--mobile'>
                  Lugares
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Mapa;