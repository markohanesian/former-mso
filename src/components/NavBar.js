import FormerIcon from "./FormerIcon";
import Menu from "./Menu";

export default function Navbar() {
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

  return (
    <header style={navbarStyles}>
      <div style={{ width: "57.34px" }}>
        <FormerIcon />
      </div>
      <div style={{ ...sectionStyles }}>
        <h1 style={PageTitleStyle}>FORMER</h1>
      </div>
      <div style={sectionStyles}>
        <Menu />
      </div>
    </header>
  );
}
