import React, { useState, useRef } from "react";
import FormerIcon from "./FormerIcon";
import ExportButton from "./ExportButton";

export default function Navbar({ onButtonClick, pageTitle }) {
  const [, setInputValue] = useState(pageTitle);
  const buttonRef = useRef(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      setInputValue(e.target.value);
      buttonRef.current.focus();
    }
  };

  const navbarStyles = {
    margin: 0,
    width: "auto",
    height: "72px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "21px 20px",
  };

  const sectionStyles = {
    display: "flex",
    alignItems: "center",
  };

  const inputStyles = {
    background: "none",
    border: "none",
    color: "#fff",
    width: "100%",
    padding: "0.5rem",
    textAlign: "center",
    fontSize: "22px",
  };

  return (
    <header style={navbarStyles}>
      <div style={{ width: "57.34px" }}>
        <FormerIcon />
      </div>
      <div style={{ ...sectionStyles }}>
        <input
          id="page-title-input"
          type="text"
          placeholder="New Questionnaire"
          aria-label="Form Title"
          style={inputStyles}
          onChange={handleChange}
          onKeyDown={handleEnterPress}
          maxLength="15"
        />
      </div>
      <div style={sectionStyles}>
        <ExportButton />
      </div>
    </header>
  );
}
