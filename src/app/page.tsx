import { Card } from 'primereact/card'
import Container from '@/components/layout/Container'
import Button from '@/components/common/Button'
import { HERO_CONTENT } from '@/constants/navigation'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Container className="py-16">
        <div className="text-center">
          <Card className="bg-gray-800 border-gray-700 text-white shadow-2xl">
            <div className="p-8">
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">
                  {HERO_CONTENT.title}
                </h1>
                <h2 className="text-2xl md:text-3xl text-amber-400 mb-4">
                  {HERO_CONTENT.subtitle}
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  at <span className="text-amber-300 font-semibold">{HERO_CONTENT.company}</span>
                </p>
              </div>
              
              <div className="mb-8">
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                  {HERO_CONTENT.description}
                </p>
              </div>
              
              <div className="flex justify-center">
                <Button 
                  size="large" 
                  variant="primary"
                  onClick={() => window.location.href = HERO_CONTENT.ctaUrl}
                  className="text-lg px-8 py-4"
                >
                  {HERO_CONTENT.ctaText}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  )
} 