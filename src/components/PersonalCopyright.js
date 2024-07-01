import React from "react";

export default function PersonalCopyright() {
  const CurrentYearStyle = {
    fontSize: "1.2rem",
    fontWeight: "500"
  };
  const today = new Date();
  var year = today.getFullYear();

  return <p style={CurrentYearStyle}>{year} Mark Ohanesian</p>;
}
