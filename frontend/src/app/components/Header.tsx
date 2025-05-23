"use client";
import { useState } from "react";
import Link from "next/link";
import { Inter } from 'next/font/google';

// Load Inter font for branding
const inter = Inter({ subsets: ['latin'], weight: '700' });

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center relative">
      {/* Brand */}
      <div className={`${inter.className} text-2xl font-bold lowercase text-black`}>
        alpaca health
      </div>
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
        <div className="absolute right-4 top-full mt-1 bg-white border rounded shadow-lg w-40 origin-top-right animate-pop-py">
          <Link href="/admin" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Admin Dashboard
          </Link>
        </div>
      )}
    </header>
  );
} 