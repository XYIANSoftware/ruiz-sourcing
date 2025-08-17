import { Card } from 'primereact/card'

interface InfoCardProps {
  icon: string
  title: string
  content: string
  className?: string
  animationDelay?: string
}

export default function InfoCard({
  icon,
  title,
  content,
  className = '',
  animationDelay = ''
}: InfoCardProps) {
  return (
    <Card
      className={`transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in ${animationDelay} ${className}`}
      style={{
        background: 'rgba(17, 24, 39, 0.15)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(245, 158, 11, 0.2)',
        borderRadius: '16px'
      }}
    >
      <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
        <i className={`${icon} text-2xl text-white`}></i>
      </div>
      
      <h3 className="text-2xl font-bold text-amber-300 text-center mb-4" 
          style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
        {title}
      </h3>
      
      <p className="text-gray-100 text-center leading-relaxed"
         style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}>
        {content}
      </p>
    </Card>
  )
} 