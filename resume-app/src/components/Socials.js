"use client";   // Enables React hooks in Next.js 13+

export default function Socials({ data, classes }) {

  function formatURL(url) {
    // Format the URL to remove "https://" and "www." if present using regex.
    // If a slash is present at the end of URL (check with $), remove it as well.
    return url.replace(/^(https?:\/\/)?(www\.)?(\/)?/, "").replace(/\/$/, "");
  }

  return (
    <div className="mt-6 p-6 bg-white rounded shadow-lg w-full max-w-xl">
      {/* Map the social media objects (object, index value) */}
      {data.socials.map((social, index) => (
        <div key={index} className={`flex items-center mt-4 ${classes}`}>
          <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <img src={`/icons/${social.platform.toLowerCase()}.svg`} alt={social.platform} className="w-6 h-6" />
            <span className="text-gray-700">{formatURL(social.url)}</span>
          </a>
        </div>
      ))}
    </div>
  );
}