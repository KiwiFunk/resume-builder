export default function ContactInformation({ data, className }) {
  return (
    <div className={`mt-6 p-6 bg-white rounded shadow-lg ${className}`}>
      {/* Name */}
      <h1 className="text-4xl font-extrabold text-gray-900">{data.name}</h1>
      {/* Title */}
      <h2 className="text-xl font-medium text-gray-600 mt-2">{data.title}</h2>
      {/* Contact Information */}
      <div className="mt-4 space-y-2">
        <p className="text-gray-700">{data.email || "email@service.com"}</p>
        <p className="text-gray-700">{data.phone || "+00 123 4567"}</p>
        <p className="text-gray-700 text-sm">{data.location || "Location, CA"}</p>
      </div>
    </div>
  );
}