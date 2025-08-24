import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';

function App() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const triggerRef = useRef<HTMLElement>(null);

  useEffect(() => {
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.body.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  const handleEventClick = (event: Event) => {
    // Store reference to the clicked element
    triggerRef.current = document.activeElement as HTMLElement;
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const years = [...new Set(events.map(event => event.year))].sort();

  if (loading) {
    return (
      <div role="status" aria-live="polite">
        <p>Loading timeline...</p>
      </div>
    );
  }

  return (
    <div className="App" role="application" aria-label="Historical Timeline Application">
      <Header onThemeToggle={handleThemeToggle} isDarkTheme={isDarkTheme} />
      <FilterPanel years={years} onYearSelect={(year) => console.log('Year selected:', year)} />
      <Timeline 
        events={events} 
        onEventClick={handleEventClick} 
        selectedEventId={selectedEvent?.year}
      />
      <EventModal 
        event={selectedEvent} 
        onClose={handleCloseModal} 
        triggerRef={triggerRef}
      />
      <footer>
        <p>&copy; 2025 Timeline App</p>
      </footer>
    </div>
  );
}