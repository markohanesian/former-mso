import React, { useState } from "react";
import ExportButton from "./ExportButton";

const menuButtonStyle = {
  backgroundColor: "transparent",
  border: "none",
  boxShadow: "none",
  padding: "10px",
  cursor: "pointer",
  outline: "none",
};

const menuStyle = {
  position: "absolute",
  top: "80px",
  backgroundColor: "#333",
  boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.1)",
  padding: "10px",
  zIndex: 1000,
  width: "300px",
};

const MenuButtonIconStyle = {
  color: "#fff",
  fontSize: "2rem",
};

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button style={menuButtonStyle} onClick={toggleMenu}>
        <span style={MenuButtonIconStyle} class="material-symbols-outlined">
          menu
        </span>
      </button>
      {isOpen && (
        <div style={menuStyle}>
          <ul>
            <ExportButton />
            {/* <li>One</li>
            <li>Two</li>
            <li>Three</li> */}
          </ul>
        </div>
      )}
    </>
  );
}
