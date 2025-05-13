export default function DeleteButton({ onDelete }) {
    return (
        <button 
            type="button"
            className="p-3 border border-gray-300 rounded text-red-500 hover:text-red-600 cursor-pointer hover:animate-wiggle hover:scale-110 transition-transform duration-100 ease-in-out"
            onClick={() => handleDeletion("socials", index)}
        >
            <i className="bi bi-trash"></i>
        </button>
    );
}