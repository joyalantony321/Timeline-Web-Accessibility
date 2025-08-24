interface HeaderProps {
  onThemeToggle: () => void;
  isDarkTheme: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onThemeToggle, isDarkTheme }) => {
  return (
    <header role="banner">
      <h1>Timeline</h1>
      <button 
        className="theme-toggle"
        onClick={onThemeToggle}
        aria-label={`Switch to ${isDarkTheme ? 'light' : 'dark'} theme`}
        aria-pressed={isDarkTheme}
      >
        {isDarkTheme ? '☀️' : '🌙'} Toggle Theme
      </button>
    </header>
  );
};