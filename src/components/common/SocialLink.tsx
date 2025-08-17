interface SocialLinkProps {
  platform: 'linkedin' | 'instagram' | 'email' | 'twitter' | 'facebook' | 'youtube'
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
      case 'linkedin':
        return 'pi pi-linkedin'
      case 'instagram':
        return 'pi pi-instagram'
      case 'email':
        return 'pi pi-envelope'
      case 'twitter':
        return 'pi pi-twitter'
      case 'facebook':
        return 'pi pi-facebook'
      case 'youtube':
        return 'pi pi-youtube'
      default:
        return 'pi pi-link'
    }
  }

  const getPlatformColors = () => {
    switch (platform) {
      case 'linkedin':
        return 'from-blue-600 to-blue-700'
      case 'instagram':
        return 'from-pink-500 to-purple-600'
      case 'email':
        return 'from-amber-500 to-amber-600'
      case 'twitter':
        return 'from-blue-400 to-blue-500'
      case 'facebook':
        return 'from-blue-600 to-blue-700'
      case 'youtube':
        return 'from-red-500 to-red-600'
      default:
        return iconColor
    }
  }

  const getActionText = () => {
    switch (platform) {
      case 'linkedin':
        return 'Connect on LinkedIn'
      case 'instagram':
        return 'Follow on Instagram'
      case 'email':
        return 'Send Email'
      case 'twitter':
        return 'Follow on Twitter'
      case 'facebook':
        return 'Follow on Facebook'
      case 'youtube':
        return 'Subscribe on YouTube'
      default:
        return `Visit ${label}`
    }
  }

  const getActionIcon = () => {
    switch (platform) {
      case 'email':
        return 'pi pi-send'
      default:
        return 'pi pi-external-link'
    }
  }

  return (
    <div className={`bg-gray-800/90 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in ${className}`}>
      <div className={`w-18 h-18 bg-gradient-to-r ${getPlatformColors()} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
        <i className={`${getPlatformIcon()} text-2xl text-white`}></i>
      </div>
      
      <h3 className="text-2xl font-bold text-amber-400 mb-4">{label}</h3>
      
      <p className="text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>
      
      <a 
        href={url} 
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-amber-600 hover:to-amber-700 hover:-translate-y-1 hover:shadow-lg"
      >
        <i className={getActionIcon()}></i>
        {getActionText()}
      </a>
    </div>
  )
} 