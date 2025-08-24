# Timeline-React

A modern React TypeScript timeline application that displays historical events with interactive modals and filtering capabilities.

## 📂 Project Structure
```
src/
├── components/          → React components
│   ├── Header.tsx      → App header with theme toggle
│   ├── Timeline.tsx    → Main timeline container
│   ├── EventMarker.tsx → Individual event cards
│   ├── EventModal.tsx  → Modal for detailed view
│   └── FilterPanel.tsx → Year filter navigation
├── services/           → Data services
│   └── eventService.ts → Event data fetching
├── types.ts           → TypeScript interfaces
├── App.tsx            → Main app component
├── App.css            → Global styles
└── main.tsx           → React entry point
public/
├── events.json        → Event data
└── index.html         → HTML template
```

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```
This will start the Vite dev server.
Open your browser at http://localhost:5173 (default port).

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

## ✨ Features

- **Interactive Timeline**: Click on any event to view detailed information
- **Modal Popups**: Detailed event descriptions with images
- **Year Navigation**: Filter events by different time periods
- **Theme Toggle**: Switch between light and dark themes
- **Responsive Design**: Works on desktop and mobile devices
- **TypeScript**: Full type safety throughout the application

## 🛠 Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Static typing for better development experience
- **Vite** - Fast build tool and dev server
- **CSS3** - Modern styling with CSS variables and grid layout
- **ES Modules** - Clean modular architecture


