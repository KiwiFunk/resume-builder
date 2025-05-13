// Exports all the templates

import Modern from './Modern';
import Classic from './Classic';
import Creative from './Creative';
import Minimal from './Minimal';

export const templates = {
  modern: Modern,
  classic: Classic,
  creative: Creative,
  minimal: Minimal
};

// Default template when none specified
export const defaultTemplate = 'modern';

// Return the requested templeate or the default one if no match is found
export const getTemplate = (name) => {
  return templates[name] || templates[defaultTemplate];
};