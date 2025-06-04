import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

export async function POST(request) {
  let browser = null;
  
  try {
    console.log('Starting PDF generation...');
    
    const { html } = await request.json();
    
    if (!html) {
      return Response.json({ error: 'No HTML content provided' }, { status: 400 });
    }

    // Launch browser (optimized for Vercel)
    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
    
    console.log('Browser launched successfully');
    
    const page = await browser.newPage();
    
    // Set content and wait for it to load
    await page.setContent(html, { 
      waitUntil: ['networkidle0', 'domcontentloaded'] 
    });
    
    console.log('Content loaded, generating PDF...');
    
    // Generate PDF
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in'
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

// GET route for health check
export async function GET() {
  return Response.json({ 
    message: 'PDF generation API is running',
    timestamp: new Date().toISOString()
  });
}