'use client'

import { useRouter, usePathname } from 'next/navigation'
import { NAVIGATION_ITEMS, COMPANY_INFO } from '@/constants/navigation'

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

  const handleMenuClick = (url: string) => {
    router.push(url)
  }

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-gray-900/95 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div 
              className="flex items-center cursor-pointer group" 
              onClick={() => router.push('/')}
            >
              <i className="pi pi-briefcase text-2xl mr-3 text-amber-400 group-hover:text-amber-300 transition-colors duration-300"></i>
              <span className="text-2xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
                {COMPANY_INFO.name}
              </span>
            </div>
            
            <div className="hidden md:flex space-x-1">
              {NAVIGATION_ITEMS.map((item, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 mx-1 rounded-lg transition-all duration-300 flex items-center ${
                    pathname === item.url
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'text-gray-300 hover:bg-amber-500/10 hover:text-amber-300'
                  }`}
                  onClick={() => handleMenuClick(item.url)}
                >
                  <i className={`${item.icon} mr-2`}></i>
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="p-2 text-amber-400 hover:text-amber-300 transition-colors duration-300">
                <i className="pi pi-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
} 