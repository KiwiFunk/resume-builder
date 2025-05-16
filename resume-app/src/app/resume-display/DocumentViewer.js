"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function DocumentViewer({ children }) {
    const [ref, setRef] = useState(null);                   // State to hold iframe reference
    const container = ref?.contentWindow?.document?.body;   // Get iframe body

    useEffect(() => {
        if (!ref?.contentWindow?.document) return;
        
        const iframeDoc = ref.contentWindow.document;
        const head = iframeDoc.head;

        // Inject Tailwind CSS into the iframe
        const tailwindLink = iframeDoc.createElement('link');
        tailwindLink.rel = 'stylesheet';
        tailwindLink.href = "https://cdn.tailwindcss.com";

        head.appendChild(tailwindLink);
        
    }, [ref]);

    return (
        <iframe ref={setRef} style={{ width: "100%", height: "600px", border: "none" }}>
            {container && createPortal(children, container)}
        </iframe>
    );
}