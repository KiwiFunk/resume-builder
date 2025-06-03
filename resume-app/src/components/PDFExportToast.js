// src/components/PDFExportToast.js
import { useState, useEffect } from 'react';

export function PDFExportToast({ isVisible, progress, onClose }) {
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(onClose, 2000);
      return () => clearTimeout(timer);
    }
  }, [progress, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200 min-w-[300px] z-50">
      <div className="flex items-center gap-3">
        {progress < 100 ? (
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-500 border-t-transparent"></div>
        ) : (
          <div className="h-5 w-5 bg-green-500 rounded-full flex items-center justify-center">
            <i className="bi bi-check text-white text-xs"></i>
          </div>
        )}
        
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">
            {progress < 100 ? 'Generating PDF...' : 'PDF Downloaded!'}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <i className="bi bi-x text-lg"></i>
        </button>
      </div>
    </div>
  );
}