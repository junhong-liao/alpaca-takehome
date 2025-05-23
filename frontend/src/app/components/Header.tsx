"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow p-4 flex justify-end relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 focus:outline-none"
        aria-label="Menu"
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute right-4 top-full mt-2 bg-white border rounded shadow-lg w-40">
          <Link href="/admin" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Admin Dashboard
          </Link>
        </div>
      )}
    </header>
  );
} 