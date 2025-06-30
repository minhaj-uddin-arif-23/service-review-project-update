export default function DataTable() {
  const data = [
    { id: 1, name: 'John Smith', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Active' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Pending' },
  ];

  return (
    <div className="bg-black bg-opacity-80 rounded-xl shadow-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white">Recent Users</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white divide-opacity-20">
          <thead className="bg-black bg-opacity-90">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-black bg-opacity-70 divide-y divide-white divide-opacity-20">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-white hover:bg-opacity-10 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{item.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      item.status === 'Active'
                        ? 'bg-white bg-opacity-20 text-white'
                        : item.status === 'Inactive'
                        ? 'bg-white bg-opacity-10 text-white'
                        : 'bg-white bg-opacity-15 text-white'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}