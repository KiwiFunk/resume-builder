export async function POST(request) {
  let browser = null;
  
  try {
    console.log('Starting PDF generation...');
    console.log('Environment:', process.env.NODE_ENV);
    
    const { html } = await request.json();
    
    if (!html) {
      return Response.json({ error: 'No HTML content provided' }, { status: 400 });
    }

    // Check if we're in local development
    const isLocal = !process.env.VERCEL && process.env.NODE_ENV === 'development';
    
    if (isLocal) {
      // For local development, use regular puppeteer
      const puppeteer = await import('puppeteer');
      browser = await puppeteer.default.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
    } else {
      // Production: Use puppeteer-core with chromium
      const puppeteer = await import('puppeteer-core');
      const chromium = await import('@sparticuz/chromium');
      
      browser = await puppeteer.default.launch({
        args: chromium.default.args,
        defaultViewport: chromium.default.defaultViewport,
        executablePath: await chromium.default.executablePath(),
        headless: chromium.default.headless,
      });
    }
    
    console.log('Browser launched successfully');
    
    const page = await browser.newPage();
    await page.setViewport({ width: 794, height: 1123 });
    
    await page.setContent(html, { 
      waitUntil: ['networkidle0', 'domcontentloaded'] 
    });
    
    console.log('Content loaded, generating PDF...');
    
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0',
        right: '0',
        bottom: '0',
        left: '0'
      }
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

// GET route to check API status
export async function GET() {
  return Response.json({ 
    message: 'PDF generation API is running',
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
}