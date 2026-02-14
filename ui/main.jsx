import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              AI-Powered Development Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to streamline your development workflow,
              automate code generation, and deploy with confidence.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Code Accuracy</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
              <div className="text-4xl font-bold mb-2">10x</div>
              <div className="text-purple-100">Faster Deployment</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-green-100">AI Monitoring</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-orange-100">Integrations</div>
            </div>
          </div>

          {/* AI Capabilities Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
              Core AI Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Intelligent Code Generation */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligent Code Generation</h3>
                <p className="text-gray-600 mb-4">
                  AI analyzes your requirements and generates production-ready code following best practices and design patterns.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Multi-language support
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Context-aware suggestions
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Automatic documentation
                  </li>
                </ul>
              </div>

              {/* Automated Testing */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Testing</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive test suite generation with edge case detection and continuous validation of code quality.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Unit & integration tests
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Edge case detection
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Performance benchmarking
                  </li>
                </ul>
              </div>

              {/* Smart Debugging */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Debugging</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered error detection and resolution with real-time suggestions and automated fixes.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Root cause analysis
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Automated fix suggestions
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Stack trace analysis
                  </li>
                </ul>
              </div>

              {/* Code Refactoring */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Code Refactoring</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent code optimization and refactoring to improve maintainability and performance.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Code smell detection
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Performance optimization
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Pattern modernization
                  </li>
                </ul>
              </div>

              {/* Security Analysis */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Security Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive security scanning and vulnerability detection with automated remediation.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Vulnerability scanning
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Dependency auditing
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Compliance checking
                  </li>
                </ul>
              </div>

              {/* Natural Language Processing */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Natural Language Processing</h3>
                <p className="text-gray-600 mb-4">
                  Transform plain English requirements into functional code with advanced NLP capabilities.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Natural language queries
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Intent recognition
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Requirement parsing
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Interactive AI Pipeline Visualization */}
          <div className="bg-white rounded-xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              AI-Driven Development Pipeline
            </h2>
            <svg viewBox="0 0 1000 400" className="w-full h-auto">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Stage 1: Input */}
              <g>
                <circle cx="100" cy="200" r="60" fill="url(#grad1)" filter="url(#glow)">
                  <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite" />
                </circle>
                <text x="100" y="195" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Jira Ticket</text>
                <text x="100" y="215" textAnchor="middle" fill="white" fontSize="12">Input</text>
              </g>

              {/* Connection 1 */}
              <path d="M 160 200 L 290 200" stroke="url(#grad1)" strokeWidth="4" fill="none" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
              </path>
              <circle cx="0" cy="200" r="6" fill="#3B82F6">
                <animate attributeName="cx" from="160" to="290" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Stage 2: AI Analysis */}
              <g>
                <circle cx="350" cy="200" r="60" fill="url(#grad1)" filter="url(#glow)">
                  <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite" begin="0.5s" />
                </circle>
                <text x="350" y="195" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">AI Analysis</text>
                <text x="350" y="215" textAnchor="middle" fill="white" fontSize="12">Claude</text>
              </g>

              {/* Connection 2 */}
              <path d="M 410 200 L 540 200" stroke="url(#grad2)" strokeWidth="4" fill="none" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
              </path>
              <circle cx="0" cy="200" r="6" fill="#8B5CF6">
                <animate attributeName="cx" from="410" to="540" dur="2s" repeatCount="indefinite" begin="0.5s" />
              </circle>

              {/* Stage 3: Code Generation */}
              <g>
                <circle cx="600" cy="200" r="60" fill="url(#grad2)" filter="url(#glow)">
                  <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite" begin="1s" />
                </circle>
                <text x="600" y="195" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Generate</text>
                <text x="600" y="215" textAnchor="middle" fill="white" fontSize="12">Code</text>
              </g>

              {/* Connection 3 */}
              <path d="M 660 200 L 790 200" stroke="url(#grad3)" strokeWidth="4" fill="none" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
              </path>
              <circle cx="0" cy="200" r="6" fill="#EC4899">
                <animate attributeName="cx" from="660" to="790" dur="2s" repeatCount="indefinite" begin="1s" />
              </circle>

              {/* Stage 4: Deploy */}
              <g>
                <circle cx="850" cy="200" r="60" fill="url(#grad3)" filter="url(#glow)">
                  <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite" begin="1.5s" />
                </circle>
                <text x="850" y="195" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Deploy</text>
                <text x="850" y="215" textAnchor="middle" fill="white" fontSize="12">CI/CD</text>
              </g>

              {/* Process descriptions */}
              <text x="100" y="310" textAnchor="middle" fill="#475569" fontSize="13" fontWeight="500">Requirements</text>
              <text x="350" y="310" textAnchor="middle" fill="#475569" fontSize="13" fontWeight="500">Understanding</text>
              <text x="600" y="310" textAnchor="middle" fill="#475569" fontSize="13" fontWeight="500">Implementation</text>
              <text x="850" y="310" textAnchor="middle" fill="#475569" fontSize="13" fontWeight="500">Production</text>
            </svg>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Step 1</div>
                  <p className="text-sm text-gray-700">Ticket ingestion and requirement extraction</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600 mb-2">Step 2</div>
                  <p className="text-sm text-gray-700">AI analyzes context and architecture</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-pink-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-pink-600 mb-2">Step 3</div>
                  <p className="text-sm text-gray-700">Generate, test, and validate code</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600 mb-2">Step 4</div>
                  <p className="text-sm text-gray-700">Automated build and deployment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-xl p-8 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">Powered By Advanced AI</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl mb-2">🤖</div>
                <div className="font-semibold">Machine Learning</div>
                <div className="text-sm text-gray-400">Neural Networks</div>
              </div>
              <div>
                <div className="text-4xl mb-2">🧠</div>
                <div className="font-semibold">Deep Learning</div>
                <div className="text-sm text-gray-400">Pattern Recognition</div>
              </div>
              <div>
                <div className="text-4xl mb-2">⚡</div>
                <div className="font-semibold">Real-time Processing</div>
                <div className="text-sm text-gray-400">Instant Analysis</div>
              </div>
              <div>
                <div className="text-4xl mb-2">🔮</div>
                <div className="font-semibold">Predictive AI</div>
                <div className="text-sm text-gray-400">Smart Forecasting</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  </React.StrictMode>
);