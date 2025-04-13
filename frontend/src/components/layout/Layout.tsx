import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`min-h-screen bg-gray-50 ${inter.className}`}>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
} 