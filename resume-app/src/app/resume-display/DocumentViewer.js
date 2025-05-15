"use client";
import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function DocumentViewer({ children, scale }) {
    const iframeRef = useRef(null);
    const wrapperRef = useRef(null);
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const [iframeDocument, setIframeDocument] = useState(null);
    const [contentHeight, setContentHeight] = useState(1123); // Default A4 height

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

            // Add basic A4 styling - with explicit scroll prevention
            const style = iframeDoc.createElement('style');
            style.textContent = `
        html, body {
          margin: 0;
          padding: 0;
          width: 794px; /* A4 width */
          background-color: white;
          min-height: 1123px; /* A4 minimum height */
          overflow: hidden !important; /* Force prevent scrolling */
        }
        
        #portal-root {
          padding: 42px;
          box-sizing: border-box;
          overflow: visible !important; /* Allow content to overflow without scrolling */
        }
        
        /* Ensure print styling works correctly */
        @media print {
          body {
            width: 210mm;
            padding: 0;
            margin: 0;
          }
          
          #portal-root {
            padding: 15mm;
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

            // Set up a mutation observer to watch for content height changes
            const resizeObserver = new ResizeObserver(() => {
                // Get the actual content height
                const newHeight = Math.max(
                    iframeDoc.body.scrollHeight,
                    iframeDoc.documentElement.scrollHeight,
                    iframeDoc.body.offsetHeight,
                    iframeDoc.documentElement.offsetHeight,
                    1123 // Minimum A4 height
                );

                // Update iframe height
                setContentHeight(newHeight);
            });

            // Observe the body for size changes
            resizeObserver.observe(iframeDoc.body);

            // Clean up observer when component unmounts
            return () => {
                resizeObserver.disconnect();
            };
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

    // Effect to update height calculation when scale changes
    useEffect(() => {
        if (!iframeRef.current || !iframeDocument) return;

        // Ensure scrolling is disabled when scale changes
        iframeRef.current.setAttribute('scrolling', 'no');

        // Force scrolling to be disabled on the iframe document
        if (iframeDocument.body) {
            iframeDocument.body.style.overflow = 'hidden';
            iframeDocument.documentElement.style.overflow = 'hidden';
        }

        // Recalculate height after scale changes
        const newHeight = Math.max(
            iframeDocument.body.scrollHeight,
            iframeDocument.documentElement.scrollHeight,
            iframeDocument.body.offsetHeight,
            iframeDocument.documentElement.offsetHeight,
            1123 // Minimum A4 height
        );

        setContentHeight(newHeight);
    }, [scale, iframeDocument]);

    // Calculate scale
    const scaleFactor = scale / 100;

    // Calculate space adjustments for both scaling up and down
    const extraSpace = scaleFactor > 1
        ? `${((scaleFactor - 1) * contentHeight)}px` // Extra space needed when zoomed in
        : '0px';

    // Calculate container height based on scale
    const containerHeight = scaleFactor < 1
        ? `${contentHeight * scaleFactor}px` // Shrink container when scaling down
        : `${contentHeight}px`;

    return (
        <div
            className="doc-viewer-wrapper"
            ref={wrapperRef}
            style={{
                overflow: 'visible', // Allow content to be visible beyond container
                paddingBottom: extraSpace, // Add padding to extend background when scaled up
                height: scaleFactor < 1 ? containerHeight : 'auto', // Explicit height when scaling down
                minHeight: scaleFactor > 1 ? `${contentHeight * scaleFactor}px` : 'auto',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                backgroundColor: 'transparent', // Ensure this matches parent background
                marginBottom: scaleFactor < 1 ? '2rem' : '0', // Add some bottom margin when scaled down
                zIndex: 5
            }}
        >
            <div
                className="doc-viewer-scaler"
                style={{
                    transform: `scale(${scaleFactor})`,
                    transformOrigin: 'top center',
                    // Don't need margin bottom here since we're handling it in the container
                    pointerEvents: 'none', // Prevent iframe from capturing pointer events
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <iframe
                    ref={iframeRef}
                    title="Resume Document"
                    style={{
                        width: '794px', // A4 width in pixels
                        height: `${contentHeight}px`, // Dynamic height based on content
                        border: 'none',
                        background: 'white',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                        borderRadius: '8px',
                        display: 'block',
                        pointerEvents: 'auto', // Re-enable pointer events for iframe content
                    }}
                    scrolling="no" // Disable iframe scrolling
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

            {/* Background extender for scaled content */}
            {scaleFactor > 1 && (
                <div
                    style={{
                        position: 'absolute',
                        top: contentHeight,
                        left: 0,
                        right: 0,
                        height: `${(scaleFactor - 1) * contentHeight}px`,
                        background: 'transparent', // Inherit parent background
                        zIndex: 0
                    }}
                />
            )}
        </div>
    );
}