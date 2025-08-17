'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
import { NAVIGATION_ITEMS, COMPANY_INFO } from '@/constants/navigation'

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

  const handleMenuClick = (url: string) => {
    router.push(url)
  }

  const start = (
    <div 
      className="flex items-center cursor-pointer group" 
      onClick={() => router.push('/')}
    >
      <i className="pi pi-briefcase text-2xl mr-3 text-amber-400 group-hover:text-amber-300 transition-colors duration-300"></i>
      <span className="text-2xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
        {COMPANY_INFO.name}
      </span>
    </div>
  )

  const end = (
    <div className="hidden md:flex">
      {NAVIGATION_ITEMS.map((item, index) => (
        <Button
          key={index}
          label={item.label}
          icon={item.icon}
          className={`mx-1 transition-all duration-300 ${
            pathname === item.url
              ? 'p-button-raised p-button-outlined'
              : 'p-button-text'
          }`}
          onClick={() => handleMenuClick(item.url)}
        />
      ))}
    </div>
  )

  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => router.push('/')
    },
    {
      label: 'About', 
      icon: 'pi pi-user',
      command: () => router.push('/about')
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope', 
      command: () => router.push('/contact')
    }
  ]

  return (
    <div className="sticky top-0 z-50">
      <Menubar
        model={items}
        start={start}
        end={end}
        className="border-none shadow-2xl bg-gray-900/95 backdrop-blur-xl"
        style={{
          background: 'rgba(17, 24, 39, 0.95)',
          backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(245, 158, 11, 0.2)'
        }}
      />
    </div>
  )
} 