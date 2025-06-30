import DataTable from "./DataTable";
import StatsCard from "./StatsCard";

export default function MainContent() {
  return (
    <main className="flex-1 p-4 sm:p-6 overflow-y-auto bg-black bg-opacity-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
        <StatsCard title="Total Users" value="1,234" change="+5%" opacity="20" />
        <StatsCard title="Revenue" value="$12,345" change="+10%" opacity="25" />
        <StatsCard title="Orders" value="567" change="-2%" opacity="15" />
        <StatsCard title="Active Sessions" value="89" change="+3%" opacity="30" />
      </div>
      <DataTable />
    </main>
  );
}