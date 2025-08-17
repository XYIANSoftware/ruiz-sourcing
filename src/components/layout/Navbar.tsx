'use client'

import { useRouter, usePathname } from 'next/navigation'
import { NAVIGATION_ITEMS, COMPANY_INFO } from '@/constants/navigation'

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

  const handleMenuClick = (url: string) => {
    router.push(url)
  }

  const items = NAVIGATION_ITEMS.map((item) => ({
    ...item,
    command: () => handleMenuClick(item.url),
    className: pathname === item.url ? 'active' : '',
  }))

  const start = (
    <div className="navbar-brand flex align-items-center cursor-pointer" onClick={() => router.push('/')}>
      <i className="pi pi-briefcase text-2xl mr-3 text-amber-400"></i>
      <span className="text-2xl font-bold text-amber-400">{COMPANY_INFO.name}</span>
    </div>
  )

  return (
    <div className="sticky top-0 z-50">
      <nav className="navbar">
        <div className="container">
          <div className="flex justify-content-between align-items-center py-3">
            {start}
            
            <div className="navbar-menu hidden md:flex">
              {items.map((item, index) => (
                <button
                  key={index}
                  className={`p-menuitem-link ${item.className} px-4 py-2 mx-2`}
                  onClick={item.command}
                >
                  <i className={`${item.icon} mr-2`}></i>
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="p-button p-button-text p-button-rounded">
                <i className="pi pi-bars text-xl text-amber-400"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
} 