"use client";
import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useContentHeight } from '@/hooks/useContentHeight';

export default function DocumentViewer({ children, scale = 100 }) {
    const iframeRef = useRef(null);
    const [portalTarget, setPortalTarget] = useState(null);

    const pageColor = '#fff';   // Page color
    const margins = 42;         // Variable to set page margins (Control with prop. Compact, wide, etc.)

    // Set up iframe on component mount
    useEffect(() => {
        if (!iframeRef.current) return;
        
        const iframe = iframeRef.current;
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

        // Create target div for React portal
        const root = iframeDoc.createElement('div');
        root.id = 'portal-root';
        iframeDoc.body.appendChild(root);
        setPortalTarget(root);

        // iframe head ref for injecting styles
        const head = iframeDoc.head

        // Inject CSS styling for portal-root
        const styleTag = iframeDoc.createElement("style");
        styleTag.textContent = `
            body {
                background-color: transparent !important;
            }
            #portal-root {
            /* I have no idea why the bottom margin is also applying to the top - portal related issue? */
                padding: ${margins/2}px ${margins}px 0px ${margins}px;
            }
        `;
        iframeDoc.head.appendChild(styleTag);

        // Inject CSS into the iframe
        // Next.js bundles all CSS dependencies into its own stylesheets, we only need to copy those.
        document.querySelectorAll('link[rel="stylesheet"]').forEach(sheet => {
            if (!sheet.href?.includes('_next')) return;     // Skip non-Next.js styles
            const link = sheet.cloneNode(true);             // Clone the stylesheet node
            iframeDoc.head.appendChild(link);               // Append cloned link to iframe
        });

    }, []);

    // Dynamically calculate container height using useContentHeight hook
    let contentHeight = useContentHeight(iframeRef, 1123); // Min A4 height

    // Calculate scaling
    const scaleFactor = scale / 100;
    const containerHeight = contentHeight * scaleFactor;
    const containerWidth = 794 * scaleFactor; // A4 width in px

    return (
    <div className="flex justify-center">
        {/* Fixed-width container sized exactly to match the scaled document */}
        <div style={{ 
            width: `${794 * scaleFactor}px`, 
            height: `${contentHeight * scaleFactor}px`,
            position: 'relative', // For absolute positioning
            overflow: 'hidden'
        }}>
            {/* Absolutely positioned iframe with transform */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0, 
                width: '794px',
                height: `${contentHeight}px`,
                transform: `scale(${scaleFactor})`,
                transformOrigin: 'top left', // Key change: transform from top-left
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                borderRadius: '8px',
                backgroundColor: pageColor,
            }}>
                <iframe 
                    ref={iframeRef} 
                    title="Resume Document" 
                    style={{ 
                        width: '100%',
                        height: '100%',
                        border: 'none', 
                    }}
                >
                    {portalTarget && createPortal(children, portalTarget)}
                </iframe>
            </div>
        </div>
    </div>
);
}