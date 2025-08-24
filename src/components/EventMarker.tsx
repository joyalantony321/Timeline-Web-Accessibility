interface EventMarkerProps {
  event: Event;
  onClick: () => void;
  isSelected: boolean;
}

export const EventMarker: React.FC<EventMarkerProps> = ({ event, onClick, isSelected }) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <article 
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={`View details for ${event.title} from ${event.year}`}
      aria-current={isSelected ? 'true' : undefined}
      className={isSelected ? 'selected' : ''}
    >
      <div className="event-marker"></div>
      <h2 aria-label={`Year ${event.year}`}>{event.year}</h2>
      <h3>{event.title}</h3>
      <figure>
        <img 
          src={event.imageURL} 
          alt={`Historical image representing ${event.title}`} 
          width={200}
          loading="lazy"
        />
      </figure>
      <p>{event.description.substring(0, 60)}...</p>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        aria-label={`Learn more about ${event.title}`}
      >
        Learn More
      </button>
    </article>
  );
};