export async function exportResumeToPDF(iframe, userData) {
  try {
    // Simply print the existing iframe content
    const iframeWindow = iframe.contentWindow;
    
    if (!iframeWindow) {
      throw new Error('Cannot access iframe window');
    }

    // Add print styles to the existing iframe
    const iframeDoc = iframe.contentDocument;
    const printStyles = iframeDoc.createElement('style');
    printStyles.id = 'print-styles';
    printStyles.textContent = `
      @page {
        size: A4;
        margin: 0.5in;
      }
      
      @media print {
        body {
          margin: 0 !important;
          padding: 0 !important;
        }
        
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
      }
    `;
    
    iframeDoc.head.appendChild(printStyles);

    // Focus and print the iframe
    iframeWindow.focus();
    iframeWindow.print();

    // Clean up
    setTimeout(() => {
      iframeDoc.head.removeChild(printStyles);
    }, 1000);

    return true;
  } catch (error) {
    console.error('PDF export failed:', error);
    throw error;
  }
}