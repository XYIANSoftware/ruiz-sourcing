import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
}

export default function Button({ 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  children, 
  disabled,
  ...props 
}: ButtonProps) {
  const baseClasses = 'relative overflow-hidden transition-all duration-300 rounded-xl font-semibold tracking-wide uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-60 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 focus:ring-amber-500',
    secondary: 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 focus:ring-gray-500',
    outline: 'bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white shadow-lg hover:shadow-xl hover:-translate-y-1 focus:ring-amber-500'
  }
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  }
  
  const shimmerClasses = 'absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full'
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} group`}
      disabled={disabled}
      {...props}
    >
      <span className={shimmerClasses}></span>
      <span className="relative z-10">{children}</span>
    </button>
  )
} 