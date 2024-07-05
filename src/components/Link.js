import React, { useState } from "react";
import { useTheme } from "../theme/ThemeContext";

const linkStyle = {
  marginLeft: "1rem",
  textDecoration: "none",
  borderBottom: "none", // Remove default underline
};

export default function Link({ href, children }) {
  const { colors } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleLinkHover = () => {
    setIsHovered(true);
  };

  const handleLinkLeave = () => {
    setIsHovered(false);
  };

  const getLinkStyle = () => {
    const baseStyle = {
      color: colors.link,
      borderBottom: "none", // Remove default underline
    };

    const hoverStyle = {
      borderBottom: `1px solid ${colors.info}`, // Solid border on hover
    };

    return { ...linkStyle, ...baseStyle, ...(isHovered && hoverStyle) };
  };

  return (
    <a
      href={href}
      style={getLinkStyle()}
      onMouseEnter={handleLinkHover}
      onMouseLeave={handleLinkLeave}
    >
      {children}
    </a>
  );
}