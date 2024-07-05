import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useTheme } from "../theme/ThemeContext";

export default function ExportButton() {
  const { colors } = useTheme();

  const buttonStyles = {
    border: "none",
    cursor: "pointer",
    color: colors.primary,
    fontSize: "12px",
    fontFamily: "sans-serif",
    fontWeight: 700,
    lineHeight: "13px",
    textAlign: "center",
    textTransform: "uppercase",
    background: colors.buttonSecondary,
    height: "30px",
    padding: "8px",
  };

  const exportToPDF = async () => {
    const pdf = new jsPDF("p", "pt", "letter");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const margin = 50;
    let position = margin;

    // Select all elements with the class name 'pdf-element'
    const elements = document.querySelectorAll(".pdf-element");

    // Ensure there are elements to export
    if (elements.length === 0) {
      alert("No elements found with the class 'pdf-element'");
      return;
    }

    for (const element of elements) {
      const elementWidth = element.offsetWidth;
      const elementHeight = element.offsetHeight;

      // Capture the element with html2canvas
      const canvas = await html2canvas(element, {
        useCORS: true,
        scale: 2, // Capture at higher resolution
        width: elementWidth,
        height: elementHeight,
      });

      const imgData = canvas.toDataURL("image/png");
      const imgProps = pdf.getImageProperties(imgData);
      const imgWidth = elementWidth; // Use the original width
      const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

      // Calculate the horizontal position to center the element
      const horizontalPosition = (pdfWidth - imgWidth) / 2;

      // Check if adding this image would exceed the page height
      if (position + imgHeight > pdfHeight - margin) {
        pdf.addPage();
        position = margin;
      }

      pdf.addImage(
        imgData,
        "PNG",
        horizontalPosition,
        position,
        imgWidth,
        imgHeight
      );
      position += imgHeight + margin;
    }

    pdf.save("download.pdf");
  };

  return (
    <button onClick={exportToPDF} style={buttonStyles}>
      Download
    </button>
  );
}
