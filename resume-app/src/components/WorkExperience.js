export default function WorkExperience({ data }) {

    function formatJobDescription(string) {
        /*
        This function takes a string and splits it into sentences based on punctuation marks (., !, ?).
        Use a regular expression (/ ... /) to match sentences and return an array of sentences.
        ^ inside the [] matches anything that is not .!?, and then the second [] matches the punctuation mark.
        The g (global) flag makes sure that all matches are found, not just the first one.
        If null, return an empty array.
        */
        const sentences = string.match(/[^.!?]+[.!?]/g) || [];
        // Use map to return a new array with each sentence prefixed by a hyphen and trimmed of whitespace
        return sentences.map((sentence) => `- ${sentence.trim()}`);
    }

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

                    {formatJobDescription(job.description).map((point) => (
                        <p className="text-gray-700 text-sm">{point}</p>
                    ))}

                </div>
            ))}
        </div>
    );
}

