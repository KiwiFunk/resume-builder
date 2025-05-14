export default function DatasetSelector() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium text-gray-800 flex items-center">
          <i className="bi bi-file-earmark-text mr-2 text-blue-500"></i>
          Resume Profiles
        </h2>
      </div>
      
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          className="px-4 py-2 rounded-lg bg-blue-50 text-blue-800 border border-blue-300 font-medium text-sm transition-all flex items-center gap-2 relative"
          onClick={() => {alert("This is the current dataset we are using!")}}
        >
          <span>Resume 1</span>
          <span className="absolute -right-1 -top-1 w-2 h-2 bg-blue-600 rounded-full border border-white"></span>
        </button>

        <button
          type="button"
          className="px-4 py-2 rounded-lg bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 font-medium text-sm transition-all flex items-center gap-2"
          onClick={() => {alert("This could hold a different dataset if you were applying for multiple positions!")}}
        >
          <span>Resume 2</span>
        </button>

        <button
          type="button"
          className="px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 font-medium text-sm transition-all flex items-center gap-2"
          onClick={() => {alert("This button will allow you to add a new dataset!")}}
        >
          <i className="bi bi-plus"></i>
          <span>New Resume</span>
        </button>
      </div>
    </div>
  );
}