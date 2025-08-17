import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/themes/lara-dark-amber/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import '@/styles/globals.scss'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ruiz-Sourcing - Procurement Management',
  description: 'Juan Ruiz, Procurement Manager at Happy Dad Hard Seltzer & Tea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrimeReactProvider>
          <div className="min-h-screen flex flex-column">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </PrimeReactProvider>
      </body>
    </html>
  )
} 