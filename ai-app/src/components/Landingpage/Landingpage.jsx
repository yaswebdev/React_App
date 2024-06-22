import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Welcome to Dashboard App</h1>
      <div className="space-x-4">
        <Link to="/login">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 shadow rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-700 hover:shadow-black">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-green-500 text-white font-bold py-2 px-4 shadow rounded-lg transition duration-300 ease-in-out transform hover:bg-green-700 hover:shadow-black">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
