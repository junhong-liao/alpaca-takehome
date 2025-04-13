'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          ABA Session Management
        </h1>
        <p className="text-xl text-gray-700 mb-12">
          Streamline your ABA therapy sessions with easy client management, scheduling, and note generation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            href="/clients"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">Client Management</h2>
            <p className="text-gray-700">
              Add and manage clients, track availability, and maintain client information.
            </p>
          </Link>
          
          <Link 
            href="/sessions"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">Session Management</h2>
            <p className="text-gray-700">
              Schedule sessions, track progress, and generate session notes.
            </p>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Quick Start</h2>
          <ol className="text-left text-gray-700 space-y-2">
            <li>1. Add your first client in the Client Management section</li>
            <li>2. Set up client availability and contact information</li>
            <li>3. Schedule therapy sessions based on availability</li>
            <li>4. Generate and manage session notes</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
