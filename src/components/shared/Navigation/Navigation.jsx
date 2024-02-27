import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  const brandStyles = {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
  };

  const logoText = {
    marginLeft: "5px",
  };

  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandStyles} to={"/"}>
        <img src="/images/logo1.png" alt="logo" />
        <span style={logoText}>OttonVoice</span>
      </Link>
    </nav>
  );
};

export default Navigation;
