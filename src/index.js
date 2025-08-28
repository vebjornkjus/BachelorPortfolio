import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Global error handlers for unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  // Prevent the default browser behavior (console error)
  event.preventDefault();
});

window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);