import React, { useState } from "react";
import './Init.css';
import Navbar from '../../Navbar';
import styled from 'styled-components';

const Checkbox = styled.input`
  margin: 0px 0px 5px 0px !important;
  cursor: pointer;
`;

const Create = () => {
  const [owner, setOwner] = useState('');
  const [garage, setGarage] = useState('');
  const [address, setAddress] = useState('');
  const [precio, setPrecio] = useState('');
  const [inicio, setInicio] = useState('');
  const [cierre, setCierre] = useState('');
  
  const [lavado, setLavado] = useState('');
  const [mantenimiento, setMantenimiento] = useState('');
  const [alineacion, setAlineacion] = useState('');
  const [reparacion, setReparacion] = useState('');

  return (
    <>
    <Navbar/>
    <div className="backgroundInit">
      <div className="create">
        <h2>INGRESA TUS DATOS</h2>
        <form>
          <label>Nombre Completo:</label>
          <input
            type="text" 
            required 
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
          <label>Nombre Garage:</label>
          <input
            type="text"
            required
            value={garage}
            onChange={(e) => setGarage(e.target.value)}
          />
          <label>Ubicación:</label>
          <textarea 
            required 
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label>Precio por hora:</label>
          <input
            type="text" 
            required 
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
          <label>Hora de Apertura:</label>
          <input
            type="time" 
            required 
            value={inicio}
            onChange={(e) => setInicio(e.target.value)}
          />
          <label>Hora de Cierre:</label>
          <input
            type="time" 
            required 
            value={cierre}
            onChange={(e) => setCierre(e.target.value)}
          />

          <label>Servicios:</label>
          <label_ key="lavado">
            <Checkbox
              type="checkbox"
              name="service"
              value="lavado"
              onChange={() => setLavado(!lavado)} lavado={lavado}
            /> {"Lavado"}
            {
              lavado ? (
              <input className="inputRequest formContentElement" name="token" type="text" placeholder="Precio de Lavado"/>
                ) : (<div></div>)
            }
          </label_>

          <label_ key="mantenimiento">
            <Checkbox
              type="checkbox"
              name="service"
              value="mantenimiento"
              onChange={() => setMantenimiento(!mantenimiento)} mantenimiento={mantenimiento}
            /> {"Mantenimiento"}
            {
              mantenimiento ? (
              <input className="inputRequest formContentElement" name="token" type="text" placeholder="Precio de Mantenimiento"/>
                ) : (<div></div>)
            }
          </label_>

          <label_ key="alineacion">
            <Checkbox
              type="checkbox"
              name="service"
              value="alineacion"
              onChange={() => setAlineacion(!alineacion)} alineacion={alineacion}
            /> {"Alineación"}
            {
              alineacion ? (
              <input className="inputRequest formContentElement" name="token" type="text" placeholder="Precio de Alineación"/>
                ) : (<div></div>)
            }
          </label_>

          <label_ key="reparacion">
            <Checkbox
              type="checkbox"
              name="service"
              value="reparacion"
              onChange={() => setReparacion(!reparacion)} reparacion={reparacion}
            /> {"Reparación"}
            {
              reparacion ? (
              <input className="inputRequest formContentElement" name="token" type="text" placeholder="Precio de Reparación"/>
                ) : (<div></div>)
            }
          </label_>
          
          <button>Confirmar</button>
        </form>
      </div>
    </div>
    </>
  );
}
 
export default Create;