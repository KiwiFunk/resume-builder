export const setAccentColor = (hexColor) => {
  if (!hexColor) return;
  
  // Update the CSS variable at the document root
  document.documentElement.style.setProperty('--accent', hexColor);

  // Update iframes document root
  try {
    document.querySelectorAll('iframe').forEach(iframe => {
      if (iframe.contentDocument) {
        iframe.contentDocument.documentElement.style.setProperty('--accent', hexColor);
      }
    });
  } catch (e) {
    console.warn('Could not update accent color in iframes:', e);
  }
  
  // TODO - Calculate and set related shades for gradient uses.
  // color.js ?
};