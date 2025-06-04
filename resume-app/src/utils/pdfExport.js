export async function exportResumeToPDF(iframe, userData) {
  try {
    console.log('Starting PDF export...');
    
    const iframeDoc = iframe.contentDocument;
    const content = iframeDoc.getElementById('portal-root');
    
    if (!iframeDoc) {
      throw new Error('Cannot access iframe content');
    }

    // Collect ALL styles from the iframe
    const allStyles = Array.from(iframeDoc.querySelectorAll('style, link[rel="stylesheet"]'))
      .map(el => {
        if (el.tagName === 'LINK') {
          // For external stylesheets, we need the actual CSS content
          return `<link rel="stylesheet" href="${el.href}">`;
        }
        return el.outerHTML;
      })
      .join('\n');

    // Get CSS custom properties
    const cssVariables = extractCSSVariables(iframeDoc.documentElement);

    // Create complete HTML with all styles
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Export</title>
          ${allStyles}
          <style>
            :root { ${cssVariables} }
            body { 
              margin: 0; 
              padding: 0;
              background: white; 
            }
            * {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
          </style>
        </head>
        <body>
          ${content.outerHTML}
        </body>
      </html>
    `;

    console.log('HTML content length:', htmlContent.length);

    console.log('Sending content to API...');

    // Send to API for PDF generation
    const response = await fetch('/api/generate-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ html: htmlContent }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'PDF generation failed');
    }

    console.log('PDF generated, downloading...');

    // Download the PDF
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = generateFileName(userData);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    console.log('PDF download complete!');
    return true;
    
  } catch (error) {
    console.error('PDF export failed:', error);
    alert(`PDF export failed: ${error.message}`);
    throw error;
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

// Extract CSS variables from the document
function extractCSSVariables(rootElement) {
  const computedStyle = getComputedStyle(rootElement);
  return Array.from(computedStyle)
    .filter(prop => prop.startsWith('--'))
    .map(prop => `${prop}: ${computedStyle.getPropertyValue(prop)};`)
    .join(' ');
}