import React from "react";
import Button from "../Button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ExportButton() {
  const exportToPDF = async () => {
    const pdf = new jsPDF("p", "pt", "letter");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const margin = 10;
    let position = margin;

    // Select all elements with the class name 'pdf-element'
    const elements = document.querySelectorAll(".pdf-element");

    // Ensure there are elements to export
    if (elements.length === 0) {
      alert("No elements found with the class 'pdf-element'");
      return;
    }

    for (const element of elements) {
      // Constrain the element width to fit within the PDF width
      const elementWidth = Math.min(element.offsetWidth, pdfWidth - 2 * margin);
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

      // Calculate the final image size to fit the PDF width
      const imgWidth = elementWidth / 2; // Adjust scale factor here (1.4 can be adjusted)
      const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

      // Calculate the horizontal position to center the element
      const horizontalPosition = (pdfWidth - imgWidth) / 2;

      // Check if adding this image would exceed the page height
      if (position + imgHeight > pdfHeight - margin) {
        pdf.addPage();
        position = margin;
      }

      pdf.addImage(imgData, "PNG", horizontalPosition, position, imgWidth, imgHeight);
      position += imgHeight + margin;
    }

    pdf.save("download.pdf");
  };

  return (
    <Button onClick={exportToPDF} variant="outlined" aria-label="click to export form to pdf">
      Download
    </Button>
  );
}
