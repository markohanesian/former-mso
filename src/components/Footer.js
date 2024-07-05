import React from "react";
import PersonalCopyright from "./PersonalCopyright";
import { useTheme } from "../theme/ThemeContext";
import Link from "./Link";

export default function Footer() {
  const { colors } = useTheme();

  const footerStyle = {
    position: "relative",
    bottom: 0,
    width: "auto",
    backgroundColor: "transparent",
    margin: "2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    borderTop: `1px solid ${colors.primaryLight}`, 
  };

  const handleLinkHover = (event) => {
    event.target.style.color = "#666"; // Change color on hover
    event.target.style.borderBottomColor = "#666"; // Show underline on hover
  };

  const handleLinkLeave = (event) => {
    event.target.style.color = "#0969da"; // Restore default color
    event.target.style.borderBottomColor = "transparent"; // Hide underline
  };

  return (
    <footer style={footerStyle}>
      <div>
        <PersonalCopyright />
        <Link
          href="mailto:mso872@gmail.com"
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkLeave}
        >
          Email
        </Link>
        <Link
          href="https://github.com/markohanesian"
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkLeave}
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/mark-ohanesian/"
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkLeave}
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  );
};