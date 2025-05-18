export default function NoData() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full">
            <i className="bi bi-file-earmark-text text-2xl text-blue-600"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Resume Found</h2>
          <p className="text-gray-600 mb-6">Create your first resume by adding your details.</p>
          <button
            onClick={() => router.push("/edit-details")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span className="flex items-center justify-center gap-2">
              <i className="bi bi-plus-circle"></i>
              Create Resume Now
            </span>
          </button>
        </div>
      </div>
    )
}