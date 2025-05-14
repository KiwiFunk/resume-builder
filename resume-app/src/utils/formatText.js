/**
 * Formats a block of text into bullet points.
 * Splits the text into sentences based on punctuation marks followed by whitespace.
 * @param {string} text - The input text to format.
 * @param {boolean} prefixed - Whether to prefix each point with a hyphen.
 * @returns {string[]} - An array of formatted sentences.
 */
export function formatTextToPoints(text, prefixed = true) {
  if (!text) return [];
  
  const sentences = text.split(/[.!?] +/);
  
  return sentences.map((sentence, index) => {
    const trimmedSentence = sentence.trim();
    if (trimmedSentence === '') return '';
    
    const punctuation = index === sentences.length - 1 ? '' : '.';
    return prefixed 
      ? `- ${trimmedSentence}${punctuation}`
      : `${trimmedSentence}${punctuation}`;
  }).filter(sentence => sentence !== '');
}