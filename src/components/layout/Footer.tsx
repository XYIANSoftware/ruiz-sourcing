import { COMPANY_INFO } from '@/constants/navigation'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-400">
          © {COMPANY_INFO.year} {COMPANY_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
} 