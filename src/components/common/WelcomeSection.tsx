import { Card } from 'primereact/card'
import { AnimationDelay } from '@/types'

interface WelcomeSectionProps {
  icon: string
  title: string
  text: string
  className?: string
  animationDelay?: string
}

export default function WelcomeSection({ 
  icon, 
  title, 
  text, 
  className = '',
  animationDelay = AnimationDelay.DELAY_200
}: WelcomeSectionProps) {
  return (
    <Card 
      className={`text-center mb-12 animate-fade-in ${animationDelay} ${className}`}
      style={{
        background: 'rgba(17, 24, 39, 0.15)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(245, 158, 11, 0.2)',
        borderRadius: '24px'
      }}
    >
      <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
        <i className={`${icon} text-3xl text-white`}></i>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-6"
          style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
        {title}
      </h2>
      
      <p className="text-lg md:text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed"
         style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}>
        {text}
      </p>
    </Card>
  )
} 