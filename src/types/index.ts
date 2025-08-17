export interface NavigationItem {
  label: string
  icon: string
  url: string
}

export interface CompanyInfo {
  name: string
  description: string
  year: number
}

export interface HeroContent {
  title: string
  subtitle: string
  company: string
  description: string
  ctaText: string
  ctaUrl: string
}

// Enums to replace magic strings
export enum SocialPlatform {
  LINKEDIN = 'linkedin',
  INSTAGRAM = 'instagram',
  EMAIL = 'email',
  TWITTER = 'twitter',
  FACEBOOK = 'facebook',
  YOUTUBE = 'youtube'
}

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINE = 'outline'
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export enum AnimationDelay {
  NONE = '',
  DELAY_200 = 'animation-delay-200',
  DELAY_400 = 'animation-delay-400',
  DELAY_500 = 'animation-delay-500',
  DELAY_600 = 'animation-delay-600',
  DELAY_700 = 'animation-delay-700',
  DELAY_800 = 'animation-delay-800'
} 