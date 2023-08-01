import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to={""}>Home Page</Link>
      <Link to={"/movies"}>Movies</Link>
      <Link to={"/serials"}>Serials</Link>
      <Link to={"/persons"}>Persons</Link>
      <Link to={"userprofile"}>User Profile</Link>
    </div>
  );
};

export default Header;
