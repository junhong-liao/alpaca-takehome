import { Inter } from 'next/font/google';
import Link from 'next/link';
import Providers from './providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-sm">
              <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                  <Link href="/" className="text-xl font-semibold text-gray-900">
                    ABA Session Management
                  </Link>
                  <div className="space-x-4">
                    <Link href="/clients" className="text-gray-700 hover:text-gray-900">
                      Clients
                    </Link>
                    <Link href="/sessions" className="text-gray-700 hover:text-gray-900">
                      Sessions
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
