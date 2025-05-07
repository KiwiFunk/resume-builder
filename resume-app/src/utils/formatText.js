/**
 * Formats a block of text into bullet points.
 * Splits the text into sentences based on punctuation marks followed by whitespace.
 * @param {string} text - The input text to format.
 * @returns {string[]} - An array of formatted sentences prefixed with a hyphen.
 */
export function formatTextToPoints(text) {
    const sentences = text.split(/[.!?] +/);
    return sentences.map((sentence, index) =>
      index === sentences.length - 1 ? `- ${sentence.trim()}` : `- ${sentence.trim()}.`
    );
  }