export default function Training({ data }) {
    return (
        <div className="mt-4 p-6 bg-white rounded shadow-lg w-full max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-800">Courses & Training</h2>
            {data.training
                .sort((a, b) => new Date(b.startDate) - new Date(a.startDate)) // Sort by startDate (Descending)
                .map((course, index) => (
                    <div key={index} className="mt-4 flex flex-row">

                        <div className="flex-grow">
                            <p className="text-gray-700 text-lg font-bold">{course.title}</p>
                            <p className="text-gray-700">{course.institution}</p>
                            <p className="text-gray-700 text-sm">{course.description}</p>
                        </div>

                        {/* Format the start and end dates using toLocaleDateString */}
                        <div className="flex-shrink">
                            <p className="text-gray-700 text-sm whitespace-nowrap">
                                {new Date(course.startDate).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                })}
                                {" "}
                                -
                                {" "}
                                {new Date(course.endDate).toLocaleDateString("en-US", {
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