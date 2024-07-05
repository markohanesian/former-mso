import React, { useState } from "react";
import { useTheme } from "../theme/ThemeContext";

export default function Button({ variant, onClick, children, ...props }) {
  const [isHovered, setIsHovered] = useState(false);
  const { colors } = useTheme();

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
    backgroundColor: colors.buttonPrimary,
    color: colors.buttonSecondary,
  };
  
  const secondaryButtonStyles = {
    backgroundColor: colors.buttonSecondary,
    color: colors.buttonPrimary,
  };
  
  const outlinedButtonStyles = {
    border: `1px solid ${colors.tertiary}`,
    backgroundColor: "transparent",
    color: colors.buttonSecondary,
  };


  const getButtonStyle = () => {
    let baseStyle;
    switch (variant) {
      case "secondary":
        baseStyle = isHovered
          ? { ...secondaryButtonStyles, backgroundColor: colors.buttonPrimary, color: colors.buttonSecondary }
          : secondaryButtonStyles;
        break;
      case "outlined":
        baseStyle = isHovered
          ? { ...outlinedButtonStyles, backgroundColor: colors.buttonSecondary, color: colors.buttonPrimary }
          : outlinedButtonStyles;
        break;
      case "primary":
      default:
        baseStyle = isHovered
          ? { ...primaryButtonStyles, backgroundColor: colors.buttonSecondary, color: colors.buttonPrimary }
          : primaryButtonStyles;
    }
    return { ...buttonStyles, ...baseStyle };
  };

  return (
    <button
      style={getButtonStyle()}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
}