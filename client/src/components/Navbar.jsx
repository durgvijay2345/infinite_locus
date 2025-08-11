import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username] = useState("Govind");

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link to="/">MyWebsite</Link>
      </div>

      {/* Links */}
      <div className="flex items-center gap-6">
        <Link className="hover:text-gray-300" to="/contact">Contact</Link>
        <Link className="hover:text-gray-300" to="/about">About Us</Link>
        <Link className="hover:text-gray-300" to="/testimonials">Testimonials</Link>
        <Link className="hover:text-gray-300" to="/register">Registration</Link>

        {isLoggedIn ? (
          <>
            <Link className="hover:text-gray-300" to="/profile">Profile ({username})</Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="hover:text-gray-300" to="/login">Login</Link>
            <Link className="hover:text-gray-300" to="/signup">Signup</Link>
            <button
              onClick={handleLogin}
              className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
            >
              Simulate Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
