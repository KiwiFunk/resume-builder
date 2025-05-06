export default function Education({ data }) {
    return (
        <div className="mt-6 p-6 bg-white rounded shadow-lg w-full max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-800">Education</h2>
            {data.education
                .sort((a, b) => new Date(b.startDate) - new Date(a.startDate)) // Sort by startDate (Descending)
                .map((edu, index) => (
                    <div key={index} className="mt-4 flex flex-row">

                        <div className="flex-grow">
                            <p className="text-gray-700 text-lg font-bold">{edu.degree}</p>
                            <p className="text-gray-700">{edu.institution}</p>
                            <p className="text-gray-700 text-sm">{edu.location}</p>
                        </div>

                        {/* Format the start and end dates using toLocaleDateString */}
                        <div className="flex-shrink">
                            <p className="text-gray-700 text-sm">
                                {new Date(edu.startDate).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                })}
                                {" "}
                                -
                                {" "}
                                {new Date(edu.endDate).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                })}
                            </p>
                        </div>  

                    </div>
                ))
            }
        </div>
    );
}