// PageTitleInput.js
import React, { useState, useRef } from "react";

export default function PageTitleInput({ initialValue, onChange, onKeyDown }) {
  const [inputValue, setInputValue] = useState(initialValue);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      if (onKeyDown) {
        onKeyDown(e.target.value);
      }
      inputRef.current.blur();
    }
  };

  const inputStyles = {
    background: "#333",
    border: "none",
    color: "#fff",
    width: "100%",
    padding: "0.5rem",
    textAlign: "center",
    fontSize: "22px",
    marginBottom: "1rem"
  };

  return (
    <input
      id="page-title-input"
      type="text"
      placeholder="Enter Form Title"
      aria-label="Form Title"
      style={inputStyles}
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleEnterPress}
      maxLength="15"
      ref={inputRef}
    />
  );
}
