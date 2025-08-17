'use client'

import { HeroSection } from '@/components/common'
import { HERO_CONTENT } from '@/constants/navigation'

export default function HomePage() {
  return (
    <HeroSection
      title={HERO_CONTENT.title}
      subtitle={HERO_CONTENT.subtitle}
      company={HERO_CONTENT.company}
      description={HERO_CONTENT.description}
      ctaText={HERO_CONTENT.ctaText}
      ctaUrl={HERO_CONTENT.ctaUrl}
      heroImage="/main-icon.png"
      heroImageAlt="Juan Ruiz - Procurement Manager"
    />
  )
}
