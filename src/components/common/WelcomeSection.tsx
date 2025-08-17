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
    >
      <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
        <i className={`${icon} text-3xl text-white`}></i>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-6">
        {title}
      </h2>
      
      <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
        {text}
      </p>
    </Card>
  )
} 