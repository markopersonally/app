import image1 from "../images/image_mountain.png";
import image2 from "../images/image_tree.png";
import image3 from "../images/image_sun.png";
import image4 from "../images/image_river.png";

const contentItems = [
  {
    id: 1,
    title: "Mountain",
    description:
      "A stylized mountain, symbolizing strength and adventure, with a modern, minimalist feel.",
    img: image1,
  },
  {
    id: 2,
    title: "Tree",
    description:
      "A simple tree icon, representing growth and nature, in clean, light colors.",
    img: image2,
  },
  {
    id: 3,
    title: "Sun",
    description:
      "A minimalistic sun symbol, radiating warmth and energy with soft pastel tones.",
    img: image3,
  },
  {
    id: 4,
    title: "River",
    description:
      "A flowing river design, evoking calmness and movement, in a soft, soothing palette.",
    img: image4,
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
