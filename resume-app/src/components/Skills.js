export default function Skills({ data }) {
    return (
        <div className="mt-4 p-6 bg-white rounded shadow-lg w-full max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
            {data.skills.map((skill, index) => (
                <div key={index} className="mt-2 flex flex-row items-center">
                    <span className="rounded-full">{skill}</span>
                </div>
            ))}



            <ul className="list-disc list-inside mt-4">
                {data.skills.map((skill, index) => (
                    <li key={index} className="text-gray-700">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}