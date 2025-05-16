"use client";
import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useContentHeight } from '@/hooks/useContentHeight';

export default function DocumentViewer({ children }) {
    const iframeRef = useRef(null);
    const [portalTarget, setPortalTarget] = useState(null);

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

    return (
        <iframe 
            ref={iframeRef} 
            title="Resume Document" 
            style={{ 
                width: '794px', 
                height: `${contentHeight}px`, 
                border: 'none' 
            }}
        >
            {portalTarget && createPortal(children,portalTarget)}
        </iframe>
    );
}