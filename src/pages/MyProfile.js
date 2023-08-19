import React from "react";
import { useLocation } from "react-router-dom";

const MyProfile = ({ user }) => {
  const location = useLocation();
  const { obj } = location.state;
  console.log(obj);
  return (
    <div>
      <h2>Witaj, {obj.firstname}</h2>
    </div>
  );
};

export default MyProfile;
