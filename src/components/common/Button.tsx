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
  disabled,
  ...props 
}: CustomButtonProps) {
  const getButtonClasses = () => {
    const baseClasses = 'custom-button'
    const variantClass = variant
    const sizeClass = size
    const disabledClass = disabled ? 'disabled' : ''
    
    return `${baseClasses} ${variantClass} ${sizeClass} ${disabledClass} ${className}`.trim()
  }

  return (
    <PrimeButton
      className={getButtonClasses()}
      disabled={disabled}
      {...props}
    >
      {children}
    </PrimeButton>
  )
} 