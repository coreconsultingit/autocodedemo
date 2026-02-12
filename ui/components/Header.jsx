import React from 'react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* AI Logo - Smaller and more refined */}
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-blue-600"
              >
                {/* CPU/Chip icon for AI */}
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                <rect x="9" y="9" width="6" height="6" />
                <line x1="9" y1="1" x2="9" y2="4" />
                <line x1="15" y1="1" x2="15" y2="4" />
                <line x1="9" y1="20" x2="9" y2="23" />
                <line x1="15" y1="20" x2="15" y2="23" />
                <line x1="20" y1="9" x2="23" y2="9" />
                <line x1="20" y1="14" x2="23" y2="14" />
                <line x1="1" y1="9" x2="4" y2="9" />
                <line x1="1" y1="14" x2="4" y2="14" />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-bold">AutoCodeDeploy</h1>
              <p className="text-xs text-blue-100">AI Rules the Future</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-200 transition-colors text-sm">Home</a>
            <a href="#contact" className="hover:text-blue-200 transition-colors text-sm">Contact</a>
            <a href="#about" className="hover:text-blue-200 transition-colors text-sm">About</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
