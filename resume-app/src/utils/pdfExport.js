// Handle PDF export functionality
/* Capture content of the iframe and convert it to a PDF */

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export async function exportResumeToPDF(iframe, userData) {
  try {

    // Get iframe content
    const content = iframe.contentDocument.getElementById('portal-root');
    
    if (!content) {
      throw new Error('Resume content not found');
    }

    // A4 dimensions in points (72 DPI)
    const A4_WIDTH = 595.28;
    const A4_HEIGHT = 841.89;
    const MARGIN = 40; // Points margin for safety
    
    // Create canvas from the content
    const canvas = await html2canvas(content, {
      scale: 2, 
      useCORS: true,
      allowTaint: false,
      backgroundColor: '#ffffff',
      width: 794, // A4 width in pixels
      onclone: (clonedDoc) => {
        // Inject custom styles into the cloned document
        const style = clonedDoc.createElement('style');
        style.textContent = `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          * { font-family: 'Inter', sans-serif !important; }
        `;
        clonedDoc.head.appendChild(style);
      }
    });

    // Calculate scaling for PDF
    const imgWidth = A4_WIDTH - (MARGIN * 2);
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // Create PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4'
    });

    // Handle multi-page content
    let position = MARGIN;
    const pageHeight = A4_HEIGHT - (MARGIN * 2);
    
    if (imgHeight <= pageHeight) {
      // Single page (Center content on the page)
      const yPosition = MARGIN + (pageHeight - imgHeight) / 2;
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', MARGIN, yPosition, imgWidth, imgHeight);
    } else {
      // Multi-page
      await handlePageBreaks(pdf, canvas, imgWidth, MARGIN, pageHeight);
    }

    // Generate filename
    const fileName = generateFileName(userData);
    pdf.save(fileName);
    
    return true;
  } catch (error) {
    console.error('PDF export failed:', error);
    throw error;
  }
}

// Handle multi-page content
async function handlePageBreaks(pdf, canvas, imgWidth, margin, pageHeight) {
    const totalPages = Math.ceil((canvas.height * imgWidth / canvas.width) / pageHeight);

    // Loop through each page and add it to the PDF
    for (let page = 0; page < totalPages; page++) {

        // If not the first page, add a new page
        if (page > 0) pdf.addPage();

        const sourceY = page * (pageHeight * canvas.width / imgWidth);
        const sourceHeight = Math.min(
            pageHeight * canvas.width / imgWidth,
            canvas.height - sourceY
        );

        // Create a temporary canvas for this page
        const pageCanvas = document.createElement('canvas');
        const pageCtx = pageCanvas.getContext('2d');

        pageCanvas.width = canvas.width;
        pageCanvas.height = sourceHeight;

        // Draw the section of the original canvas
        pageCtx.drawImage(
            canvas,
            0, sourceY, canvas.width, sourceHeight,
            0, 0, canvas.width, sourceHeight
        );

        const actualHeight = (sourceHeight * imgWidth) / canvas.width;
        pdf.addImage(
            pageCanvas.toDataURL('image/png'),
            'PNG',
            margin,
            margin,
            imgWidth,
            actualHeight
        );
    }
}

// Generate the filename for the PDF
function generateFileName(userData) {
    if (!userData) {
        return 'resume.pdf';
    }

    const name = userData.name;
    const jobTitle = userData.title;
    return `${name.replace(/\s+/g, '_')}_${jobTitle.replace(/\s+/g, '_')}.pdf`;
}