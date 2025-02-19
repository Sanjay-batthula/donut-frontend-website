import './globals.css';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";

const lato = Lato({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Donut Shop',
  description: 'Delicious donuts and more',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} bg-black text-white`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}