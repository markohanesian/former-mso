import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ExportButton = () => {
  const exportToPDF = async () => {
    const input = document.getElementById("screen");
    const inputHeight = input.clientHeight;
    const inputWidth = input.clientWidth;
    const pdf = new jsPDF("p", "pt", "a4");
    const pageHeight = pdf.internal.pageSize.getHeight();
    let position = 0;

    try {
      while (position < inputHeight) {
        const canvas = await html2canvas(input, {
          windowWidth: inputWidth,
          windowHeight: pageHeight,
          x: 0,
          y: position,
          scrollX: 0,
          scrollY: -window.scrollY,
          useCORS: true,
          width: inputWidth,
          height: pageHeight,
          scale: 1,
        });

        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        if (position > 0) {
          pdf.addPage();
        }

        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, '', 'FAST');
        position += pageHeight;
      }

      pdf.save("download.pdf");
    } catch (error) {
      console.error("Error exporting to PDF:", error);
      alert("There was an error exporting the PDF. Please try again.");
    }
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