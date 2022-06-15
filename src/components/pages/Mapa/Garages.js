import React from "react";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import "./Mapa.css";
import Navbar from "../../Navbar";

function Garages() {
  return (
    <div className="map-gen-container">
      <Navbar />
      <div className="map-container">
        <div className="map-text">Selecciona el garage de tu preferencia</div>
        <div className="garage-grid">
          <div className="garage">
            <div>Garage Las Flores</div>
            <div>Calle Siempre Viva 742</div>
            <Link to="/mapas/1">
              <Button buttonSize="btn--medium" buttonColor="red">
                Disponibilidad
              </Button>
            </Link>
          </div>
          <div className="garage">
            <div>Garage Las Flores</div>
            <div>Calle Siempre Viva 742</div>
            <Link to="/mapas/2">
              <Button buttonSize="btn--medium" buttonColor="red">
                Disponibilidad
              </Button>
            </Link>
          </div>
          <div className="garage">
            <div>Garage Las Flores</div>
            <div>Calle Siempre Viva 742</div>
            <Link to="/mapas/3">
              <Button buttonSize="btn--medium" buttonColor="red">
                Disponibilidad
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Garages;
