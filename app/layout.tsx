import type { Metadata } from 'next';
import './globals.css';
import { poppins } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Minji Jung | portfolio',
  description: 'Web developer portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} selection:bg-point-blue/25`}>{children}</body>
    </html>
  );
}
