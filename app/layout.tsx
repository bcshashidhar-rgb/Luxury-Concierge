import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Private Circle',
  description: 'Luxury concierge loyalty experience'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
