import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/language-context';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shafwan Arka Putra | Data Analyst Portfolio',
  description:
    'Information Systems student focused on Data Analytics and Business Intelligence. Skilled in SQL, Excel, Python, and Looker Studio.',
  keywords: [
    'Data Analyst',
    'Business Intelligence',
    'Portfolio',
    'SQL',
    'Python',
    'Looker Studio',
    'Shafwan Arka Putra',
  ],
  authors: [{ name: 'Shafwan Arka Putra' }],
  openGraph: {
    type: 'website',
    title: 'Shafwan Arka Putra | Data Analyst Portfolio',
    description:
      'Information Systems student with hands-on experience in data analytics, SQL, Python, and interactive dashboards.',
    siteName: 'Shafwan Arka Putra Portfolio',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shafwan Arka Putra | Data Analyst Portfolio',
    description:
      'Information Systems student with hands-on experience in data analytics, SQL, Python, and interactive dashboards.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#0B1715" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
