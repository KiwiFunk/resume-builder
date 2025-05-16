import { useEffect } from 'react';

/* Update to take component width as parameter as opposed to fixed A4 size */
export function useAutoScale(onAutoScale, wrapperRef) {
    useEffect(() => {
        const calculateOptimalScale = () => {
            const viewportWidth = window.innerWidth - 48;
            const a4Width = 794;
            return Math.max(30, Math.min(100, Math.floor((viewportWidth / a4Width) * 100)));
        };

        const updateScale = () => {
            if (onAutoScale && wrapperRef?.current) {
                onAutoScale(calculateOptimalScale());
            }
        };

        updateScale();
        window.addEventListener('resize', updateScale);

        return () => window.removeEventListener('resize', updateScale);
    }, [onAutoScale, wrapperRef]);
}