import React from "react";

const contentItems = [
  {
    id: 1,
    title: "Item 1",
    description: "Description 1",
    img: "",
  },
  {
    id: 2,
    title: "Item 2",
    description: "Description 2",
    img: "",
  },
  {
    id: 3,
    title: "Item 3",
    description: "Description 3",
    img: "",
  },
  {
    id: 4,
    title: "Item 4",
    description: "Description 4",
    img: "",
  },
];

export default function ContentContainer() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      {contentItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
        >
          <img src={item.img} alt={item.title} className="w-12 h-12 mb-2" />
          <h2 className="font-semibold">{item.title}</h2>
          <p className="text-sm text-gray-500">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
