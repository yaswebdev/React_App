import React from 'react';
import { motion } from 'framer-motion';
import { FaRunning } from 'react-icons/fa'; // Replace with your preferred running icon

const LoadingAnimation = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FaRunning className="text-6xl mb-4" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-xl">Finish What You Start</p>
      </motion.div>
    </div>
  );
};

export default LoadingAnimation;
