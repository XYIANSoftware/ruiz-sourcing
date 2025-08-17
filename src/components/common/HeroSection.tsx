import { Card } from 'primereact/card'
import { Button } from '@/components/common'
import { ButtonVariant, ButtonSize } from '@/types'

interface HeroSectionProps {
  title: string
  subtitle?: string
  company?: string
  description?: string
  ctaText?: string
  ctaUrl?: string
  onCtaClick?: () => void
  className?: string
  showCompany?: boolean
  showDescription?: boolean
  showCta?: boolean
}

export default function HeroSection({
  title,
  subtitle,
  company,
  description,
  ctaText,
  ctaUrl,
  onCtaClick,
  className = '',
  showCompany = true,
  showDescription = true,
  showCta = true
}: HeroSectionProps) {
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick()
    } else if (ctaUrl) {
      window.location.href = ctaUrl
    }
  }

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 py-16 ${className}`}>
      <div className="max-w-6xl w-full text-center">
        <Card className="bg-gray-800/90 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
          
          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent animate-fade-in">
            {title}
          </h1>
          
          {/* Hero Subtitle */}
          {subtitle && (
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-amber-400 font-bold mb-4 animate-fade-in animation-delay-200">
              {subtitle}
            </h2>
          )}
          
          {/* Company */}
          {showCompany && company && (
            <p className="text-xl md:text-2xl text-amber-300 font-medium mb-8 animate-fade-in animation-delay-400">
              at {company}
            </p>
          )}
          
          {/* Description */}
          {showDescription && description && (
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-600">
              {description}
            </p>
          )}
          
          {/* CTA Button */}
          {showCta && ctaText && (
            <div className="animate-fade-in animation-delay-800">
              <Button 
                size={ButtonSize.LARGE}
                variant={ButtonVariant.PRIMARY}
                onClick={handleCtaClick}
                className="min-w-[200px] h-16 text-lg"
              >
                {ctaText}
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
} 