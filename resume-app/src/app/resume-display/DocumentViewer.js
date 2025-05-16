"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function DocumentViewer({ children }) {
    
    const [ref, setRef] = useState(null);                   // State to hold the iframe reference
    const container = ref?.contentWindow?.document?.body    // Get the body of the iframe document

    useEffect(() => {
        if (!iframeDocument) return;

        const head = iframeDocument.head;

        // Copy all stylesheets from the main document
        document.querySelectorAll('link[rel="stylesheet"]').forEach(sheet => {
            const clonedSheet = iframeDocument.createElement('link');
            clonedSheet.rel = sheet.rel;
            clonedSheet.href = sheet.href;
            head.appendChild(clonedSheet);
        });

    }, [iframeDocument]);
    
    return (
        <iframe ref={setRef}>
            {/* Use a portal to render the children inside the iframe */}
            { container && createPortal(children, container) }
        </iframe>
    );
}