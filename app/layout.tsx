import { Amatic_SC } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const amaticSC = Amatic_SC({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic', 'hebrew']
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${amaticSC.className} antialiased`}>{children}</body>
    </html>
  );
}
