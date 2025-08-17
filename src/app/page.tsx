'use client'

import Container from '@/components/layout/Container'
import Button from '@/components/common/Button'
import { HERO_CONTENT } from '@/constants/navigation'

export default function HomePage() {
  return (
    <div className="home-page">
      <Container>
        <div className="hero-container">
          <div className="hero-card">
            <div className="hero-title">
              {HERO_CONTENT.title}
            </div>
            
            <div className="hero-subtitle">
              {HERO_CONTENT.subtitle}
            </div>
            
            <div className="hero-company">
              at {HERO_CONTENT.company}
            </div>
            
            <div className="hero-description">
              {HERO_CONTENT.description}
            </div>
            
            <div className="hero-cta">
              <Button 
                size="large" 
                variant="primary"
                onClick={() => window.location.href = HERO_CONTENT.ctaUrl}
                className="cta-button"
              >
                {HERO_CONTENT.ctaText}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
} 