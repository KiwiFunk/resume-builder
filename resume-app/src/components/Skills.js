export default function Skills({ data }) {
    // Expand to work with groups of skills in the future
    // Iterate through groups, then through skills in each group
    // User can create titled groups of skills. e.g. "Languages", "Frameworks", etc.
    return (
      <div className="mt-4 p-6 bg-white rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Skillset</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-(--accent) text-white text-sm font-semibold shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  }