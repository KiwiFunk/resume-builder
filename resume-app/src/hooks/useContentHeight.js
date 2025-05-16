import { useState, useEffect } from 'react';

/* 
This hook is used to calculate the content height of an iframe. 
It uses the ResizeObserver API to observe changes in the iframe's content and updates the height accordingly. 
The minimum height is set to 1123 pixels, which is the height of an A4 page. 
*/
export function useContentHeight(iframeRef) {
    const [contentHeight, setContentHeight] = useState(1123); // Default A4 height

    useEffect(() => {
        if (!iframeRef.current) return;

        const updateHeight = () => {
            const iframeDoc = iframeRef.current.contentDocument;
            if (!iframeDoc) return;

            const newHeight = Math.max(
                iframeDoc.body.scrollHeight,
                iframeDoc.documentElement.scrollHeight,
                iframeDoc.body.offsetHeight,
                iframeDoc.documentElement.offsetHeight,
                1123 // Minimum A4 height
            );

            setContentHeight(newHeight);
        };

        const observer = new ResizeObserver(updateHeight);
        observer.observe(iframeRef.current.contentDocument.body);

        return () => observer.disconnect();
    }, [iframeRef]);

    return contentHeight;
}