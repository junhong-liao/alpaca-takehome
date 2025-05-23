"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminPage() {
  const [count, setCount] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<null | { success: boolean; generated: number; error?: string }>(null);

  async function handleGenerateNotes() {
    setIsLoading(true);
    setResult(null);
    
    try {
      const response = await fetch("/api/admin/generate-notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ count }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to generate notes");
      }
      
      setResult({
        success: true,
        generated: data.generated,
      });
    } catch (error) {
      console.error("Error generating notes:", error);
      setResult({
        success: false,
        generated: 0,
        error: error instanceof Error ? error.message : "Unknown error occurred",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Back to Home
        </Link>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Generate Test Notes</h2>
        
        <div className="mb-4">
          <label htmlFor="count" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Notes (1-50)
          </label>
          <input
            type="number"
            id="count"
            min="1"
            max="50"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value) || 1)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <button
          onClick={handleGenerateNotes}
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isLoading ? "Generating..." : "Generate Notes"}
        </button>
        
        {result && (
          <div className={`mt-4 p-4 rounded-md ${result.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
            {result.success ? (
              <p>Successfully generated {result.generated} notes!</p>
            ) : (
              <p>Error: {result.error}</p>
            )}
          </div>
        )}
        
        <div className="mt-6">
          <p className="text-sm text-gray-500">
            This tool will generate random session notes using predefined templates. 
            Use it to populate your database for testing the frontend.
          </p>
        </div>
      </div>
    </div>
  );
} 