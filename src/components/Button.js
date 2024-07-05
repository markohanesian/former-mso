import React from "react";

const buttonStyles = {
  border: "none",
  cursor: "pointer",
  fontSize: "12px",
  fontFamily: "sans-serif",
  fontWeight: 700,
  lineHeight: "13px",
  textAlign: "center",
  textTransform: "uppercase",
  height: "30px",
  padding: "8px",
};

const primaryButtonStyles = {
  ...buttonStyles,
  backgroundColor: "#333",
  color: "#fff",
};

const secondaryButtonStyles = {
  ...buttonStyles,
  backgroundColor: "#fff",
  color: "#333",
};

const outlinedButtonStyles = {
  ...buttonStyles,
  border: "1px solid #333",
  backgroundColor: "#fff",
  color: "#333",
};

export default function Button({ variant, onClick, children }) {
  let buttonStyle;
  
  switch (variant) {
    case "primary":
      buttonStyle = primaryButtonStyles;
      break;
    case "secondary":
      buttonStyle = secondaryButtonStyles;
      break;
    case "outlined":
      buttonStyle = outlinedButtonStyles;
      break;
    default:
      buttonStyle = primaryButtonStyles;
  }

  const handleHover = () => {
    switch (variant) {
      case "primary":
        buttonStyle = {
          ...primaryButtonStyles,
          backgroundColor: "#fff",
          color: "#333",
        };
        break;
      case "secondary":
        buttonStyle = {
          ...secondaryButtonStyles,
          backgroundColor: "#333",
          color: "#fff",
        };
        break;
      case "outlined":
        buttonStyle = {
          ...outlinedButtonStyles,
          backgroundColor: "#333",
          color: "#fff",
        };
        break;
      default:
        break;
    }
  };

  const handleLeave = () => {
    switch (variant) {
      case "primary":
        buttonStyle = primaryButtonStyles;
        break;
      case "secondary":
        buttonStyle = secondaryButtonStyles;
        break;
      case "outlined":
        buttonStyle = outlinedButtonStyles;
        break;
      default:
        break;
    }
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      aria-label={`${variant} button`}
    >
      {children}
    </button>
  );
}