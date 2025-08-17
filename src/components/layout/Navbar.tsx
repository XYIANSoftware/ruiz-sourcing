'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
import { Sidebar } from 'primereact/sidebar'
import { NAVIGATION_ITEMS, COMPANY_INFO } from '@/constants/navigation'

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

  const handleMenuClick = (url: string) => {
    router.push(url)
    setMobileMenuVisible(false)
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

  const mobileMenuItems = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      url: '/'
    },
    {
      label: 'About', 
      icon: 'pi pi-user',
      url: '/about'
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope', 
      url: '/contact'
    }
  ]

  return (
    <>
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
        
        {/* Mobile Menu Button - Beer Stein Icon - Properly Positioned */}
        <div className="md:hidden fixed top-0 right-0 z-50 m-8 p-4">
          <Button
            icon="pi pi-beer"
            className="p-button-text p-button-rounded p-button-lg"
            style={{
              background: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              color: '#f59e0b',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
            }}
            onClick={() => setMobileMenuVisible(true)}
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sidebar
        visible={mobileMenuVisible}
        position="right"
        onHide={() => setMobileMenuVisible(false)}
        className="w-80"
        style={{
          background: 'rgba(17, 24, 39, 0.98)',
          backdropFilter: 'blur(24px)',
          borderLeft: '1px solid rgba(245, 158, 11, 0.2)'
        }}
        header={
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-amber-300">Menu</h2>
          </div>
        }
      >
        <div className="flex flex-col h-full">
          {/* Navigation Items */}
          <div className="flex-1 py-6">
            {mobileMenuItems.map((item, index) => (
              <Button
                key={index}
                label={item.label}
                icon={item.icon}
                className={`w-full mb-3 justify-start p-3 ${
                  pathname === item.url
                    ? 'p-button-raised p-button-outlined'
                    : 'p-button-text'
                }`}
                style={{
                  background: pathname === item.url 
                    ? 'rgba(245, 158, 11, 0.1)' 
                    : 'transparent',
                  border: pathname === item.url 
                    ? '1px solid rgba(245, 158, 11, 0.3)' 
                    : 'none',
                  color: pathname === item.url ? '#f59e0b' : '#d1d5db'
                }}
                onClick={() => handleMenuClick(item.url)}
              />
            ))}
          </div>
          
          {/* Footer Section */}
          <div className="p-4 border-t border-amber-500/20 mt-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <i className="pi pi-briefcase text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-amber-300 mb-2">Ruiz-Sourcing</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Professional procurement management solutions for the beverage industry. 
                Let&apos;s connect and explore opportunities together.
              </p>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  )
} 