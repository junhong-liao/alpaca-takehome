'use client';

import { useState } from 'react';
import ClientList from '@/components/clients/ClientList';
import ClientForm from '@/components/clients/ClientForm';

export default function ClientsPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Clients</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          {showForm ? 'View Clients' : 'Add Client'}
        </button>
      </div>

      {showForm ? (
        <ClientForm onSuccess={() => setShowForm(false)} />
      ) : (
        <ClientList />
      )}
    </div>
  );
} 