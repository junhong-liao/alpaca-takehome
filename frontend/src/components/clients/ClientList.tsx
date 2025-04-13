'use client';

import { useQuery } from '@tanstack/react-query';
import { Client } from '@/types/client';

async function fetchClients(): Promise<Client[]> {
  const response = await fetch('http://localhost:8003/api/v1/clients');
  if (!response.ok) {
    throw new Error('Failed to fetch clients');
  }
  return response.json();
}

export default function ClientList() {
  const { data: clients, isLoading, error } = useQuery({
    queryKey: ['clients'],
    queryFn: fetchClients,
  });

  if (isLoading) {
    return <div className="flex justify-center p-8">Loading clients...</div>;
  }

  if (error) {
    return <div className="text-red-600 p-4">Error loading clients: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients?.map((client) => (
          <div
            key={client.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
            <p className="text-gray-700">{client.address.city}, {client.address.state}</p>
            <div className="mt-2">
              <h4 className="font-medium text-gray-900">Availabilities:</h4>
              <ul className="text-sm text-gray-700">
                {client.availabilities.map((availability, index) => (
                  <li key={index}>
                    Day {availability.day_of_the_week}: {availability.start_time} - {availability.end_time}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 