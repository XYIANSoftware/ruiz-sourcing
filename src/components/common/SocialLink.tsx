import { Card } from 'primereact/card'
import { Button } from '@/components/common'
import { SocialPlatform, ButtonVariant, ButtonSize } from '@/types'

interface SocialLinkProps {
  platform: SocialPlatform
  url: string
  label: string
  description: string
  iconColor?: string
  className?: string
}

export default function SocialLink({ 
  platform, 
  url, 
  label, 
  description, 
  iconColor = 'from-amber-500 to-amber-600',
  className = '' 
}: SocialLinkProps) {
  const getPlatformIcon = () => {
    switch (platform) {
      case SocialPlatform.LINKEDIN:
        return 'pi pi-linkedin'
      case SocialPlatform.INSTAGRAM:
        return 'pi pi-instagram'
      case SocialPlatform.EMAIL:
        return 'pi pi-envelope'
      case SocialPlatform.TWITTER:
        return 'pi pi-twitter'
      case SocialPlatform.FACEBOOK:
        return 'pi pi-facebook'
      case SocialPlatform.YOUTUBE:
        return 'pi pi-youtube'
      default:
        return 'pi pi-link'
    }
  }

  const getPlatformColors = () => {
    switch (platform) {
      case SocialPlatform.LINKEDIN:
        return 'from-blue-600 to-blue-700'
      case SocialPlatform.INSTAGRAM:
        return 'from-pink-500 to-purple-600'
      case SocialPlatform.EMAIL:
        return 'from-amber-500 to-amber-600'
      case SocialPlatform.TWITTER:
        return 'from-blue-400 to-blue-500'
      case SocialPlatform.FACEBOOK:
        return 'from-blue-600 to-blue-700'
      case SocialPlatform.YOUTUBE:
        return 'from-red-500 to-red-600'
      default:
        return iconColor
    }
  }

  const getActionText = () => {
    switch (platform) {
      case SocialPlatform.LINKEDIN:
        return 'Connect on LinkedIn'
      case SocialPlatform.INSTAGRAM:
        return 'Follow on Instagram'
      case SocialPlatform.EMAIL:
        return 'Send Email'
      case SocialPlatform.TWITTER:
        return 'Follow on Twitter'
      case SocialPlatform.FACEBOOK:
        return 'Follow on Facebook'
      case SocialPlatform.YOUTUBE:
        return 'Subscribe on YouTube'
      default:
        return `Visit ${label}`
    }
  }

  const getActionIcon = () => {
    switch (platform) {
      case SocialPlatform.EMAIL:
        return 'pi pi-send'
      default:
        return 'pi pi-external-link'
    }
  }

  return (
    <Card 
      className={`text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in ${className}`}
    >
      <div className={`w-18 h-18 bg-gradient-to-r ${getPlatformColors()} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
        <i className={`${getPlatformIcon()} text-2xl text-white`}></i>
      </div>
      
      <h3 className="text-2xl font-bold text-amber-400 mb-4">{label}</h3>
      
      <p className="text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>
      
      <Button 
        variant={ButtonVariant.PRIMARY}
        size={ButtonSize.MEDIUM}
        onClick={() => window.open(url, '_blank')}
        className="w-full"
      >
        <i className={getActionIcon()}></i>
        {getActionText()}
      </Button>
    </Card>
  )
} 