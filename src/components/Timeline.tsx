interface TimelineProps {
  events: Event[];
  onEventClick: (event: Event) => void;
  selectedEventId?: number;
}

export const Timeline: React.FC<TimelineProps> = ({ events, onEventClick, selectedEventId }) => {
  return (
    <main role="main">
      <section 
        id="timeline" 
        role="region" 
        aria-label="Historical events timeline"
      >
        {events.map((event) => (
          <EventMarker
            key={event.year}
            event={event}
            onClick={() => onEventClick(event)}
            isSelected={selectedEventId === event.year}
          />
        ))}
      </section>
    </main>
  );
};