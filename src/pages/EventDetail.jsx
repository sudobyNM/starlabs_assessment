import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEvents } from '../context/EventContext';

function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getEventById, rsvpEvent, cancelRsvp, isRSVP } = useEvents();
  
  const event = getEventById(id);
  const isRegistered = isRSVP(parseInt(id));

  if (!event) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h2>
        <p className="text-gray-600 mb-6">The event you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium"
        >
          Back to Events
        </button>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTypeColor = (type) => {
    const colors = {
      'Workshop': 'bg-purple-100 text-purple-800',
      'Music': 'bg-pink-100 text-pink-800',
      'Sports': 'bg-green-100 text-green-800',
      'Meetup': 'bg-blue-100 text-blue-800',
      'Fitness': 'bg-orange-100 text-orange-800',
      'Social': 'bg-teal-100 text-teal-800',
      'Entertainment': 'bg-red-100 text-red-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const handleRSVP = () => {
    if (isRegistered) {
      cancelRsvp(event.id);
    } else {
      rsvpEvent(event.id);
      navigate(`/rsvp-confirmation/${event.id}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Events
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-white">
          <div className="flex items-start justify-between mb-4">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${getTypeColor(event.type)} bg-white bg-opacity-20 text-white`}>
              {event.type}
            </span>
            {isRegistered && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                ✓ Registered
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>
          <p className="text-blue-100 text-lg">Hosted by {event.host}</p>
        </div>

        {/* Content */}
        <div className="px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {event.description}
              </p>

              {/* RSVP Section */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {isRegistered ? 'You\'re registered for this event!' : 'Join this event'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {isRegistered 
                    ? 'We\'ll send you updates about this event. You can cancel your registration anytime.'
                    : 'Click the button below to register for this event and receive updates.'
                  }
                </p>
                <button
                  onClick={handleRSVP}
                  className={`w-full md:w-auto px-8 py-3 rounded-md font-medium text-lg transition-colors ${
                    isRegistered
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isRegistered ? 'Cancel Registration' : 'Register for Event'}
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Event Details */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Date</p>
                      <p className="text-sm text-gray-600">{formatDate(event.date)}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Location</p>
                      <p className="text-sm text-gray-600">{event.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Host</p>
                      <p className="text-sm text-gray-600">{event.host}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Category</p>
                      <p className="text-sm text-gray-600">{event.type}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Share Event */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share Event</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Invite your friends to join this event!
                </p>
                <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md font-medium transition-colors">
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
