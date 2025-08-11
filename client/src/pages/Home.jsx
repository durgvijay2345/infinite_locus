import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to MyWebsite
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Your one-stop destination for information, connection, and growth.
        </p>
        <Link
          to="/register"
          className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Explore</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Link
            to="/about"
            className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <p className="text-gray-600">Learn more about our mission and vision.</p>
          </Link>

          <Link
            to="/contact"
            className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="text-gray-600">Reach out to us anytime.</p>
          </Link>

          <Link
            to="/testimonials"
            className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">Testimonials</h3>
            <p className="text-gray-600">See what our customers are saying.</p>
          </Link>

          <Link
            to="/register"
            className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">Register</h3>
            <p className="text-gray-600">Join our community today.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
