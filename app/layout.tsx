import type { Metadata } from 'next';
import './globals.css';
import { sourceSan3 } from '@/lib/fonts';

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
      <body className={`${sourceSan3.className} selection:bg-sky-200`}>{children}</body>
    </html>
  );
}
