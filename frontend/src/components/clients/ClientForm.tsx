'use client';

import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Client, Address, Availability } from '@/types/client';

interface ClientFormProps {
  onSuccess?: () => void;
  initialData?: Client;
}

export default function ClientForm({ onSuccess, initialData }: ClientFormProps) {
  const queryClient = useQueryClient();
  const [availabilities, setAvailabilities] = useState<Availability[]>(
    initialData?.availabilities || [{ day_of_the_week: 1, start_time: '09:00', end_time: '17:00' }]
  );

  const createClient = useMutation({
    mutationFn: async (data: Omit<Client, 'id'>) => {
      const response = await fetch('http://localhost:8003/api/v1/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to create client');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
      onSuccess?.();
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const clientData = {
      name: formData.get('name') as string,
      address: {
        street_name: formData.get('street_name') as string,
        city: formData.get('city') as string,
        state: formData.get('state') as string,
        zip_code: formData.get('zip_code') as string,
      },
      availabilities,
    };

    createClient.mutate(clientData);
  };

  const addAvailability = () => {
    setAvailabilities([
      ...availabilities,
      { day_of_the_week: 1, start_time: '09:00', end_time: '17:00' },
    ]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-900">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          defaultValue={initialData?.name}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Address</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="street_name" className="block text-sm font-medium text-gray-900">
              Street
            </label>
            <input
              type="text"
              name="street_name"
              id="street_name"
              required
              defaultValue={initialData?.address.street_name}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-900">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              required
              defaultValue={initialData?.address.city}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-900">
              State
            </label>
            <input
              type="text"
              name="state"
              id="state"
              required
              maxLength={2}
              defaultValue={initialData?.address.state}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="zip_code" className="block text-sm font-medium text-gray-900">
              ZIP Code
            </label>
            <input
              type="text"
              name="zip_code"
              id="zip_code"
              required
              pattern="[0-9]{5}"
              defaultValue={initialData?.address.zip_code}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Availabilities</h3>
          <button
            type="button"
            onClick={addAvailability}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            Add Availability
          </button>
        </div>
        {availabilities.map((availability, index) => (
          <div key={index} className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-900">Day</label>
              <select
                value={availability.day_of_the_week}
                onChange={(e) => {
                  const newAvailabilities = [...availabilities];
                  newAvailabilities[index] = {
                    ...availability,
                    day_of_the_week: parseInt(e.target.value),
                  };
                  setAvailabilities(newAvailabilities);
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
              >
                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                  <option key={day} value={day} className="text-gray-900">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][
                      day - 1
                    ]}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900">Start Time</label>
              <input
                type="time"
                value={availability.start_time}
                onChange={(e) => {
                  const newAvailabilities = [...availabilities];
                  newAvailabilities[index] = {
                    ...availability,
                    start_time: e.target.value,
                  };
                  setAvailabilities(newAvailabilities);
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900">End Time</label>
              <input
                type="time"
                value={availability.end_time}
                onChange={(e) => {
                  const newAvailabilities = [...availabilities];
                  newAvailabilities[index] = {
                    ...availability,
                    end_time: e.target.value,
                  };
                  setAvailabilities(newAvailabilities);
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          disabled={createClient.isPending}
        >
          {createClient.isPending ? 'Saving...' : 'Save Client'}
        </button>
      </div>
    </form>
  );
} 