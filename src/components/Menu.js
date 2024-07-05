import React, { useState } from "react";
import ExportButton from "./ExportButton";
import { useTheme } from "../theme/ThemeContext";

export default function Menu() {
  const { colors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuButtonStyle = {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    padding: "10px",
    cursor: "pointer",
    outline: "none",
    color: colors.textPrimary, 
  };

  const menuStyle = {
    position: "absolute",
    top: "80px",
    backgroundColor: colors.primary,
    boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    zIndex: 1000,
    width: "300px",
  };

  const MenuButtonIconStyle = {
    color: colors.textPrimary,
    fontSize: "2rem",
  };

  return (
    <>
      <button style={menuButtonStyle} onClick={toggleMenu}>
        <span style={MenuButtonIconStyle} className="material-symbols-outlined">
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
};