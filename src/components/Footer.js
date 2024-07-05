import React from "react";
import PersonalCopyright from "./PersonalCopyright";

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
  borderTop: "1px solid #ccc", // Example border styling
};

const linkStyle = {
  marginLeft: "1rem", // Adjust spacing between links
  textDecoration: "none",
  color: "#0969da",
};

const Footer = () => {
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
        <a
          href="mailto:mso872@gmail.com"
          style={linkStyle}
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkLeave}
        >
          Email
        </a>
        <a
          href="https://github.com/markohanesian"
          style={linkStyle}
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkLeave}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mark-ohanesian/"
          style={linkStyle}
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkLeave}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
