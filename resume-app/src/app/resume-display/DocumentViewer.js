"use client";
import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function DocumentViewer({ children, scale }) {
  const iframeRef = useRef(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeDocument, setIframeDocument] = useState(null);
  
  // Set up iframe when it loads
  useEffect(() => {
    if (!iframeRef.current) return;
    
    const handleLoad = () => {
      const iframe = iframeRef.current;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      
      // Set up the head with necessary styles
      const head = iframeDoc.head;
      
      // CRITICAL: Force desktop viewport - this prevents responsive breakpoints from triggering
      const meta = iframeDoc.createElement('meta');
      meta.setAttribute('name', 'viewport');
      meta.setAttribute('content', 'width=1200');
      head.appendChild(meta);
      
      // Add core Tailwind CSS - match your app's version
      const tailwindLink = iframeDoc.createElement('link');
      tailwindLink.rel = 'stylesheet';
      // Use the same version your app uses - this is important!
      tailwindLink.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@3.3.3/dist/tailwind.min.css';
      head.appendChild(tailwindLink);
      
      // Add Bootstrap Icons
      const iconsLink = iframeDoc.createElement('link');
      iconsLink.rel = 'stylesheet';
      iconsLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css';
      head.appendChild(iconsLink);
      
      // Try to get Next.js generated CSS from the main document
      try {
        const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
        stylesheets.forEach(sheet => {
          if (sheet.href && sheet.href.includes('_next')) {
            const styleLink = iframeDoc.createElement('link');
            styleLink.rel = 'stylesheet';
            styleLink.href = sheet.href;
            head.appendChild(styleLink);
          }
        });
      } catch (e) {
        console.log('Could not load Next.js styles:', e);
      }
      
      // Add basic A4 styling
      const style = iframeDoc.createElement('style');
      style.textContent = `
        body {
          margin: 0;
          padding: 0;
          width: 794px; /* A4 width */
          background-color: white;
          min-height: 1123px; /* A4 height */
          overflow-x: hidden;
        }
        
        #portal-root {
          padding: 42px;
          box-sizing: border-box;
        }
        
        /* Ensure print styling works correctly */
        @media print {
          body {
            width: 210mm;
            /* height: 297mm; */
            padding: 0;
            margin: 0;
          }
          
          #portal-root {
            padding: 0;
          }
        }
      `;
      head.appendChild(style);
      
      // Create portal target
      const body = iframeDoc.body;
      if (!body.querySelector('#portal-root')) {
        const portalRoot = iframeDoc.createElement('div');
        portalRoot.id = 'portal-root';
        body.appendChild(portalRoot);
      }
      
      setIframeDocument(iframeDoc);
      setIframeLoaded(true);
    };
    
    if (iframeRef.current.contentDocument?.readyState === 'complete') {
      handleLoad();
    } else {
      iframeRef.current.addEventListener('load', handleLoad);
    }
    
    return () => {
      if (iframeRef.current) {
        iframeRef.current.removeEventListener('load', handleLoad);
      }
    };
  }, []);
  
  // Calculate scale
  const scaleFactor = scale / 100;
  
  return (
    <div className="doc-viewer-wrapper">
      <div 
        className="doc-viewer-scaler"
        style={{
          transform: `scale(${scaleFactor})`,
          transformOrigin: 'top center',
          marginBottom: scaleFactor < 1 ? `${(1 - scaleFactor) * 1123 * 0.5}px` : 0
        }}
      >
        <iframe
          ref={iframeRef}
          title="Resume Document"
          style={{
            width: '794px', // A4 width in pixels
            height: '1123px', // A4 height in pixels
            border: 'none',
            background: 'white',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
            borderRadius: '8px',
            display: 'block'
          }}
          src="about:blank"
        />
        
        {/* Portal children into iframe when ready */}
        {iframeLoaded && iframeDocument && 
          createPortal(
            children,
            iframeDocument.getElementById('portal-root')
          )
        }
      </div>
    </div>
  );
}