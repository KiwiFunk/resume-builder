import { useState, useEffect } from "react";

/**
 * Dynamically calculates the content height of an iframe.
 */
export function useContentHeight(iframeRef, minHeight = 1123, margins) {
    const [contentHeight, setContentHeight] = useState(minHeight);
    const paddingBottom = 40;

    useEffect(() => {
        if (!iframeRef.current) return;
        
        // Wait for document to be available and portal root to exist
        const checkDocumentReady = () => {
            try {
                const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
                if (!doc || !doc.querySelector('#portal-root')) return false;
                return doc;
            } catch (e) {
                return false;
            }
        };
        
        // Calculate height function
        const calculateHeight = () => {
            const doc = checkDocumentReady();
            if (!doc) return false;
            
            try {
                const elements = [...doc.querySelectorAll("#portal-root *")];
                if (elements.length === 0) return false;
                
                const maxBottom = elements.reduce(
                    (height, el) => Math.max(height, el.getBoundingClientRect().bottom),
                    0
                );

                setContentHeight(Math.max(maxBottom + paddingBottom, minHeight));
                return true;
            } catch (e) {
                console.error("Error measuring elements:", e);
                return false;
            }
        };
        
        // Try every 50ms until successful or timeout (20 attempts = 2 seconds)
        let attempts = 0;
        const intervalId = setInterval(() => {
            if (calculateHeight() || attempts++ > 20) {
                clearInterval(intervalId);
                
                // Once successful, set up MutationObserver for future changes
                const doc = checkDocumentReady();
                if (doc) {
                    const observer = new MutationObserver(() => setTimeout(calculateHeight, 50));
                    observer.observe(doc.body, { childList: true, subtree: true });
                    
                    // Clean up observer on component unmount/change
                    return () => observer.disconnect();
                }
            }
        }, 50);
        
        // Clean up interval on component unmount/change
        return () => clearInterval(intervalId);
        
    }, [iframeRef, minHeight, margins]);

    return contentHeight;
}