import React, { useState, useRef } from "react";
import { useTheme } from "../theme/ThemeContext";

export default function PageTitleInput({ initialValue, onChange, onKeyDown }) {
  const { colors } = useTheme();

  const inputStyles = {
    background: "transparent",
    border: "none",
    padding: "0.5rem",
    textAlign: "center",
    fontSize: "22px",
    marginBottom: "1rem",
    fontWeight: "600",
    color: colors.textPrimary,
  };

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

  return (
    <input
      id="page-title-input"
      className="pdf-element"
      type="text"
      placeholder="Enter Form Title"
      aria-label="Form Title"
      style={inputStyles}
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleEnterPress}
      maxLength="15"
      ref={inputRef}
      component="h1"
    />
  );
}