export async function exportResumeToPDF(iframe, userData) {
  try {
    console.log('Starting PDF export...');
    
    const iframeDoc = iframe.contentDocument;
    const content = iframeDoc.getElementById('portal-root');
    
    if (!content) {
      throw new Error('Resume content not found');
    }

    // Get all styles from iframe
    const allStyles = Array.from(iframeDoc.querySelectorAll('style, link[rel="stylesheet"]'))
      .map(el => {
        if (el.tagName === 'LINK') {
          return `<link rel="stylesheet" href="${el.href}">`;
        }
        return el.outerHTML;
      })
      .join('\n');

    // Get CSS variables (your custom colors)
    const rootElement = iframeDoc.documentElement;
    const computedStyle = getComputedStyle(rootElement);
    let cssVariables = '';
    
    for (let i = 0; i < computedStyle.length; i++) {
      const prop = computedStyle[i];
      if (prop.startsWith('--')) {
        const value = computedStyle.getPropertyValue(prop);
        cssVariables += `${prop}: ${value}; `;
      }
    }

    // Create complete HTML package
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${userData?.name || 'Resume'}</title>
          ${allStyles}
          <style>
            :root { ${cssVariables} }
            body { 
              margin: 0; 
              background: white; 
              font-family: system-ui, -apple-system, sans-serif;
            }
            @page { 
              size: A4; 
              margin: 0.5in; 
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

    console.log('Sending request to API...');

    // Call API endpoint
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
    a.download = `${userData?.name?.replace(/\s+/g, '_') || 'resume'}.pdf`;
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