import React, { useState, useEffect } from "react";
import { Button } from "../../Button";
import { Link, useParams } from "react-router-dom";
import "./Mapa.css";
import Navbar from "../../Navbar";

function Mapa() {
  const { id } = useParams();
  const [selected, setSelected] = useState(null);
  const spaces = [
    { id: 1, reserved: false },
    { id: 2, reserved: false },
    { id: 3, reserved: true },
    { id: 4, reserved: false },
    { id: 5, reserved: false },
    { id: 6, reserved: false },
    { id: 7, reserved: true },
    { id: 8, reserved: true },
    { id: 9, reserved: false },
  ];

  const onFormSubmit = () => {
    console.log("submit");
  };

  return (
    <div className="map-gen-container">
      <Navbar />
      <div className="map-container">
        {selected ? (
          <form
            className="formulario-reserva"
            onSubmit={(event) => {
              event.preventDefault();
              onFormSubmit();
            }}
          >
            <div>Reserva</div>

            <div className="formulario-fecha">
              <div>
                Reservando en garage <strong>{id}</strong> en el espacio{" "}
                <strong>{selected}</strong>
              </div>
              <div>Selecciona la fecha a reservar</div>
              <input type="date" required />
            </div>
            <div className="buttons-wrapper">
              <input
                type="submit"
                value="Reservar"
                className="reservationButton"
              />
              <button
                className="reservationButton"
                onClick={() => setSelected(null)}
              >
                Volver
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="map-text">
              Haz click en un lugar para reservarlo {id}
            </div>
            <div className="map-grid">
              {spaces.map((space) => (
                <button
                  className={`map-item ${space.reserved && "reserved"}`}
                  disabled={space.reserved}
                  onClick={() => {
                    if (!space.reserved) setSelected(space.id);
                  }}
                >
                  {space.id}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Mapa;
