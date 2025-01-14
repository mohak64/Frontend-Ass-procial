// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from "react-dom/client" instead of "react-dom"
import './index.css';
import App from './App';

// Use createRoot to render your app
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
