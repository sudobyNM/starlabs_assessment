import React, { createContext, useContext, useReducer } from 'react';
import eventsData from '../data/events.json';

const EventContext = createContext();

const initialState = {
  events: eventsData.events,
  filteredEvents: eventsData.events,
  rsvpEvents: [],
  filters: {
    search: '',
    type: '',
    location: '',
    date: ''
  }
};

function eventReducer(state, action) {
  switch (action.type) {
    case 'SET_FILTERS':
      const newFilters = { ...state.filters, ...action.payload };
      const filtered = filterEvents(state.events, newFilters);
      return {
        ...state,
        filters: newFilters,
        filteredEvents: filtered
      };
    
    case 'RSVP_EVENT':
      const isAlreadyRSVP = state.rsvpEvents.some(id => id === action.payload);
      if (isAlreadyRSVP) return state;
      
      return {
        ...state,
        rsvpEvents: [...state.rsvpEvents, action.payload]
      };
    
    case 'CANCEL_RSVP':
      return {
        ...state,
        rsvpEvents: state.rsvpEvents.filter(id => id !== action.payload)
      };
    
    case 'ADD_EVENT':
      const newEvent = {
        ...action.payload,
        id: Math.max(...state.events.map(e => e.id)) + 1
      };
      const updatedEvents = [...state.events, newEvent];
      return {
        ...state,
        events: updatedEvents,
        filteredEvents: filterEvents(updatedEvents, state.filters)
      };
    
    default:
      return state;
  }
}

function filterEvents(events, filters) {
  return events.filter(event => {
    const matchesSearch = !filters.search || 
      event.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      event.description.toLowerCase().includes(filters.search.toLowerCase()) ||
      event.host.toLowerCase().includes(filters.search.toLowerCase());
    
    const matchesType = !filters.type || event.type === filters.type;
    const matchesLocation = !filters.location || event.location === filters.location;
    const matchesDate = !filters.date || event.date === filters.date;
    
    return matchesSearch && matchesType && matchesLocation && matchesDate;
  });
}

export function EventProvider({ children }) {
  const [state, dispatch] = useReducer(eventReducer, initialState);
  
  const setFilters = (filters) => {
    dispatch({ type: 'SET_FILTERS', payload: filters });
  };
  
  const rsvpEvent = (eventId) => {
    dispatch({ type: 'RSVP_EVENT', payload: eventId });
  };
  
  const cancelRsvp = (eventId) => {
    dispatch({ type: 'CANCEL_RSVP', payload: eventId });
  };
  
  const addEvent = (eventData) => {
    dispatch({ type: 'ADD_EVENT', payload: eventData });
  };
  
  const getEventById = (id) => {
    return state.events.find(event => event.id === parseInt(id));
  };
  
  const isRSVP = (eventId) => {
    return state.rsvpEvents.includes(eventId);
  };
  
  const value = {
    ...state,
    setFilters,
    rsvpEvent,
    cancelRsvp,
    addEvent,
    getEventById,
    isRSVP
  };
  
  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
}
