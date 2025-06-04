"use client";
import { useState, useEffect } from 'react';

export default function PDFExportProgress({ isVisible, progress, message, onCancel }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  // Animate progress bar
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedProgress(progress);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setAnimatedProgress(0);
    }
  }, [progress, isVisible]);

  if (!isVisible) return null;

  const isComplete = progress >= 100;
  const isError = progress < 0;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 mx-4 w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {isError ? 'Export Failed' : isComplete ? 'Export Complete!' : 'Generating PDF'}
          </h3>
          {onCancel && !isComplete && !isError && (
            <button
              onClick={onCancel}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <i className="bi bi-x text-xl"></i>
            </button>
          )}
        </div>

        {/* Progress content */}
        <div className="space-y-4">
          {/* Icon */}
          <div className="flex justify-center">
            {isError ? (
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <i className="bi bi-exclamation-triangle text-red-600 text-2xl"></i>
              </div>
            ) : isComplete ? (
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                <i className="bi bi-check-circle text-green-600 text-2xl"></i>
              </div>
            ) : (
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-600 border-t-transparent"></div>
              </div>
            )}
          </div>

          {/* Progress bar */}
          {!isError && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>{message || 'Processing...'}</span>
                <span>{Math.min(progress, 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ease-out ${
                    isComplete ? 'bg-green-500' : 'bg-blue-500'
                  }`}
                  style={{ width: `${Math.min(animatedProgress, 100)}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Message */}
          <p className="text-center text-gray-600 text-sm">
            {isError 
              ? 'There was an error generating your PDF. Please try again.'
              : isComplete 
                ? 'Your resume has been downloaded successfully!'
                : 'Please wait while we generate your PDF...'
            }
          </p>

          {/* Action buttons */}
          {(isComplete || isError) && (
            <div className="flex justify-center pt-2">
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                {isError ? 'Try Again' : 'Done'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}