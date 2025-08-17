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
      className={`bg-gray-800/50 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in ${animationDelay} ${className}`}
    >
      <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
        <i className={`${icon} text-2xl text-white`}></i>
      </div>
      
      <h3 className="text-2xl font-bold text-amber-400 text-center mb-4">{title}</h3>
      
      <p className="text-gray-300 text-center leading-relaxed">
        {content}
      </p>
    </Card>
  )
} 