// Handle PDF export functionality
/* Capture content of the iframe and convert it to a PDF */

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export async function exportResumeToPDF(iframeElement, userData) {
  try {
    // Get iframe document
    const iframeDoc = iframeElement.contentDocument || iframeElement.contentWindow.document;
    const content = iframeDoc.getElementById('portal-root');
    
    if (!portalRoot) {
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
}

// Generate the filename for the PDF
