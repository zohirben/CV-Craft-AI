import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import toast from 'react-hot-toast';

export const generatePDF = async () => {
  const element = document.getElementById('cv-preview');
  if (!element) {
    toast.error('CV preview not found');
    return;
  }

  try {
    toast.loading('Generating PDF...');
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      allowTaint: true
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;
    
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    
    // Add more pages if content is longer than one page
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    
    pdf.save('cv.pdf');
    toast.dismiss();
    toast.success('PDF downloaded successfully');
  } catch (error) {
    toast.dismiss();
    toast.error('Failed to generate PDF');
    console.error('PDF generation error:', error);
  }
};

export const copyAsText = () => {
  const element = document.getElementById('cv-preview');
  if (!element) {
    toast.error('CV preview not found');
    return;
  }

  try {
    const text = element.innerText;
    navigator.clipboard.writeText(text);
    toast.success('CV text copied to clipboard');
  } catch (error) {
    toast.error('Failed to copy text');
    console.error('Text copy error:', error);
  }
};