import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to AutoCodeDeploy</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the power of AI-driven development. Get in touch with us to learn more about how we're revolutionizing software creation.
            </p>
          </div>

          <div id="contact">
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  </React.StrictMode>
);