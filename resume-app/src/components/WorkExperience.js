export default function WorkExperience({ data }) {

    function formatJobDescription(string) {
       //Use regular expression to split the string into sentences based on punctuation marks followed by whitespace
        const sentences = string.split(/[.!?] +/);
        // Use map to return a new array with each sentence prefixed by a hyphen and trimmed of whitespace, re-apply the period.
        return sentences.map((sentence, index) => 
            index === sentences.length - 1 ? `- ${sentence.trim()}` : `- ${sentence.trim()}.`
        );
    }

    return (
        <div className="mt-6 p-6 bg-white rounded shadow-lg w-full max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
            {data.experience
                .sort((a, b) => new Date(b.startDate) - new Date(a.startDate)) // Sort by startDate (Descending)
                .map((job, index) => (
                    <div key={index} className="mt-4 flex flex-row">

                        <div className="flex-grow">
                            <p className="text-gray-700 text-lg font-bold">{job.title}</p>
                            <p className="text-gray-700">{job.company}</p>
                            <p className="text-gray-700 text-sm">{job.location}</p>

                            {formatJobDescription(job.description).map((point) => (
                            <p className="text-gray-700 text-sm">{point}</p>
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

