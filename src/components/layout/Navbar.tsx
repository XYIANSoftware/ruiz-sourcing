'use client'

import { Menubar } from 'primereact/menubar'
import { useRouter } from 'next/navigation'
import { NAVIGATION_ITEMS, COMPANY_INFO } from '@/constants/navigation'

export default function Navbar() {
  const router = useRouter()

  const handleMenuClick = (url: string) => {
    router.push(url)
  }

  const items = NAVIGATION_ITEMS.map((item) => ({
    ...item,
    command: () => handleMenuClick(item.url),
  }))

  const start = (
    <div className="flex align-items-center cursor-pointer" onClick={() => router.push('/')}>
      <i className="pi pi-briefcase text-xl mr-2 text-amber-400"></i>
      <span className="text-xl font-bold text-amber-400">{COMPANY_INFO.name}</span>
    </div>
  )

  return (
    <div className="sticky top-0 z-50">
      <Menubar
        model={items}
        start={start}
        className="border-none shadow-2 bg-gray-900 text-white"
        style={{ borderRadius: 0 }}
      />
    </div>
  )
} 