export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
            About Juan Ruiz
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            Procurement Professional & Industry Expert
          </p>
        </div>
        
        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Professional Experience */}
          <div className="bg-gray-800/90 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <i className="pi pi-briefcase text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-amber-400 text-center mb-4">Professional Experience</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Juan Ruiz is a seasoned procurement professional with extensive experience in the beverage industry. 
              Currently serving as Procurement Manager at Happy Dad Hard Seltzer & Tea, Juan oversees all aspects 
              of product sourcing, supplier relationships, and supply chain optimization.
            </p>
          </div>
          
          {/* Strategic Expertise */}
          <div className="bg-gray-800/90 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in animation-delay-200">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <i className="pi pi-chart-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-amber-400 text-center mb-4">Strategic Expertise</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              With a deep understanding of procurement strategies and market dynamics, Juan plays a crucial role 
              in ensuring the company&apos;s product lines meet the highest quality standards while maintaining 
              competitive pricing across various product categories.
            </p>
          </div>
          
          {/* Collaborative Approach */}
          <div className="bg-gray-800/90 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in animation-delay-400">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <i className="pi pi-users text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-amber-400 text-center mb-4">Collaborative Approach</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Juan&apos;s approach combines strategic thinking with hands-on execution, working closely with 
              suppliers, internal stakeholders, and industry partners to drive innovation and operational 
              excellence in procurement processes.
            </p>
          </div>
        </div>
        
        {/* Highlights Section */}
        <div className="bg-gray-800/90 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-8 md:p-12 text-center animate-fade-in animation-delay-600">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-12">
            Product Highlights & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Quality Assurance */}
            <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl transition-all duration-300 hover:bg-amber-500/20 hover:-translate-y-1">
              <div className="text-3xl text-amber-400 mb-4">
                <i className="pi pi-star"></i>
              </div>
              <h4 className="text-lg font-semibold text-amber-300 mb-2">Quality Assurance</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Maintaining the highest standards across all product lines and supplier relationships
              </p>
            </div>
            
            {/* Strategic Sourcing */}
            <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl transition-all duration-300 hover:bg-amber-500/20 hover:-translate-y-1">
              <div className="text-3xl text-amber-400 mb-4">
                <i className="pi pi-shopping-cart"></i>
              </div>
              <h4 className="text-lg font-semibold text-amber-300 mb-2">Strategic Sourcing</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Optimizing procurement strategies for cost efficiency and product excellence
              </p>
            </div>
            
            {/* Innovation Focus */}
            <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl transition-all duration-300 hover:bg-amber-500/20 hover:-translate-y-1">
              <div className="text-3xl text-amber-400 mb-4">
                <i className="pi pi-lightbulb"></i>
              </div>
              <h4 className="text-lg font-semibold text-amber-300 mb-2">Innovation Focus</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Driving new product development including the upcoming lemonade release
              </p>
            </div>
            
            {/* Industry Network */}
            <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl transition-all duration-300 hover:bg-amber-500/20 hover:-translate-y-1">
              <div className="text-3xl text-amber-400 mb-4">
                <i className="pi pi-globe"></i>
              </div>
              <h4 className="text-lg font-semibold text-amber-300 mb-2">Industry Network</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Building strong partnerships across the beverage and procurement ecosystem
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 