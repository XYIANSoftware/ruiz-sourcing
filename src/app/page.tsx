'use client'

import Button from '@/components/common/Button'
import { HERO_CONTENT } from '@/constants/navigation'

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl w-full text-center">
        <div className="bg-gray-800/90 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
          
          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent animate-fade-in">
            {HERO_CONTENT.title}
          </h1>
          
          {/* Hero Subtitle */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-amber-400 font-bold mb-4 animate-fade-in animation-delay-200">
            {HERO_CONTENT.subtitle}
          </h2>
          
          {/* Company */}
          <p className="text-xl md:text-2xl text-amber-300 font-medium mb-8 animate-fade-in animation-delay-400">
            at {HERO_CONTENT.company}
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-600">
            {HERO_CONTENT.description}
          </p>
          
          {/* CTA Button */}
          <div className="animate-fade-in animation-delay-800">
            <Button 
              size="large" 
              variant="primary"
              onClick={() => window.location.href = HERO_CONTENT.ctaUrl}
              className="min-w-[200px] h-16 text-lg"
            >
              {HERO_CONTENT.ctaText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
