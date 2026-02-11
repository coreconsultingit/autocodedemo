import React from 'react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* AI Logo */}
            <div className="relative">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-blue-600"
                >
                  {/* Brain/AI icon */}
                  <path d="M12 2a3 3 0 0 0-3 3v1a3 3 0 0 0-3 3v1a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3V9a3 3 0 0 0-3-3V5a3 3 0 0 0-3-3z" />
                  <circle cx="9" cy="12" r="1" fill="currentColor" />
                  <circle cx="15" cy="12" r="1" fill="currentColor" />
                  <path d="M9 16c.5.5 1.5 1 3 1s2.5-.5 3-1" />
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-green-400 rounded-full w-4 h-4 border-2 border-white"></div>
            </div>

            <div>
              <h1 className="text-2xl font-bold">AutoCode Demo</h1>
              <p className="text-sm text-blue-100">AI Rules the Future</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-200 transition-colors">Home</a>
            <a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a>
            <a href="#about" className="hover:text-blue-200 transition-colors">About</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
