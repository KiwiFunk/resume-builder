// Template handling module

import { use } from 'react';

// Template registry with metadata
export const templateRegistry = {
  modern: {                                                                 // Template ID
    name: "Modern",                                                         // Template name string
    component: () => import('./Modern').then(mod => mod.default),           // Lazy load the component only when it is called. Create promise with import(), then resolve with .then. Extract default export once loaded.
    description: "Clean and professional design with modern styling",       // Description string for the template
    thumbnail: "/thumbnails/modern.png",                                    // Path to the thumbnail image (We will implement this later)  
    useAccent: true,                                                        // Boolean to indicate if the template uses an accent color
  },
  classic: {
    name: "Classic",
    component: () => import('./Classic').then(mod => mod.default),
    description: "Traditional resume layout with timeless appeal",
    thumbnail: "/thumbnails/classic.png",
    useAccent: false,
  },
  creative: {
    name: "Creative",
    component: () => import('./Creative').then(mod => mod.default),
    description: "Colorful design with unique styling elements",
    thumbnail: "/thumbnails/creative.png",
    useAccent: true,
  },
  minimal: {
    name: "Minimal",
    component: () => import('./Minimal').then(mod => mod.default),
    description: "Clean, minimalist design with ample white space",
    thumbnail: "/thumbnails/minimal.png",
    useAccent: false,
  },
  nordic: {
    name: "Nordic",
    component: () => import('./Nordic').then(mod => mod.default),
    description: "Clean, minimal design inspired by Nordic aesthetics",
    thumbnail: "/thumbnails/nordic.png",
    useAccent: false,
  },
  meridian: {
    name: "Meridian",
    component: () => import('./Meridian').then(mod => mod.default),
    description: "Modern design with a focus on clarity and readability",
    thumbnail: "/thumbnails/meridian.png",
    useAccent: true,
  },

  // Add new templates to this registry
  
};

// Return a list of all available templates with their metadata
export const getAllTemplates = () => {
  return Object.entries(templateRegistry).map(([id, template]) => ({
    id,
    name: template.name,
    description: template.description,
    thumbnail: template.thumbnail
  }));
};

// Default template when none specified
export const defaultTemplate = 'modern';

// Return the requested template component or the default one if no match is found
export const getTemplate = async (name) => {
  const templateData = templateRegistry[name] || templateRegistry[defaultTemplate];
  return await templateData.component();
};