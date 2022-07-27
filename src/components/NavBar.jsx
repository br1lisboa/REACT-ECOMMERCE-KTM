import React from "react";
import CartWidget from "./CartWidget";
import "./styles/NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="motor-container">
        <h1 className="motor-h1">
          <span className="motor">Mo</span>tor Bike
          <span className="motor">Sh</span>op
        </h1>
      </div>
      <div className="contenedor-navbar">
        <ul className="navbar">
          <li>
            <Link to="/" className="li">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/category/KTM" className="li">
              KTM
            </Link>
          </li>
          <li>
            <Link to="/category/HUSQVARNA" className="li">
              HUSQVARNA
            </Link>
          </li>
          <li>
            <Link to="/cart" className="li">
              <CartWidget />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <img src="../img/baner.png" alt="" className="baner" />
      </div>
    </div>
  );
}

export default NavBar;
