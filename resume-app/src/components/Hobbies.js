export default function Hobbies({ data }) {
    return (
        <div className="mt-4 p-6 bg-white rounded shadow-lg w-full max-w-4xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">Hobbies</h2>
            <p className="text-gray-700">{data.hobbies}</p>
        </div>
    );
}