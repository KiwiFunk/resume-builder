export async function POST(request) {
  let browser = null;
  
  try {
    console.log('Starting PDF generation...');
    
    const { html } = await request.json();
    
    if (!html) {
      return Response.json({ error: 'No HTML content provided' }, { status: 400 });
    }

    // Environment detection
    const isLocal = !process.env.VERCEL && process.env.NODE_ENV === 'development';
    
    if (isLocal) {
      // Local development with regular puppeteer
      const puppeteer = await import('puppeteer');
      browser = await puppeteer.default.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
    } else {
      // Production with optimized chromium
      const puppeteer = await import('puppeteer-core');
      const chromium = await import('@sparticuz/chromium');
      
      browser = await puppeteer.default.launch({
        args: chromium.default.args,
        defaultViewport: chromium.default.defaultViewport,
        executablePath: await chromium.default.executablePath(),
        headless: chromium.default.headless,
      });
    }
    
    console.log('Browser launched');
    
    const page = await browser.newPage();
    
    // Set viewport to match iframe dimensions
    await page.setViewport({ width: 794, height: 1123 });
    
    // Load HTML as it appears in iframe
    await page.setContent(html, { 
      waitUntil: ['networkidle0', 'domcontentloaded'] 
    });
    
    console.log('Generating PDF...');
    
    // Generate PDF with minimal margins (WYSIWYG)
    const pdf = await page.pdf({
      width: '794px',
      height: '1123px',
      printBackground: true,
      margin: {
        top: '0px',
        right: '0px', 
        bottom: '0px',
        left: '0px'
      },
      preferCSSPageSize: true
    });
    
    console.log('PDF generated successfully');
    
    return new Response(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="resume.pdf"'
      }
    });
    
  } catch (error) {
    console.error('PDF generation error:', error);
    return Response.json(
      { error: 'Failed to generate PDF', details: error.message },
      { status: 500 }
    );
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// GET endpoint to check API status
export async function GET() {
  return Response.json({ 
    message: 'PDF generation API is running',
    environment: process.env.NODE_ENV || 'unknown',
    timestamp: new Date().toISOString()
  });
}