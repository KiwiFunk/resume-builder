"use client";

import { useRouter } from "next/navigation";
import { removeLocalData, setLocalData } from "@/utils/localData";
import data from "@/UserData";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      
      {/* Hero Section */}
      <div className="container mx-auto max-w-6xl px-6 pt-20 pb-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
              Resume <span className="text-blue-600">Builder</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl mx-auto">
              Create your resume in minutes! Customize templates, check for best practices, tailor your details, and download as a PDF.
            </p>

            {/* User Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none"
                onClick={() => router.push("/edit-details")}
              >
                <span className="flex items-center justify-center gap-2">
                  <i className="bi bi-pencil-fill"></i>
                  {!data.name ? "Create Resume" : "Edit Resume"}
                </span>
              </button>
              
              <button
                className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg shadow hover:bg-blue-50 transform hover:-translate-y-1 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none"
                onClick={() => router.push("/resume-display")}
              >
                <span className="flex items-center justify-center gap-2">
                  <i className="bi bi-eye-fill"></i>
                  Preview Resume
                </span>
              </button>
            </div>
          </div>
          
          {/* Hero Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-video">
              {/* Modern UI element */}
              <div className="absolute inset-0 bg-white rounded-xl shadow-xl p-6 flex flex-col transform rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="w-full h-4 bg-gray-100 rounded mb-4 flex items-center">
                  <div className="flex gap-1 ml-2">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3 flex-grow">
                  <div className="col-span-1 bg-blue-50 rounded"></div>
                  <div className="col-span-3 bg-gray-50 rounded p-3">
                    <div className="h-3 w-3/4 bg-blue-100 rounded mb-2"></div>
                    <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-5/6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="bi bi-pencil text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Easy Editing</h3>
              <p className="text-gray-600">Intuitive interface to add and edit your resume content with real-time preview.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="bi bi-layout-text-window-reverse text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Professional Templates</h3>
              <p className="text-gray-600">Choose from multiple professionally designed resume templates.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="bi bi-file-earmark-pdf text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Export as PDF</h3>
              <p className="text-gray-600">Download your resume as a PDF document for easy submission to applications.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Developer Tools Section - Kept but styled to match the design */}
      <div className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-700">Developer Tools</h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-5 py-2.5 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors flex items-center gap-2"
              onClick={() => {
                removeLocalData("userData")
                alert("User data deleted!");
              }}
            >
              <i className="bi bi-trash"></i>
              Reset Data
            </button>
            
            <button
              className="px-5 py-2.5 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-colors flex items-center gap-2"
              onClick={() => {
                setLocalData("userData", data);
                alert("Demo data loaded!");
              }}
            >
              <i className="bi bi-arrow-repeat"></i>
              Load Demo Data
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="container mx-auto max-w-6xl px-6 text-center">
          <p className="text-gray-500">© 2025 Resume Builder. Created by KiwiFunk!</p>
        </div>
      </footer>
    </main>
  );
}