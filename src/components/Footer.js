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

  return (
    <footer style={footerStyle}>
      <div>
        <PersonalCopyright />
        <Link
          href="mailto:mso872@gmail.com"
        >
          Email
        </Link>
        <Link
          href="https://github.com/markohanesian"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/mark-ohanesian/"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  );
};