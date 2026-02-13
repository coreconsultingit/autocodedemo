import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center">
        <h2 className="text-4xl font-bold text-gray-800">Welcome to Home page</h2>
      </main>

      <Footer />
    </div>
  </React.StrictMode>
);