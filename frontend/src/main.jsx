import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Definir o favicon dinamicamente
const link = document.createElement('link');
link.rel = 'icon';
link.href = '/static/favicon.ico';  // A URL para o FastAPI servir o favicon
document.head.appendChild(link);

// Renderiza o App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
