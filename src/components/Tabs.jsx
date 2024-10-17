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
        {activeTab === 1 && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, esse.
          </p>
        )}
        {activeTab === 2 && (
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        )}
        {activeTab === 3 && (
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        )}
        {activeTab === 4 && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            laudantium? Saepe, culpa.
          </p>
        )}
      </div>
    </div>
  );
}
