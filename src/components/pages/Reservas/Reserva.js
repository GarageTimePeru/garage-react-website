import React, { useState, useEffect } from 'react';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import './Reserva.css';
import Navbar from '../../Navbar';

const Create = () => {
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
    <div className="backgroundReserva">
      <div className="reservas">
        <div className="nav-btn">
          {button ? (
            <Link to='/crear-reserva' className="btn-link">
              <Button buttonStyle='btn--outline'>
                1
              </Button>
              <div className='text-h1'>Discapacitados</div>
            </Link>
          ) : (
            <Link to='/crear-reserva' className="btn-link">
              <Button buttonStyle='btn--outline'
                      buttonSize='btn--mobile'>
                1
              </Button>
              <div className='text-h1'>Discapacitados</div>
            </Link>
          )}
          {button ? (
            <Link to='/crear-reserva' className="btn-link">
              <Button buttonStyle='btn--outline'>
                2
              </Button>
              <div className='text-h1'>Discapacitados</div>
            </Link>        
          ) : (
            <Link to='/crear-reserva' className="btn-link">
              <Button buttonStyle='btn--outline'
                      buttonSize='btn--mobile'>
                2
              </Button>
              <div className='text-h1'>Discapacitados</div>
            </Link>
          )}
          {button ? (
            <Link to='/crear-reserva' className="btn-link">
              <Button buttonStyle='btn--outline'>
                3
              </Button>
              <div className='text-h1'>Disponible</div>
            </Link>
          ) : (
            <Link to='/crear-reserva' className="btn-link">
              <Button buttonStyle='btn--outline'
                      buttonSize='btn--mobile'>
                3
              </Button>
              <div className='text-h1'>Disponible</div>
            </Link>
          )}
          {button ? (
            <Link to='/crear-reserva' className="btn-link">
              <Button buttonStyle='btn--outline'>
                4
              </Button>
              <div className='text-h1'>Disponible</div>
            </Link>
          ) : (
            <Link to='/crear-reserva' className="btn-link">
              <Button buttonStyle='btn--outline'
                      buttonSize='btn--mobile'>
                4
              </Button>
              <div className='text-h1'>Disponible</div>
            </Link>
          )}
          {button ? (
            <Link to='/crear-reserva' className="btn-link">
              <Button buttonStyle='btn--outline'>
                5
              </Button>
              <div className='text-h1'>José Perez</div>
            </Link>
          ) : (
            <Link to='/crear-reserva' className="btn-link">
              <Button buttonStyle='btn--outline'
                      buttonSize='btn--mobile'>
                5
              </Button>
              <div className='text-h1'>José Perez</div>
            </Link>
          )}
          {button ? (
            <Link to='/crear-reserva' className="btn-link">
              <Button buttonStyle='btn--outline'>
                6
              </Button>
              <div className='text-h1'>Disponible</div>
            </Link>
          ) : (
            <Link to='/crear-reserva' className="btn-link">
              <Button buttonStyle='btn--outline'
                      buttonSize='btn--mobile'>
                6
              </Button>
              <div className='text-h1'>Disponible</div>
            </Link>
          )}
          {button ? (
            <Link to='/crear-reserva' className="btn-link">
              <Button buttonStyle='btn--outline'>
                7
              </Button>
              <div className='text-h1'>Reservado</div>
            </Link>
          ) : (
            <Link to='/crear-reserva' className="btn-link">
              <Button buttonStyle='btn--outline'
                      buttonSize='btn--mobile'>
                7
              </Button>
              <div className='text-h1'>Reservado</div>
            </Link>
          )}
          {button ? (
            <Link to='/crear-reserva' className="btn-link">
              <Button buttonStyle='btn--outline'>
                8
              </Button>
              <div className='text-h1'>Luis Gonzales</div>
            </Link>
          ) : (
            <Link to='/crear-reserva' className="btn-link">
              <Button buttonStyle='btn--outline'
                      buttonSize='btn--mobile'>
                8
              </Button>
              <div className='text-h1'>Luis Gonzales</div>
            </Link>
          )}
          {button ? (
            <Link to='/crear-reserva' className="btn-link">
              <Button buttonStyle='btn--outline'>
                9
              </Button>
              <div className='text-h1'>Disponible</div>
            </Link>
          ) : (
            <Link to='/crear-reserva' className="btn-link">
              <Button buttonStyle='btn--outline'
                      buttonSize='btn--mobile'>
                9
              </Button>
              <div className='text-h1'>Disponible</div>
            </Link>
          )}
          {button ? (
            <Link to='/crear-reserva' className="btn-link">
              <Button buttonStyle='btn--outline'>
                10
              </Button>
              <div className='text-h1'>Reservado</div>
            </Link>
          ) : (
            <Link to='/crear-reserva' className="btn-link">
              <Button buttonStyle='btn--outline'
                      buttonSize='btn--mobile'>
                10
              </Button>
              <div className='text-h1'>Reservado</div>
            </Link>
          )}

          {button ? (
            <Link to='/reservas' className="btn-link">
              <Button buttonStyle='btn--outline'>
                Actualizar
              </Button>
            </Link>
          ) : (
            <Link to='/reservas' className="btn-link">
              <Button buttonStyle='btn--outline'
                      buttonSize='btn--mobile'>
                Actualizar
              </Button>
            </Link>
          )}
        </div>
      </div>
      </div>
    </>
  );
}
 
export default Create;