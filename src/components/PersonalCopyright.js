import React from "react";

export default function PersonalCopyright() {
  const CurrentYearStyle = {
    fontSize: "1rem",
  };
  const today = new Date();
  var year = today.getFullYear();

  return <p style={CurrentYearStyle}>{year} Mark Ohanesian</p>;
}
