import React from "react";
import FueledIcon from "./FueledIcon";

export default function Navbar({ onButtonClick }) {
  const navbarStyles = {
    margin: 0,
    width: "auto",
    height: "72px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#AE0000",
    padding: "12px",
  };

  const sectionStyles = {
    display: "flex",
    alignItems: "center",
  };

  const titleStyles = {
    margin: "0",
    color: "#fff",
    fontFamily: "sans-serif",
    fontSize: 22,
    fontWeight: 700,
    lineHeight: 26.4,
    textAlign: "center",
  };

  const buttonStyles = {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#fff",
    fontSize: "1.5rem",
  };

  const inputStyles = {
    ...buttonStyles,
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "1.5rem",
    width: "100%",
    padding: "0.5rem",
    textAlign: "center",
  };

  return (
    <header style={navbarStyles}>
      <div style={sectionStyles}>
        <FueledIcon />
      </div>
      <div style={{ ...sectionStyles }}>
        <input
          type="text"
          placeholder="Enter form title"
          aria-label="Form Title"
          style={inputStyles}
        />
      </div>
      <div style={sectionStyles}>
        <button style={buttonStyles} onClick={onButtonClick}>
          Log In
        </button>
      </div>
    </header>
  );
}
