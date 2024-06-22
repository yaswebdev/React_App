import React from 'react';
import { motion } from 'framer-motion';

const BodySection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="starry-background">
        <div className="stars"></div>
      </div>
      <motion.h3 
        className="text-3xl font-bold mb-4 text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Our App
      </motion.h3>
      <motion.p 
        className="text-lg text-gray-600 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Please enter your information in the field below.
      </motion.p>
      <motion.input 
        type="text"
        placeholder="Enter something..."
        className="p-3 w-full max-w-md border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default BodySection;
