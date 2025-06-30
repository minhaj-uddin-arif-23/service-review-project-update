import DataTable from "./DataTable";
import StatsCard from "./StatsCard";


export default function MainContent() {
  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatsCard title="Total Users" value="1,234" change="+5%" color="blue" />
        <StatsCard title="Revenue" value="$12,345" change="+10%" color="green" />
        <StatsCard title="Orders" value="567" change="-2%" color="yellow" />
        <StatsCard title="Active Sessions" value="89" change="+3%" color="purple" />
      </div>
      <DataTable />
    </main>
  );
}