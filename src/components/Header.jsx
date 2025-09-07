import React from 'react';
import { Link } from 'react-router-dom';
import { useEvents } from '../context/EventContext';

function Header() {
  const { rsvpEvents } = useEvents();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-pink-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm"></span>
            </div>
            <span className="text-xl font-bold text-gray-900">Community Events</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Explore Events
            </Link>
            <Link 
              to="/create" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Create Event
            </Link>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>My RSVPs:</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                {rsvpEvents.length}
              </span>
            </div>
          </nav>
          
          {/* Mobile menu button
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
