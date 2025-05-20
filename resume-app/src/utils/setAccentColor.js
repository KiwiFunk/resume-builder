export const setAccentColor = (hexColor) => {
  if (!hexColor) return;
  
  // Update the CSS variable at the document root
  document.documentElement.style.setProperty('--accent', hexColor);
  
  // TODO - Calculate and set related shades for gradient uses.
  // color.js ?
};