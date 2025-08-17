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

export interface ContactForm {
  name: string
  email: string
  message: string
}

export interface FormValidation {
  name: boolean
  email: boolean
  message: boolean
} 