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
          <img src={'../../../images/lugares.PNG'} alt={'garage'} className='img' /> 
        </div>
        <div></div>

        <div className="greenSquare">
          <div className="mapa-h2">Libre
            <div className="redSquare">
              <div className="mapa-h2">Ocupado</div>
              <div className="purpleSquare">
                <div className="mapa-h2">Reservado</div>
              </div>          
            </div>
          </div>
          
        </div>
        
        <div className="mapa">
          <div className="nav-btn">
            {button ? (
              <Link to='/mapas' className="btn-link">
                <Button buttonStyle='btn--outline'>
                  Regresar
                </Button>
              </Link>
            ) : (
              <Link to='/mapas' className="btn-link">
                <Button buttonStyle='btn--outline'
                        buttonSize='btn--mobile'>
                  Regresar
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