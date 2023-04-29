import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const styles1 = {
  position: "absolute",
  left: 0,
};

const styles2 = {
  position: "absolute",
  right: 0,
  display: "flex",
  gap: "20px",
};

const NavBar = () => (
  <div className="flex-container">
    <div style={styles1}>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
      </Link>
    </div>
    <div style={styles2}>
      <div>
        <Link to="/Contact">Contact</Link>
      </div>
      <div>
        <Link to="/About">About</Link>
      </div>
      <div>
        <Link to="/SignUp">SignUp</Link>
      </div>
    </div>
    <br /> <br />
  </div>
);

export default NavBar;
