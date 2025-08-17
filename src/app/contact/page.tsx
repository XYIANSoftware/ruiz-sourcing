'use client'

import Container from '@/components/layout/Container'

export default function ContactPage() {
  return (
    <div className="contact-page">
      <Container>
        <div className="contact-container">
          <div className="page-header">
            <h1 className="page-title">Get In Touch</h1>
            <p className="page-subtitle">
              Ready to discuss procurement opportunities? Let&apos;s connect and explore how we can work together 
              to drive success in your product development and sourcing initiatives.
            </p>
          </div>
          
          <div className="welcome-section">
            <div className="welcome-icon">
              <i className="pi pi-handshake"></i>
            </div>
            <h2 className="welcome-title">Let&apos;s Start a Conversation</h2>
            <p className="welcome-text">
              Whether you&apos;re looking to optimize your procurement processes, explore new product opportunities, 
              or build strategic supplier relationships, I&apos;m here to help. Let&apos;s discuss how we can 
              collaborate to achieve your goals.
            </p>
          </div>
          
          <div className="social-links">
            <div className="social-card linkedin">
              <div className="social-icon">
                <i className="pi pi-linkedin"></i>
              </div>
              <h3 className="social-title">LinkedIn</h3>
              <p className="social-description">
                Connect professionally and stay updated with industry insights, procurement strategies, 
                and professional achievements.
              </p>
              <a href="#" className="social-link">
                <i className="pi pi-external-link"></i>
                Connect on LinkedIn
              </a>
            </div>
            
            <div className="social-card instagram">
              <div className="social-icon">
                <i className="pi pi-instagram"></i>
              </div>
              <h3 className="social-title">Instagram</h3>
              <p className="social-description">
                Follow for behind-the-scenes insights into product development, industry events, 
                and procurement innovation.
              </p>
              <a href="#" className="social-link">
                <i className="pi pi-external-link"></i>
                Follow on Instagram
              </a>
            </div>
            
            <div className="social-card email">
              <div className="social-icon">
                <i className="pi pi-envelope"></i>
              </div>
              <h3 className="social-title">Email</h3>
              <p className="social-description">
                Send me a direct message for business inquiries, collaboration opportunities, 
                or procurement consultation requests.
              </p>
              <a href="mailto:juan.ruiz@example.com" className="social-link">
                <i className="pi pi-send"></i>
                Send Email
              </a>
            </div>
          </div>
          
          <div className="contact-info">
            <h2 className="info-title">Ready to Collaborate?</h2>
            <p className="info-text">
              I&apos;m always interested in exploring new opportunities and building meaningful partnerships. 
              Whether you have a specific project in mind or just want to discuss the industry landscape, 
              I&apos;d love to hear from you. Let&apos;s create something amazing together.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
} 