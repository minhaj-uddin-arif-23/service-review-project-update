import { useState } from "react";

export default function Setting() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("English");

  const handleSave = () => {
    // Placeholder for save logic (e.g., update settings via API)
    alert("Settings saved!");
  };

  return (
    <main className="flex-1 p-4 sm:p-6 overflow-y-auto bg-black bg-opacity-90 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold text-white tracking-tight mb-6">Settings</h1>
        <div className="bg-black bg-opacity-80 rounded-xl shadow-lg p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium text-white">Preferences</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white text-opacity-80">Email Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications}
                    onChange={() => setNotifications(!notifications)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-black bg-opacity-50 rounded-full peer-checked:bg-blue-500 peer-checked:bg-opacity-50 transition-colors duration-200"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 peer-checked:translate-x-5"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white text-opacity-80">Dark Mode</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-black bg-opacity-50 rounded-full peer-checked:bg-blue-500 peer-checked:bg-opacity-50 transition-colors duration-200"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 peer-checked:translate-x-5"></div>
                </label>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">Language</h3>
            <div className="mt-4">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-3 py-2 bg-black bg-opacity-50 text-white border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}