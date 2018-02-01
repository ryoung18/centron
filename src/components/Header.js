import React from "react";
import { BASE_URL } from "../utils/helpers";
import "../css/Header.css";

const Header = () => (
  <header className="logo">
    Centron <img src={`${BASE_URL}/images/centron-logo.png`} alt="Centron Life Products" />
    Life Products
  </header>
);

export default Header;
