import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return <div>
    <div>
      <Link to={"/about"}>O Nas</Link>
      <Link to={"/contact"}>Kontakt</Link>
    </div>
    <div>
      <Link to={"/newFilm"}>Nowy Film</Link>
      <Link to={"/newSerials"}>Nowy Serial</Link>
    </div>
    <div>
      <Link to={"/termsAndConditions"}>Regulamin</Link>
      <Link to={"/privacyPolicy"}>Polityka Prywatności</Link>
    </div>
  </div>;
};

export default Footer;
