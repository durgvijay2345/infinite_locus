import React from "react";

// --- Data Structure Improvements ---
// 1. Removed the duplicate event.
// 2. Added a unique 'id' to each feedback item for a more stable 'key' prop.
// 3. Used placeholder images that will actually load.
const previousEvents = [
  {
    id: 1,
    name: "Tech Summit 2023",
    date: "March 15, 2023",
    image: "pic3.png",
    feedback: [
      {
        id: "fb1-1",
        user: "Alice",
        avatar: "pic12.png",
        comment: "Amazing event! Learned a lot and met great people.",
      },
      {
        id: "fb1-2",
        user: "Bob",
        avatar: "pic12.png",
        comment: "Well organized and the sessions were very insightful.",
      },
    ],
  },
  {
    id: 2,
    name: "Innovation Expo 2022",
    date: "November 10, 2022",
    image: "pic3.png",
    feedback: [
      {
        id: "fb2-1",
        user: "Charlie",
        avatar: "https://placehold.co/40x40/E63946/FFFFFF?text=C",
        comment: "Loved the interactive workshops and the hands-on demos!",
      },
      {
        id: "fb2-2",
        user: "Dana",
        avatar: "https://placehold.co/40x40/1D3557/FFFFFF?text=D",
        comment: "Great networking opportunities. Connected with many industry leaders.",
      },
    ],
  },
];

// --- SVG Icon for Quotes ---
const QuoteIcon = () => (
    <svg className="w-8 h-8 text-slate-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
);


// --- Main Testimonials Component ---
const App = () => {
  return (
    // Use a softer background color and more vertical padding
    <div className="px-4 sm:px-6 py-16 sm:py-24 bg-slate-100 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 tracking-tight">
                Event Testimonials
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                See what participants say about our previous events!
            </p>
        </div>

        {/* --- Events Grid --- */}
        {/* Increased gap for better spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {previousEvents.map((event) => (
            <div
              key={event.id}
              // Softer, more modern shadow and rounding
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              {/* Event image */}
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                {/* Event Details */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {event.name}
                  </h2>
                  <p className="text-slate-500 mt-1 font-medium">
                    {event.date}
                  </p>
                </div>

                {/* Feedback Section */}
                <div className="space-y-5">
                  {event.feedback.map((fb) => (
                    <div
                      key={fb.id}
                      className="flex items-start space-x-4"
                    >
                      <img src={fb.avatar} alt={fb.user} className="w-12 h-12 rounded-full border-2 border-white shadow-md flex-shrink-0" />
                      <div className="flex-1">
                        <blockquote className="bg-slate-50 p-4 rounded-lg border-l-4 border-blue-500 relative">
                            <p className="text-slate-700 italic">"{fb.comment}"</p>
                            <cite className="mt-2 block text-right font-semibold text-slate-800 not-italic">— {fb.user}</cite>
                        </blockquote>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
