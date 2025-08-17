import { PageHeader, InfoCard, HighlightItem } from '@/components/common'
import { AnimationDelay } from '@/types'
import { Card } from 'primereact/card'

export default function AboutPage() {
  const infoCards = [
    {
      icon: 'pi pi-briefcase',
      title: 'Professional Experience',
      content: 'Juan Ruiz is a seasoned procurement professional with extensive experience in the beverage industry. Currently serving as Procurement Manager at Happy Dad Hard Seltzer & Tea, Juan oversees all aspects of product sourcing, supplier relationships, and supply chain optimization.'
    },
    {
      icon: 'pi pi-chart-line',
      title: 'Strategic Expertise',
      content: 'With a deep understanding of procurement strategies and market dynamics, Juan plays a crucial role in ensuring the company\'s product lines meet the highest quality standards while maintaining competitive pricing across various product categories.'
    },
    {
      icon: 'pi pi-users',
      title: 'Collaborative Approach',
      content: 'Juan\'s approach combines strategic thinking with hands-on execution, working closely with suppliers, internal stakeholders, and industry partners to drive innovation and operational excellence in procurement processes.'
    }
  ]

  const highlights = [
    {
      icon: 'pi pi-star',
      title: 'Quality Assurance',
      description: 'Maintaining the highest standards across all product lines and supplier relationships'
    },
    {
      icon: 'pi pi-shopping-cart',
      title: 'Strategic Sourcing',
      description: 'Optimizing procurement strategies for cost efficiency and product excellence'
    },
    {
      icon: 'pi pi-lightbulb',
      title: 'Innovation Focus',
      description: 'Driving new product development and expanding our beverage portfolio'
    },
    {
      icon: 'pi pi-globe',
      title: 'Industry Network',
      description: 'Building strong partnerships across the beverage and procurement ecosystem'
    }
  ]

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <PageHeader 
          title="About Juan Ruiz"
          subtitle="Procurement Professional & Industry Expert"
        />
        
        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {infoCards.map((card, index) => (
            <InfoCard
              key={index}
              icon={card.icon}
              title={card.title}
              content={card.content}
              animationDelay={index === 0 ? AnimationDelay.NONE : index === 1 ? AnimationDelay.DELAY_200 : AnimationDelay.DELAY_400}
            />
          ))}
        </div>
        
        {/* Highlights Section */}
        <Card 
          className="text-center animate-fade-in animation-delay-600"
          style={{
            background: 'rgba(17, 24, 39, 0.15)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(245, 158, 11, 0.2)',
            borderRadius: '24px'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-12"
              style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Product Highlights & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <HighlightItem
                key={index}
                icon={highlight.icon}
                title={highlight.title}
                description={highlight.description}
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
} 