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
        <div className="text-center px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">AUT-12</h2>
          <p className="text-xl text-gray-600">I want to simplify the home page display and just want current jira number and description on home page</p>
        </div>
      </main>

      <Footer />
    </div>
  </React.StrictMode>
);