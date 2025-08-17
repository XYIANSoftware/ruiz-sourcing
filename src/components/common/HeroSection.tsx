import { Card } from 'primereact/card'
import { Button } from '@/components/common'
import { ButtonVariant, ButtonSize } from '@/types'
import Image from 'next/image'

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
  heroImage?: string
  heroImageAlt?: string
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
  showCta = true,
  heroImage,
  heroImageAlt = 'Hero Image'
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
        <Card 
          className="shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
          style={{
            background: 'rgba(17, 24, 39, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: '24px'
          }}
        >
          
          {/* Hero Image */}
          {heroImage && (
            <div className="mb-2 animate-fade-in">
              <Image 
                src={heroImage} 
                alt={heroImageAlt}
                width={300}
                height={300}
                className="mx-auto rounded-3xl shadow-2xl"
                priority
                style={{
                  border: '2px solid rgba(245, 158, 11, 0.2)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
              />
            </div>
          )}
          
          {/* Hero Title - Juan's Name - Fanciest and Most Prominent */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 animate-fade-in"
              style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 25%, #d97706 50%, #f59e0b 75%, #fbbf24 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(245, 158, 11, 0.3)',
                filter: 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.2))'
              }}>
            {title}
          </h1>
          
          {/* Hero Subtitle */}
          {subtitle && (
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-amber-300 font-bold mb-4 animate-fade-in animation-delay-200"
                style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
              {subtitle}
            </h2>
          )}
          
          {/* Company */}
          {showCompany && company && (
            <p className="text-xl md:text-2xl text-amber-200 font-medium mb-8 animate-fade-in animation-delay-400"
               style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
              at {company}
            </p>
          )}
          
          {/* Description */}
          {showDescription && description && (
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-600"
               style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
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