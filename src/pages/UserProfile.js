import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./UserProfilr.module.css";

const UserProfile = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    nick: "",
    password: "",
  });

  const updateUser = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  console.log(user);
  return (
    <div className={styles.root}>
      <h2>Zaloguj się:</h2>
      <form>
        <input name="email" placeholder="Email" />
        <br />
        <input name="password" placeholder="Password"  type="password"/>
        <br />
        <Link to={`/userprofile/${user.nick}`} state={{ obj: user }} className={styles.link}>
          Zaloguj
        </Link>
      </form>
      <h2>Zarejestruj się :</h2>
      <form onSubmit={updateUser}>
        <input
          name="firstname"
          onChange={updateUser}
          value={user.firstname}
          placeholder="Imię"
        />
        <br />
        <input
          name="lastname"
          onChange={updateUser}
          value={user.lastname}
          placeholder="Nazwisko"
        />
        <br />
        <input
          name="email"
          onChange={updateUser}
          value={user.email}
          placeholder="Email"
        />
        <br />
        <input
          name="nick"
          onChange={updateUser}
          value={user.city}
          placeholder="Nick"
        />
        <br />
        <input
        type="password"
          name="password"
          onChange={updateUser}
          value={user.password}
          placeholder="Password"
        />
        <br />
        <Link to={`/userprofile/${user.nick}`} state={{ obj: user }} className={styles.link}>
          Zarejestruj
        </Link>
      </form>
    </div>
  );
};

export default UserProfile;
