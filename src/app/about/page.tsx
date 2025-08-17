import Container from '@/components/layout/Container'

export default function AboutPage() {
  return (
    <div className="about-page">
      <Container>
        <div className="about-container">
          <div className="page-header">
            <h1 className="page-title">About Juan Ruiz</h1>
            <p className="page-subtitle">Procurement Professional & Industry Expert</p>
          </div>
          
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">
                <i className="pi pi-briefcase"></i>
              </div>
              <h3 className="card-title">Professional Experience</h3>
              <p className="card-content">
                Juan Ruiz is a seasoned procurement professional with extensive experience in the beverage industry. 
                Currently serving as Procurement Manager at Happy Dad Hard Seltzer & Tea, Juan oversees all aspects 
                of product sourcing, supplier relationships, and supply chain optimization.
              </p>
            </div>
            
            <div className="info-card">
              <div className="card-icon">
                <i className="pi pi-chart-line"></i>
              </div>
              <h3 className="card-title">Strategic Expertise</h3>
              <p className="card-content">
                With a deep understanding of procurement strategies and market dynamics, Juan plays a crucial role 
                in ensuring the company&apos;s product lines meet the highest quality standards while maintaining 
                competitive pricing across various product categories.
              </p>
            </div>
            
            <div className="info-card">
              <div className="card-icon">
                <i className="pi pi-users"></i>
              </div>
              <h3 className="card-title">Collaborative Approach</h3>
              <p className="card-content">
                Juan&apos;s approach combines strategic thinking with hands-on execution, working closely with 
                suppliers, internal stakeholders, and industry partners to drive innovation and operational 
                excellence in procurement processes.
              </p>
            </div>
          </div>
          
          <div className="highlight-section">
            <h2 className="highlight-title">Product Highlights & Expertise</h2>
            
            <div className="highlight-grid">
              <div className="highlight-item">
                <div className="item-icon">
                  <i className="pi pi-star"></i>
                </div>
                <h4 className="item-title">Quality Assurance</h4>
                <p className="item-description">
                  Maintaining the highest standards across all product lines and supplier relationships
                </p>
              </div>
              
              <div className="highlight-item">
                <div className="item-icon">
                  <i className="pi pi-shopping-cart"></i>
                </div>
                <h4 className="item-title">Strategic Sourcing</h4>
                <p className="item-description">
                  Optimizing procurement strategies for cost efficiency and product excellence
                </p>
              </div>
              
              <div className="highlight-item">
                <div className="item-icon">
                  <i className="pi pi-lightbulb"></i>
                </div>
                <h4 className="item-title">Innovation Focus</h4>
                <p className="item-description">
                  Driving new product development including the upcoming lemonade release
                </p>
              </div>
              
              <div className="highlight-item">
                <div className="item-icon">
                  <i className="pi pi-globe"></i>
                </div>
                <h4 className="item-title">Industry Network</h4>
                <p className="item-description">
                  Building strong partnerships across the beverage and procurement ecosystem
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
} 