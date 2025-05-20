export const setAccentColor = (hexColor) => {
  if (!hexColor) return;

  const lightAccent = hexToRgba(hexColor, 0.2);
  
  // Update the CSS variable at the document root
  document.documentElement.style.setProperty('--accent', hexColor);
  document.documentElement.style.setProperty('--accent-light', lightAccent);

  // Update iframes document root
  try {
    document.querySelectorAll('iframe').forEach(iframe => {
      if (iframe.contentDocument) {
        iframe.contentDocument.documentElement.style.setProperty('--accent', hexColor);
        iframe.contentDocument.documentElement.style.setProperty('--accent-light', lightAccent);
      }
    });
  } catch (e) {
    console.warn('Could not update accent color in iframes:', e);
  }

  function hexToRgba(hex, alpha = 1) {
    // Remove # if present
    hex = hex.replace('#', '');
    
    // Convert 3-digit hex to 6-digit
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    
    // Extract r, g, b components
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    // Return rgba string
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  
  // TODO - Calculate and set related shades for gradient uses.
  // color.js ?
};