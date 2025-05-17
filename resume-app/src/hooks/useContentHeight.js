import { useState, useEffect } from "react";

/**
 * Dynamically calculates the content height of an iframe based on the position
 * of the bottom-most element inside #portal-root.
 * 
 * - Uses MutationObserver to track DOM changes.
 * - Ensures updates only happen when necessary (prevents excessive re-renders).
 * 
 * @param {object} iframeRef - Ref to the iframe element.
 * @param {number} minHeight - Minimum height for the iframe (default: A4 page height in px).
 * @returns {number} Calculated iframe content height.
 */
export function useContentHeight(iframeRef, minHeight = 1123) {
    const [contentHeight, setContentHeight] = useState(minHeight);

    useEffect(() => {
        if (!iframeRef.current) return;
        const doc = iframeRef.current.contentDocument;
        if (!doc) return;

        const calculateHeight = () => {
            try {
                const elements = [...doc.querySelectorAll("#portal-root *")];
                const maxBottom = elements.reduce(
                    (height, el) => Math.max(height, el.getBoundingClientRect().bottom),
                    minHeight
                );

                setContentHeight(prev => (Math.abs(maxBottom - prev) > 10 ? maxBottom : prev));
            } catch (e) {
                console.error("Error measuring elements:", e);
            }
        };

        // Initial height calculation after a slight delay to ensure rendering is complete
        setTimeout(calculateHeight, 100);

        // Observe mutations and debounce height updates
        const observer = new MutationObserver(() => setTimeout(calculateHeight, 100));
        observer.observe(doc.body, { childList: true, subtree: true });
        // Clean up observer on unmount
        return () => observer.disconnect();
    }, [iframeRef, minHeight]);

    return contentHeight;
}