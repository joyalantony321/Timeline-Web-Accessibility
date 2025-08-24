export const FilterPanel: React.FC<FilterPanelProps> = ({ years, onYearSelect }) => {
  return (
    <nav role="navigation" aria-label="Timeline year filter">
      <p id="filter-label">Select Year:</p>
      <ul role="list" aria-labelledby="filter-label">
        {years.map((year) => (
          <li 
            key={year} 
            role="button"
            tabIndex={0}
            onClick={() => onYearSelect(year)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onYearSelect(year);
              }
            }}
            aria-label={`Filter events from year ${year}`}
          >
            {year}
          </li>
        ))}
      </ul>
    </nav>
  );
};