
export default function Projects({ data }) {
    return (
        <div className="mt-4 p-6 bg-white rounded shadow-lg w-full max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
            {data.projects.map((project, index) => (
                <div key={index} className="mt-4 flex flex-row">

                    <div className="flex-grow">
                        <p className="text-gray-700 text-lg font-bold">{project.title}</p>
                        <p className="text-gray-700 text-sm">{project.skills.join(" || ")}</p>
                        <a href={project.url} aria-label={`Link to ${project.title}`} target="_blank" rel="noopener noreferrer">
                            <p className="text-gray-700">{project.url}</p> 
                        </a>
                        <p className="text-gray-700 text-sm">{project.description}</p>
                    </div>

                </div>
            ))}
        </div>
    );
}