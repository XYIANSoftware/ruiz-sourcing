'use client'

import { useState } from 'react'
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Toast } from 'primereact/toast'
import { useRef } from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/common/Button'
import { ContactForm, FormValidation } from '@/types'

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  })
  
  const [validation, setValidation] = useState<FormValidation>({
    name: false,
    email: false,
    message: false,
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useRef<Toast>(null)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear validation error when user starts typing
    if (validation[field]) {
      setValidation(prev => ({ ...prev, [field]: false }))
    }
  }

  const validateForm = (): boolean => {
    const newValidation: FormValidation = {
      name: !formData.name.trim(),
      email: !validateEmail(formData.email),
      message: !formData.message.trim(),
    }
    
    setValidation(newValidation)
    return !Object.values(newValidation).some(Boolean)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Show success message
    toast.current?.show({
      severity: 'success',
      summary: 'Success!',
      detail: 'Your message has been sent successfully. We\'ll get back to you soon!',
      life: 5000,
    })
    
    // Reset form
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Toast ref={toast} position="top-right" />
      
      <Container className="py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-800 border-gray-700 text-white shadow-2xl">
            <div className="p-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gradient">
                Get In Touch
              </h1>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="field">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <InputText
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full ${validation.name ? 'p-invalid' : ''}`}
                    placeholder="Your full name"
                  />
                  {validation.name && (
                    <small className="p-error block mt-1">Name is required</small>
                  )}
                </div>
                
                <div className="field">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <InputText
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full ${validation.email ? 'p-invalid' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {validation.email && (
                    <small className="p-error block mt-1">Please enter a valid email address</small>
                  )}
                </div>
                
                <div className="field">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <InputTextarea
                    id="message"
                    value={formData.message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange('message', e.target.value)}
                    className={`w-full ${validation.message ? 'p-invalid' : ''}`}
                    rows={5}
                    placeholder="Tell us about your procurement needs..."
                  />
                  {validation.message && (
                    <small className="p-error block mt-1">Message is required</small>
                  )}
                </div>
                
                <div className="flex justify-center pt-4">
                  <Button
                    type="submit"
                    size="large"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="pi pi-spin pi-spinner mr-2"></i>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  )
} 