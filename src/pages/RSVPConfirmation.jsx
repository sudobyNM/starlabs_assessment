import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEvents } from '../context/EventContext';

function RSVPConfirmation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getEventById } = useEvents();
  
  const event = getEventById(id);

  if (!event) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h2>
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

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Confirmation Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Registration Confirmed!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          You have successfully registered for this event. We'll send you updates and reminders.
        </p>

        {/* Event Summary */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Event Summary</h2>
          <div className="space-y-3">
            <div>
              <span className="font-medium text-gray-900">Event:</span>
              <span className="ml-2 text-gray-700">{event.title}</span>
            </div>
            <div>
              <span className="font-medium text-gray-900">Date:</span>
              <span className="ml-2 text-gray-700">{formatDate(event.date)}</span>
            </div>
            <div>
              <span className="font-medium text-gray-900">Location:</span>
              <span className="ml-2 text-gray-700">{event.location}</span>
            </div>
            <div>
              <span className="font-medium text-gray-900">Host:</span>
              <span className="ml-2 text-gray-700">{event.host}</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">What's Next?</h3>
          <ul className="text-blue-800 space-y-2">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              You'll receive a confirmation email shortly
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              We'll send you reminders before the event
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              You can view or cancel your registration anytime
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(`/event/${event.id}`)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            View Event Details
          </button>
          <button
            onClick={() => navigate('/')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-md font-medium transition-colors"
          >
            Browse More Events
          </button>
        </div>
      </div>
    </div>
  );
}

export default RSVPConfirmation;
