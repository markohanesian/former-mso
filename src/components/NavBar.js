import React from "react";
import Logo from "./Logo";
import ExportButton from "./ExportButton/ExportButton";
import { useTheme } from "../theme/ThemeContext";

export default function Navbar() {
  const { colors } = useTheme();

  const navbarStyles = {
    margin: 0,
    width: "auto",
    height: "72px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.primary, // Use primary color from theme
    padding: "21px 20px",
  };

  const sectionStyles = {
    display: "flex",
    alignItems: "center",
  };

  const PageTitleStyle = {
    color: colors.textPrimary, // Use primary text color from theme
    fontFamily: "sans-serif",
    fontWeight: 400,
  };

  return (
    <header style={navbarStyles}>
      <div style={{ width: "88px" }}>
        <Logo />
      </div>
      <div style={sectionStyles}>
        <h1 style={PageTitleStyle}>FORMER</h1>
      </div>
      <div style={sectionStyles}>
        <ExportButton />
      </div>
    </header>
  );
}