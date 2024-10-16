import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="w-full max-w-lg">
      <div className="flex justify-between">
        {[1, 2, 3, 4].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 text-white ${
              activeTab === tab
                ? "bg-indigo-700"
                : "bg-indigo-500 hover:bg-indigo-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            Tab {tab}
          </button>
        ))}
      </div>
      <div className="mt-4 bg-white p-4 rounded shadow">
        {activeTab === 1 && <p>No content here yet.</p>}
        {activeTab === 2 && <p>Content for Tab 2.</p>}
        {activeTab === 3 && <p>Some interesting text for Tab 3!</p>}
        {activeTab === 4 && <p>More content in Tab 4.</p>}
      </div>
    </div>
  );
}
