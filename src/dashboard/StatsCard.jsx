/* eslint-disable react/prop-types */
// StatsCard.jsx
export default function StatsCard({ title, value, change, color }) {
  const colorStyles = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    purple: 'bg-purple-100 text-purple-600',
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-semibold text-gray-800 mt-2">{value}</p>
      <p className={`text-sm ${colorStyles[color]} mt-2 inline-block px-2 py-1 rounded`}>
        {change}
      </p>
    </div>
  );
}