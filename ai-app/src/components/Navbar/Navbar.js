import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-full w-full shadow p-4">
      <h1 className="font-bold text-xl">Dashboard App</h1>
      <div className="flex items-center space-x-4">
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link></li>
          <li><Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link></li>
        </ul>
        <ul className="flex space-x-4">
          <li><Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link></li>
        </ul>
        <Link to="/dashboard">
          <button className="bg-black text-white font-bold py-2 px-4 shadow rounded-lg transition duration-300 ease-in-out transform hover:bg-gray-700 hover:shadow-black">
            Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
