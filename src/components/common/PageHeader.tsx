interface PageHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export default function PageHeader({ 
  title, 
  subtitle, 
  className = '' 
}: PageHeaderProps) {
  return (
    <div className={`text-center mb-16 animate-fade-in ${className}`}>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
        {title}
      </h1>
      
      {subtitle && (
        <p className="text-xl md:text-2xl text-gray-300 font-medium">
          {subtitle}
        </p>
      )}
    </div>
  )
} 