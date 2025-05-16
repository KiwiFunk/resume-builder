import { useState, useEffect } from 'react';

/* 
This hook is used to calculate the content height of an iframe. 
It uses the ResizeObserver API to observe changes in the iframe's content and updates the height accordingly. 
The minimum height is set to 1123 pixels, which is the height of an A4 page. 
*/
export function useContentHeight(iframeRef, minHeight = 1123) {
    const [contentHeight, setContentHeight] = useState(minHeight); // Min A4 height

    useEffect(() => {
        if (!iframeRef.current) return;

        const iframeDoc = iframeRef.current.contentDocument;
        if (!iframeDoc) return;

        const updateHeight = () => {
            const newHeight = Math.min(
                Math.max(iframeDoc.documentElement.scrollHeight, minHeight),
                iframeDoc.documentElement.clientHeight + 50 // Adds a small buffer instead of excessive space
            );

            setContentHeight(newHeight);
        };

        // ResizeObserver for visual changes
        const resizeObserver = new ResizeObserver(updateHeight);
        resizeObserver.observe(iframeDoc.documentElement);

        // MutationObserver for content changes
        const mutationObserver = new MutationObserver(updateHeight);
        mutationObserver.observe(iframeDoc.body, { childList: true, subtree: true });

        return () => {
            resizeObserver.disconnect();
            mutationObserver.disconnect();
        };
    }, [iframeRef]);

    return contentHeight;
}