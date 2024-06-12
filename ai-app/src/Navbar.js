import './App.css';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-full w-full shadow p-4">
    <h1 className="font-bold text-xl">Dashboard App</h1>
    <div className="flex items-center space-x-4">
      <ul className="flex space-x-4">
        <li><a href="/home" className="text-gray-700 hover:text-gray-900">Home</a></li>
        <li><a href="/about" className="text-gray-700 hover:text-gray-900">About</a></li>
      </ul>
      <ul className="flex space-x-4">
        <li><a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
      </ul>
      <a href="/dashboard">
        <button className="bg-black text-white font-bold py-2 px-4 shadow rounded-lg transition duration-300 ease-in-out transform hover:bg-gray-700 hover:shadow-black">
          Dashboard
        </button>
      </a>
    </div>
  </div>
);
};
