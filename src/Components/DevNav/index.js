import React from "react";
import { Link } from "react-router-dom";

export const DevNav = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/host/1">Sample Host</Link>
    </li>
    <li>
      <Link to="/hosts">Hosts</Link>
    </li>
    <li>
      <Link to="/animal/1">Sample Animal</Link>
    </li>
    <li>
      <Link to="/cats">Cats</Link>
    </li>
    <li>
      <Link to="/dogs">Dogs</Link>
    </li>
    <li>
      <Link to="/exotics">Exotics</Link>
    </li>
    <li>
      <Link to="/admin">Admin</Link>
    </li>
    <li>
      <Link to="/login">Log In</Link>
    </li>
    <li>
      <Link to="/register">Register</Link>
    </li>
  </ul>
);
