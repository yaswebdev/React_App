import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'; // Corrected import
import './App.css';
import Navbar from './components/Navbar/Navbar';
import BodySection from './components/Home/home'; // Adjust import as per your project structure
import LoadingAnimation from './components/Loading/loadinganimation'; // Adjust import as per your project structure
import Login from './components/Login/login'; // Import the Login component
import Register from './components/Register/register'; // Import the Register component
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Dashboard from './components/Dashboard/dashboard';
import LandingPage from './components/Landingpage/Landingpage'; // Import the LandingPage component
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
    <BrowserRouter>
      <div className="App">
        {isLoading ? (
          <LoadingAnimation />
        ) : isLoggedIn ? (
          <>
            <Navbar onLogout={handleLogout} /> {/* Pass handleLogout as prop */}
            <Routes>
              <Route path="/" element={<BodySection />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
