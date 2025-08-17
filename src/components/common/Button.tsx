import { Button as PrimeButton, ButtonProps } from 'primereact/button'

interface CustomButtonProps extends Omit<ButtonProps, 'size'> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
}

export default function Button({ 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  children, 
  ...props 
}: CustomButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-amber-600 hover:bg-amber-700 border-amber-600 hover:border-amber-700'
      case 'secondary':
        return 'bg-gray-600 hover:bg-gray-700 border-gray-600 hover:border-gray-700'
      case 'outline':
        return 'bg-transparent border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white'
      default:
        return 'bg-amber-600 hover:bg-amber-700 border-amber-600 hover:border-amber-700'
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'px-3 py-2 text-sm'
      case 'large':
        return 'px-6 py-4 text-lg'
      default:
        return 'px-4 py-3 text-base'
    }
  }

  return (
    <PrimeButton
      className={`${getVariantClasses()} ${getSizeClasses()} ${className}`}
      {...props}
    >
      {children}
    </PrimeButton>
  )
} 