import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import BodySection from './interface'; // Adjust import as per your project structure
import LoadingAnimation from './loadinganimation'; // Adjust import as per your project structure
import Login from './loginpage'; // Import the Login component

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate loading process (e.g., fetching data, initializing state, etc.)
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after some time (simulating completion of loading)
    }, 3000); // Adjust the timeout as per your needs (e.g., 3000ms = 3 seconds)
  }, []);

  // Function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoading ? (
        <LoadingAnimation />
      ) : isLoggedIn ? (
        <>
          <Navbar onLogout={handleLogout} /> {/* Pass handleLogout as prop */}
          <BodySection />
          {/* Add more authenticated components */}
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
