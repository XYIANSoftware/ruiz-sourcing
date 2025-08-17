import { PageHeader, WelcomeSection, SocialLink } from '@/components/common'
import { SocialPlatform, AnimationDelay } from '@/types'

export default function ContactPage() {
  const socialLinks = [
    {
      platform: SocialPlatform.LINKEDIN,
      url: '#',
      label: 'LinkedIn',
      description: 'Connect professionally and stay updated with industry insights, procurement strategies, and professional achievements.'
    },
    {
      platform: SocialPlatform.INSTAGRAM,
      url: '#',
      label: 'Instagram',
      description: 'Follow for behind-the-scenes insights into product development, industry events, and procurement innovation.'
    },
    {
      platform: SocialPlatform.EMAIL,
      url: 'mailto:juan.ruiz@example.com',
      label: 'Email',
      description: 'Send me a direct message for business inquiries, collaboration opportunities, or procurement consultation requests.'
    }
  ]

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <PageHeader 
          title="Get In Touch"
          subtitle="Ready to discuss procurement opportunities? Let's connect and explore how we can work together to drive success in your product development and sourcing initiatives."
        />
        
        {/* Welcome Section */}
        <WelcomeSection
          icon="pi pi-handshake"
          title="Let's Start a Conversation"
          text="Whether you're looking to optimize your procurement processes, explore new product opportunities, or build strategic supplier relationships, I'm here to help. Let's discuss how we can collaborate to achieve your goals."
        />
        
        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {socialLinks.map((link, index) => (
            <SocialLink
              key={index}
              platform={link.platform}
              url={link.url}
              label={link.label}
              description={link.description}
              className={index === 0 ? AnimationDelay.DELAY_400 : index === 1 ? AnimationDelay.DELAY_500 : AnimationDelay.DELAY_600}
            />
          ))}
        </div>
        
        {/* Contact Info */}
        <div className="bg-gray-800/90 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-8 md:p-12 text-center animate-fade-in animation-delay-700">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-8">
            Ready to Collaborate?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I&apos;m always interested in exploring new opportunities and building meaningful partnerships. 
            Whether you have a specific project in mind or just want to discuss the industry landscape, 
            I&apos;d love to hear from you. Let&apos;s create something amazing together.
          </p>
        </div>
      </div>
    </div>
  )
} 