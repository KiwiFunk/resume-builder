export default function WorkExperience({ data }) {
    return (
        <div className="mt-6 p-6 bg-white rounded shadow-lg w-full max-w-xl">
            <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
            {data.experience.map((job, index) => (
                <div key={index} className="mt-4">
                    <p className="text-gray-700 text-lg font-bold">{job.title}</p>
                    <p className="text-gray-700">{job.company}</p>
                    <p className="text-gray-700 text-sm">{job.location}</p>

                    {/* Format the start and end dates using toLocaleDateString */}
                    <p className="text-gray-700 text-sm">
                        {new Date(job.startDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        })}
                        {" "}
                        -
                        {" "}
                        {new Date(job.endDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        })}
                    </p>

                    {/* Create helper function to format the job description and turn into hyphenated points */}
                    <p className="text-gray-700 text-sm">{job.description}</p>

                </div>
            ))}
        </div>
    );
}

