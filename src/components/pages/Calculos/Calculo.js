import React, { useState, useEffect } from 'react';
import './Calculo.css';
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
      <div className="backgroundCalculo">
        <div className="calculo">
          <div className="calculo-h2">ESPACIOS DE COCHERA</div>
          <table>
              <thead>
              <tr>
                  <th className="calculo-h1">Fecha</th>
                  <th className="calculo-h1">Nombre</th>
                  <th className="calculo-h1">Horas</th>
                  <th className="calculo-h1">Costo S/.</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td>23/04/22</td>
                  <td>José Perez</td>
                  <td>1</td>
                  <td>3.5</td>
              </tr>
              <tr>
                  <td>23/04/22</td>
                  <td>Luis Gonzales</td>
                  <td>2</td>
                  <td>7</td>
              </tr>
              </tbody>
          </table>
          <div className="calculo-h2">SERVICIOS</div>
          <table>
              <thead>
              <tr>
                  <th className="calculo-h1">Fecha</th>
                  <th className="calculo-h1">Nombre</th>
                  <th className="calculo-h1">Servicio</th>
                  <th className="calculo-h1">Costo S/.</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td>23/04/22</td>
                  <td>José Perez</td>
                  <td>Lavado</td>
                  <td>10</td>
              </tr>
              <tr>
                  <td>23/04/22</td>
                  <td>Luis Gonzales</td>
                  <td>Lavado</td>
                  <td>10</td>
              </tr>
              </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
 
export default Create;