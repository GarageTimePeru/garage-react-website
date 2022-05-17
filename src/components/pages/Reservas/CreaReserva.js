import React, { useState, useEffect } from 'react';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import './Reserva.css';
import Navbar from '../../Navbar';

const CrearReserva = () => {
  const [owner, setOwner] = useState('');
  const [placa, setPlaca] = useState('');
  const [lugar, setLugar] = useState('');

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
      <div className="backgroundCrearReserva">
        <div className="reserva">
          <h2>INGRESA RESERVA</h2>
          <form>
            <label>Nombre Completo:</label>
            <input 
              type="text" 
              required 
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            />
            <label>Placa del vehículo:</label>
            <input 
              type="text"
              required
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
            ></input>
            <label>Lugar de Aparcamiento:</label>
            <select
              value={lugar}
              onChange={(e) => setLugar(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            {/* Al confirmar: guardar datos y regresar a la page de lugares. */}
            <div className="nav-btn">
              {button ? (
                <Link to='/reservas' className="btn-link">
                  <Button buttonStyle='btn--outline'>
                    Confirmar
                  </Button>
                </Link>
              ) : (
                <Link to='/reservas' className="btn-link">
                  <Button buttonStyle='btn--outline'
                          buttonSize='btn--mobile'>
                    Confirmar
                  </Button>
                </Link>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CrearReserva;