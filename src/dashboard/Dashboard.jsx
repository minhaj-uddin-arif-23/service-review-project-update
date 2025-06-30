import Header from "./Header";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}
