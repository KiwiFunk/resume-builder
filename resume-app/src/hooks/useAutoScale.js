import { useState, useEffect } from 'react';

/**
 * A hook to handle automatic document scaling based on viewport width
 * 
 * @param {boolean} enabled - Whether auto-scaling is enabled
 * @param {number} documentWidth - Width of document to scale (default: 794px for A4)
 * @param {number} minScale - Minimum scale percentage (default: 30%)
 * @param {number} maxScale - Maximum scale percentage (default: 100%)
 * @param {number} margin - Margin to subtract from viewport (default: 48px)
 * @returns {number} The calculated scale percentage
 */
export function useAutoScale(
  enabled = true,
  documentWidth = 794,
  minScale = 30,
  maxScale = 100,
  margin = 48
) {
  const [scale, setScale] = useState(100);

  useEffect(() => {
    if (!enabled) return;

    const calculateOptimalScale = () => {
      const viewportWidth = window.innerWidth - margin;
      const optimalScale = Math.floor((viewportWidth / documentWidth) * 100);
      return Math.max(minScale, Math.min(maxScale, optimalScale));
    };

    const handleResize = () => {
      setScale(calculateOptimalScale());
    };

    // Initial calculation
    handleResize();
    
    // Update on resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [enabled, documentWidth, minScale, maxScale, margin]);

  return scale;
}