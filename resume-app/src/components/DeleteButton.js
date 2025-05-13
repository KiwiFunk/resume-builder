export default function DeleteButton({ onDelete }) {
    return (
        <button
            type="button"       // Prevents default 'submit' behavior
            className="
                p-3 border border-gray-300 rounded text-red-500 
                hover:text-red-600 cursor-pointer hover:animate-wiggle 
                hover:scale-110 transition-transform duration-100 ease-in-out"
            onClick={onDelete}  // No need for extra arrow function wrapping as it is a reference to the function
        >
            <i className="bi bi-trash"></i>
        </button>
    );
}