import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/themes/lara-dark-amber/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Juan Ruiz',
  description: 'The Man, The Myth, The Legend - Juan',
  openGraph: {
    title: 'Juan Ruiz',
    description: 'The Man, The Myth, The Legend - Juan',
    type: 'website',
    siteName: 'Juan Ruiz',
    images: [
      { url: '/juan-avatar.png', width: 1200, height: 1200, alt: 'Juan Ruiz Avatar' }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Ruiz',
    description: 'The Man, The Myth, The Legend - Juan',
    images: ['/juan-avatar.png']
  },
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/main-icon.png', type: 'image/png' }],
    apple: [{ url: '/main-icon.png' }],
    shortcut: ['/favicon.ico']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans parallax`}>
        <PrimeReactProvider>
          <div className="min-h-screen flex flex-col relative">
            <Navbar />
            <main className="flex-1 relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        </PrimeReactProvider>
      </body>
    </html>
  )
} 