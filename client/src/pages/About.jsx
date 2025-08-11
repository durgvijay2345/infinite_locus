import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
          About Us
        </h1>

        <p className="text-gray-700 mb-6 text-lg">
          Welcome to <span className="font-semibold">CampusConnect</span>, a real-time campus event management platform designed to keep students, faculty, and administrators connected like never before. Our mission is to make campus life more vibrant, organized, and accessible through instant event updates and role-based access control.
        </p>

        {/* Role Based Access Section */}
        <h2 className="text-2xl font-semibold mb-4">Role-Based Access</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>Students:</strong> View upcoming events, register instantly, receive reminders, and share feedback.
          </li>
          <li>
            <strong>Faculty:</strong> Create and manage academic or extracurricular events, approve student-led initiatives, and track attendance.
          </li>
          <li>
            <strong>Admins:</strong> Oversee all campus events, manage user roles, moderate content, and ensure smooth operations.
          </li>
        </ul>

        {/* Real-Time Features Section */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Real-Time Features
        </h2>
        <p className="text-gray-700 mb-6">
          With our real-time system, event announcements, schedule changes, and updates are instantly visible to the right people. No delays, no confusion — just accurate, timely information at your fingertips.
        </p>

        {/* Benefits Section */}
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-blue-600">Instant Notifications</h3>
            <p className="text-gray-600 text-sm mt-2">
              Get notified in real-time about events relevant to your role.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-blue-600">Easy Registration</h3>
            <p className="text-gray-600 text-sm mt-2">
              Sign up for events in one click, with automatic reminders.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-blue-600">Role-Based Security</h3>
            <p className="text-gray-600 text-sm mt-2">
              Access is tailored to your role, keeping data secure and relevant.
            </p>
          </div>
        </div>

        {/* Closing */}
        <p className="mt-8 text-gray-700 text-center">
          At CampusConnect, we believe campus life should be engaging, inclusive, and effortless to navigate. Join us in transforming the way events are experienced on campus.
        </p>
      </div>
    </div>
  );
}

export default About;
