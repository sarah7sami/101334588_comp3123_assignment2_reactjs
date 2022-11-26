import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
{/* The following line can be included in your src/index.js or App.js file */}
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
