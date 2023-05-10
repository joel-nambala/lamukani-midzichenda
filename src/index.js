import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/navigation.css';
import './css/home.css';
import './css/footer.css';
import './css/queries.css';
import './css/campaign.css';
import './css/donations.css';
import './css/news.css';
import './css/features.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
