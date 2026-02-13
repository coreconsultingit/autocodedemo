import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center py-8">
        <div className="text-center px-4 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">AUT-12</h2>
          <p className="text-xl text-gray-600 mb-12">I want to simplify the home page display and just want current jira number and description on home page</p>

          {/* Code Flow Visualization */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Code Flow Pipeline</h3>
            <svg viewBox="0 0 800 300" className="w-full h-auto">
              {/* Definitions for animations and gradients */}
              <defs>
                <linearGradient id="boxGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="boxGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="boxGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#059669" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Source Control Box */}
              <g>
                <rect x="20" y="100" width="180" height="100" rx="10" fill="url(#boxGradient1)" />
                <text x="110" y="140" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Source Control</text>
                <text x="110" y="165" textAnchor="middle" fill="white" fontSize="14">(Git/GitHub)</text>
              </g>

              {/* Arrow 1 with animated dots */}
              <g>
                <path d="M 200 150 L 300 150" stroke="#64748B" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                <circle cx="0" cy="150" r="5" fill="#3B82F6">
                  <animate attributeName="cx" from="200" to="300" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Orchestrator Box */}
              <g>
                <rect x="310" y="100" width="180" height="100" rx="10" fill="url(#boxGradient2)" />
                <text x="400" y="140" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Orchestrator</text>
                <text x="400" y="165" textAnchor="middle" fill="white" fontSize="14">(Claude/AI)</text>
              </g>

              {/* Arrow 2 with animated dots */}
              <g>
                <path d="M 490 150 L 590 150" stroke="#64748B" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                <circle cx="0" cy="150" r="5" fill="#8B5CF6">
                  <animate attributeName="cx" from="490" to="590" dur="2s" repeatCount="indefinite" begin="0.5s" />
                  <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
                </circle>
              </g>

              {/* CI/CD Box */}
              <g>
                <rect x="600" y="100" width="180" height="100" rx="10" fill="url(#boxGradient3)" />
                <text x="690" y="140" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">CI/CD</text>
                <text x="690" y="165" textAnchor="middle" fill="white" fontSize="14">(Build/Deploy)</text>
              </g>

              {/* Arrow marker definition */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#64748B" />
                </marker>
              </defs>

              {/* Data flow indicators (smaller animated circles) */}
              <circle cx="0" cy="150" r="3" fill="#60A5FA">
                <animate attributeName="cx" from="200" to="300" dur="2s" repeatCount="indefinite" begin="0.3s" />
                <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" begin="0.3s" />
              </circle>
              <circle cx="0" cy="150" r="3" fill="#A78BFA">
                <animate attributeName="cx" from="490" to="590" dur="2s" repeatCount="indefinite" begin="0.8s" />
                <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" begin="0.8s" />
              </circle>

              {/* Process labels */}
              <text x="250" y="130" textAnchor="middle" fill="#475569" fontSize="12">Push Code</text>
              <text x="540" y="130" textAnchor="middle" fill="#475569" fontSize="12">Generate & Test</text>
            </svg>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold text-blue-900">Step 1: Commit</p>
                <p className="text-blue-700">Code pushed to repository</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="font-semibold text-purple-900">Step 2: Orchestrate</p>
                <p className="text-purple-700">AI analyzes and generates code</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-900">Step 3: Deploy</p>
                <p className="text-green-700">Build, test, and deploy automatically</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  </React.StrictMode>
);