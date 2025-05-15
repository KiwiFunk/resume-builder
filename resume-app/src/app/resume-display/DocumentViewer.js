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
      
      // Create a head element with necessary styles
      const head = iframeDoc.head;
      
      // Set viewport meta to force desktop width
      const meta = iframeDoc.createElement('meta');
      meta.setAttribute('name', 'viewport');
      meta.setAttribute('content', 'width=device-width, initial-scale=1.0');
      head.appendChild(meta);
      
      // Add Tailwind CSS
      const tailwindLink = iframeDoc.createElement('link');
      tailwindLink.rel = 'stylesheet';
      tailwindLink.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
      head.appendChild(tailwindLink);
      
      // Add Bootstrap Icons if needed
      const iconsLink = iframeDoc.createElement('link');
      iconsLink.rel = 'stylesheet';
      iconsLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css';
      head.appendChild(iconsLink);
      
      // Add your global styles if needed
      try {
        const globalStyles = iframeDoc.createElement('link');
        globalStyles.rel = 'stylesheet';
        globalStyles.href = `${window.location.origin}/globals.css`;
        head.appendChild(globalStyles);
      } catch (e) {
        console.log('Could not load global styles:', e);
      }
      
      // Add internal styles for A4 paper
      const style = iframeDoc.createElement('style');
      style.textContent = `
        body {
          margin: 0;
          padding: 0;
          width: 794px; /* A4 width */
          background-color: white;
          min-height: 1123px; /* A4 height */
          overflow-x: hidden;
          font-family: Arial, sans-serif;
        }
        
        #portal-root {
          padding: 32px;
          box-sizing: border-box;
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