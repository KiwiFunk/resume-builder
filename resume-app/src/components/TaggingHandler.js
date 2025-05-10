export default function TaggingHandler({ tagCollection }) {

    return (
        <div className="flex flex-wrap gap-2 mt-3">
            
            {tagCollection.map((tag, index) => (
                <div
                    key={index}
                    className="px-3 py-2 rounded-lg bg-gray-200 text-gray-700 text-sm font-medium shadow-sm transition duration-300 [&:has(button:hover)]:bg-red-500"
                >
                    <span className="transition duration-300 [&:has(button:hover)]:text-white">{tag}
                        <button
                            className="ml-2"
                            onClick={() => alert("Delete tag functionality coming soon!")}
                        >
                            <i className="bi bi-x text-red-500 cursor-pointer transition duration-300 hover:text-white"></i>
                        </button>
                    </span>
                </div>
            ))}

            {/* Add tag Button */}
            <button 
                className="px-3 py-2 rounded-lg bg-gray-300 text-gray-600 text-sm font-medium shadow-sm hover:bg-gray-400 transition duration-200"
                onClick={() => alert("Add tag functionality coming soon!")}
            >
                <i className="bi bi-plus"></i>
            </button>

            {/* Implement react-dnd to allow drag and drop of tags between groups */}
        </div>
    );
}