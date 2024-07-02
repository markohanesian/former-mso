import React, { useState } from "react";
import FormerIcon from "./FormerIcon";
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
  top: "50px",
  right: "0",
  border: "1px solid #ccc",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  padding: "10px",
  zIndex: 1000,
};

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button style={menuButtonStyle} onClick={toggleMenu}>
        <FormerIcon />
      </button>
      {isOpen && (
        <div style={menuStyle}>
          <ul>
            <ExportButton />
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
        </div>
      )}
    </>
  );
}
