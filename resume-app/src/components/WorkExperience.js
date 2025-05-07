import { formatTextToPoints } from "../utils/formatText";

export default function WorkExperience({ data }) {

    return (
        <div className="mt-4 p-6 bg-white rounded shadow-lg w-full max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
            {data.experience
                .sort((a, b) => new Date(b.startDate) - new Date(a.startDate)) // Sort by startDate (Descending)
                .map((job, index) => (
                    <div key={index} className="mt-4 flex flex-row">

                        <div className="flex-grow">
                            <h3 className="text-gray-700 text-lg font-bold">{job.title}</h3>
                            <p className="text-gray-700">{job.company}</p>
                            <p className="text-gray-700 text-sm">{job.location}</p>

                            {formatTextToPoints(job.description).map((point, index) => (
                                <p key={index} className="text-gray-700 text-sm">{point}</p>
                            ))}
                        </div>

                        <div className="flex-shrink">
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
                        </div>

                    </div>
                ))
            }
        </div>
    );
}

