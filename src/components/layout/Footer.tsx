import { COMPANY_INFO } from '@/constants/navigation'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          © {COMPANY_INFO.year} {COMPANY_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
} 