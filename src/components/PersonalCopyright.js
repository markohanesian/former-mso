import React from "react";

const CurrentYearStyle = {
  fontSize: "1.2rem",
  fontWeight: "500",
};

export default function PersonalCopyright() {
  const today = new Date();
  var year = today.getFullYear();

  return <p style={CurrentYearStyle}>{year} Mark Ohanesian</p>;
}
