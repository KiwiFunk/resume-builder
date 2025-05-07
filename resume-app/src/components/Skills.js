export default function Skills({ data }) {
  return (
    <div className="mt-4 p-6 bg-white rounded-lg shadow-md w-full max-w-4xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Skillset</h2>
      <div className="grid grid-cols-2 gap-4">

        {/* Iterate through each skill group */}
        {data.skills.map((group, index) => (
          <div key={index} className="mb-2 w-full">

            {/* Group Name */}
            <h3 className="text-lg text-gray-800 mb-2">{group.groupName}</h3>

            {/* Iterate through skills in that group */}
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-2 rounded-full bg-(--accent) text-white text-sm font-semibold shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}