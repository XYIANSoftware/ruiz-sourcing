interface HighlightItemProps {
  icon: string
  title: string
  description: string
  className?: string
}

export default function HighlightItem({ 
  icon, 
  title, 
  description, 
  className = '' 
}: HighlightItemProps) {
  return (
    <div className={`p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl transition-all duration-300 hover:bg-amber-500/20 hover:-translate-y-1 animate-fade-in-up ${className}`}>
      <div className="text-3xl text-amber-400 mb-4">
        <i className={icon}></i>
      </div>
      
      <h4 className="text-lg font-semibold text-amber-300 mb-2">{title}</h4>
      
      <p className="text-sm text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  )
} 