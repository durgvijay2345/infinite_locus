import React from 'react';
import { IoSearch, IoChevronBack, IoChevronForward, IoCalendarOutline, IoMusicalNotes, IoPeople, IoSparklesOutline, IoGameControllerOutline } from 'react-icons/io5';

const UniEventsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header and Hero Section with Gradient Background */}
      <div className="relative bg-gradient-to-br from-[#E13B82] to-[#342280] text-white pb-24">
        
        {/* Hero Content */}
        <main className="container mx-auto px-6 pt-12">
          <div className="relative w-full max-w-xs mb-10">
            <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Find an event..."
              className="w-full bg-white/20 backdrop-blur-sm rounded-full py-3 pl-12 pr-4 placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Card: Featured Event */}
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-white/10">
                <IoChevronBack size={28} />
              </button>
              <div className="flex-grow">
                <h2 className="text-5xl font-bold">TechFusion 2025</h2>
                <p className="text-lg opacity-80 mt-1">Harc</p>
                <p className="mt-4 text-lg">
                  The biggest annual tech festival featuring hackathons, workshops, and expert talks.
                </p>
                <button className="mt-6 border border-white rounded-md px-6 py-2 font-semibold hover:bg-white hover:text-black transition-colors">
                  View Details
                </button>
              </div>
              <button className="p-2 rounded-full hover:bg-white/10">
                <IoChevronForward size={28} />
              </button>
            </div>

            {/* Right Card: About Uni Events */}
            <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl text-center">
              <h3 className="text-4xl font-bold">CampusConnect</h3>
              <p className="mt-4 leading-relaxed">
                Your central hub for all university happenings in India. Discover, connect, and participate in events that shape your future.
              </p>
              <button className="mt-6 bg-[#E83E8C] text-white font-semibold px-8 py-3 rounded-md hover:bg-pink-600 transition-colors">
                Our Mission
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Filter Bar - Overlaps the hero section */}
      <div className="container mx-auto px-6 -mt-16 relative z-10">
        <div className="bg-white shadow-xl rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">When:</label>
            <div className="relative">
              <select className="w-full appearance-none bg-gray-100 border border-gray-200 rounded-md py-3 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                <option>Choose a Month</option>
              </select>
              <IoCalendarOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Institution:</label>
            <select className="w-full appearance-none bg-gray-100 border border-gray-200 rounded-md py-3 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              <option>Search by College</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category:</label>
            <select className="w-full appearance-none bg-gray-100 border border-gray-200 rounded-md py-3 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              <option>All Categories</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Category Icons Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full text-white shadow-lg mb-3">
                <IoMusicalNotes size={40} />
            </div>
            <p className="font-semibold text-gray-800">Cultural Fests</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full text-white shadow-lg mb-3">
                <IoPeople size={40} />
            </div>
            <p className="font-semibold text-gray-800">Tech Summits</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full text-white shadow-lg mb-3">
                <IoSparklesOutline size={40} />
            </div>
            <p className="font-semibold text-gray-800">College Fests</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full text-white shadow-lg mb-3">
                <IoGameControllerOutline size={40} />
            </div>
            <p className="font-semibold text-gray-800">Sports Meets</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section Header */}
      <section className="container mx-auto px-6 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-center border-b pb-4 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">What's Next?</h2>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <select className="bg-gray-100 border border-gray-200 rounded-md py-2 px-3 focus:outline-none">
                    <option>Sort by Date</option>
                </select>
                <select className="bg-gray-100 border border-gray-200 rounded-md py-2 px-3 focus:outline-none">
                    <option>Most Viewed</option>
                </select>
                 <select className="bg-gray-100 border border-gray-200 rounded-md py-2 px-3 focus:outline-none">
                    <option>Newly Added</option>
                </select>
            </div>
        </div>
        {/* Placeholder for event cards */}
        <div className="text-center text-gray-500 py-10">
            New event cards will be displayed here.
        </div>
      </section>
    </div>
  );
};

export default UniEventsPage;