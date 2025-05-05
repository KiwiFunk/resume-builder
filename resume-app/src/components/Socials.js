"use client";   // Enables React hooks in Next.js 13+

export default function Socials({ data, classes }) {

  return (
    <div className="mt-6 p-6 bg-white rounded shadow-lg w-full max-w-xl">
      {/* Map the social media objects (object, index value) */}
      {data.socials.map((social, index) => (
        <div key={index} className={`flex items-center mt-4 ${classes}`}>
          <a href={social.url} target="_blank" rel="noopener noreferrer">
            <p className="mb-4 text-gray-700">{social.platform}</p>
          </a>
        </div>
      ))}
    </div>
  );
}