import React from 'react';
import ReactDOM from 'react-dom/client';
import ContactForm from './components/ContactForm.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md mb-4">
            auto-code-deploy
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Welcome to AutoCode Demo</h1>
        </div>
        <ContactForm />
      </div>
    </div>
  </React.StrictMode>
);