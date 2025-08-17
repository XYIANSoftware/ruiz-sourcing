import { Button as PrimeButton, ButtonProps } from 'primereact/button'
import { ButtonVariant, ButtonSize } from '@/types'

interface CustomButtonProps extends Omit<ButtonProps, 'size'> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
}

export default function Button({ 
  variant = ButtonVariant.PRIMARY, 
  size = ButtonSize.MEDIUM, 
  className = '', 
  children, 
  disabled,
  ...props 
}: CustomButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case ButtonVariant.PRIMARY:
        return 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-blue-900 font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 focus:ring-amber-500'
      case ButtonVariant.SECONDARY:
        return 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-blue-900 font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 focus:ring-gray-500'
      case ButtonVariant.OUTLINE:
        return 'bg-transparent border-2 border-amber-500 text-blue-900 hover:bg-amber-500 hover:text-blue-900 font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 focus:ring-amber-500'
      default:
        return ''
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case ButtonSize.SMALL:
        return 'px-4 py-2 text-sm'
      case ButtonSize.MEDIUM:
        return 'px-6 py-3 text-base'
      case ButtonSize.LARGE:
        return 'px-8 py-4 text-lg'
      default:
        return ''
    }
  }

  const baseClasses = 'relative overflow-hidden transition-all duration-300 rounded-xl font-semibold tracking-wide uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-60 disabled:cursor-not-allowed'
  const shimmerClasses = 'absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full'
  
  return (
    <PrimeButton
      className={`${baseClasses} ${getVariantClasses()} ${getSizeClasses()} ${className} group`}
      disabled={disabled}
      {...props}
    >
      <span className={shimmerClasses}></span>
      <span className="relative z-10">{children}</span>
    </PrimeButton>
  )
} 