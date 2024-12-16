// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// )
// src/main.jsx
import React from 'react';

import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
createRoot(document.getElementById('root')).render(
   <StrictMode>
     <App />
     </StrictMode>
   )