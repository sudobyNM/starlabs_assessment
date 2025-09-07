# Local Community Events

A React-based application for discovering and joining local community events. Built as part of a Frontend Developer Intern assessment.

## 🚀 Features

### Core Features
- **Browse Events**: View a curated list of local events in a responsive grid layout
- **Advanced Filtering**: Filter events by type, location, date, and search by keywords
- **Event Details**: Detailed event pages with comprehensive information
- **RSVP System**: Register for events with confirmation pages
- **Pagination**: Navigate through events with pagination controls

### Bonus Features
- **Create Events**: Form to create new events with validation
- **State Management**: Context API for managing application state
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, professional interface using TailwindCSS

## 🛠 Tech Stack

- **React 18** with Vite for fast development
- **React Router** for navigation
- **Context API** for state management
- **TailwindCSS** for styling
- **JSON** mock data for events

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd local-community-events
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🏗 Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Navigation header
│   ├── EventCard.jsx           # Event display card
│   └── SearchAndFilter.jsx     # Search and filter controls
├── context/
│   └── EventContext.jsx        # Global state management
├── data/
│   └── events.json             # Mock event data
├── pages/
│   ├── Home.jsx                # Main events listing page
│   ├── EventDetail.jsx         # Individual event details
│   ├── CreateEvent.jsx         # Event creation form
│   └── RSVPConfirmation.jsx    # RSVP success page
├── App.jsx                     # Main app component
└── main.jsx                    # App entry point
```

## 🎯 Key Features Implemented

### 1. Event Browsing
- Grid layout with responsive design
- Event cards showing key information
- Category badges with color coding
- Registration status indicators

### 2. Search & Filter System
- Real-time text search across title, description, and host
- Filter by event type (Workshop, Music, Sports, etc.)
- Filter by location and date
- Clear filters functionality

### 3. Event Management
- Detailed event pages with full information
- RSVP functionality with state persistence
- Registration confirmation flow
- Cancel registration option

### 4. Event Creation (Bonus)
- Comprehensive form with validation
- Real-time error handling
- Date validation (no past dates)
- Character count for description

### 5. State Management
- Context API for global state
- Persistent RSVP tracking
- Filter state management
- Event data managementS

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface
- **Color-coded Categories**: Visual distinction between event types
- **Interactive Elements**: Hover effects and smooth transitions
- **Loading States**: Visual feedback during form submissions
- **Error Handling**: Clear error messages and validation

## 📊 Sample Data

The application includes 20 sample events across various categories:
- Workshops (Digital Marketing, Blockchain, etc.)
- Music (Jazz Night, Guitar Workshop)
- Sports (Trek, Marathon, Chess)
- Meetups (Networking, Photography)
- Fitness (Yoga, Meditation)
- Entertainment (Comedy, Poetry)
- Social (Beach Cleanup)

## 🚀 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Assignment Requirements Met

✅ React-based application with Vite  
✅ React Router for navigation  
✅ Context API for state management  
✅ TailwindCSS for styling  
✅ Mobile-first responsive design  
✅ Event browsing with grid layout  
✅ Search and filter functionality  
✅ Event detail pages  
✅ RSVP/Registration system  
✅ Confirmation pages  
✅ Pagination implementation  
✅ **Bonus**: Event creation form with validation  

## 🎯 Future Enhancements

- User authentication system
- Event categories management
- Email notifications
- Calendar integration
- Social sharing features
- Event reviews and ratings
- Map integration for locations
- Real-time updates

---

Built with ❤️ for the Frontend Developer Intern Assessment
