import ContentContainer from "./components/ContentContainer.jsx";
import Tabs from "./components/Tabs.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600 flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold text-white mb-4">React Simple page</h1>
      <p className="text-lg text-white mb-8">Lorem ipsum dolor sit amet.</p>
      <ContentContainer />
      <Tabs />
    </div>
  );
}
