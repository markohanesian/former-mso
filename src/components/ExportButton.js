import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ExportButton = () => {
  const exportToPDF = () => {
    const input = document.getElementById("screen");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
    });
  };

  const buttonStyles = {
    border: "none",
    cursor: "pointer",
    color: "#fff",
    fontSize: "12px",
    fontFamily: "sans-serif",
    fontWeight: 700,
    lineHeight: "13px",
    textAlign: "center",
    textTransform: "uppercase",
    background: "rgba(245, 245, 241, 0.2)",
    height: "30px",
    padding: "8px",
  };

  return (
    <button onClick={exportToPDF} style={buttonStyles}>
      Export to PDF
    </button>
  );
};

export default ExportButton;
