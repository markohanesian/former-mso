import FormerIcon from "./FormerIcon";
import ExportButton from "./ExportButton";

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

const PageTitleStyle = {
  color: "#fff",
  fontFamily: "sans-serif",
  fontWeight: "400",
};

export default function Navbar() {
  return (
    <header style={navbarStyles}>
      <div style={{ width: "88px" }}>
        <FormerIcon />
      </div>
      <div style={{ ...sectionStyles }}>
        <h1 style={PageTitleStyle}>FORMER</h1>
      </div>
      <div style={sectionStyles}>
        <ExportButton />
      </div>
    </header>
  );
}
