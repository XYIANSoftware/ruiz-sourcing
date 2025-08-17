export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed">
            Ready to discuss procurement opportunities? Let&apos;s connect and explore how we can work together 
            to drive success in your product development and sourcing initiatives.
          </p>
        </div>
        
        {/* Welcome Section */}
        <div className="bg-gray-800/90 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-8 md:p-12 text-center mb-12 animate-fade-in animation-delay-200">
          <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
            <i className="pi pi-handshake text-3xl text-white"></i>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-6">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Whether you&apos;re looking to optimize your procurement processes, explore new product opportunities, 
            or build strategic supplier relationships, I&apos;m here to help. Let&apos;s discuss how we can 
            collaborate to achieve your goals.
          </p>
        </div>
        
        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* LinkedIn */}
          <div className="bg-gray-800/90 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in animation-delay-400">
            <div className="w-18 h-18 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <i className="pi pi-linkedin text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">LinkedIn</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connect professionally and stay updated with industry insights, procurement strategies, 
              and professional achievements.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-amber-600 hover:to-amber-700 hover:-translate-y-1 hover:shadow-lg"
            >
              <i className="pi pi-external-link"></i>
              Connect on LinkedIn
            </a>
          </div>
          
          {/* Instagram */}
          <div className="bg-gray-800/90 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in animation-delay-500">
            <div className="w-18 h-18 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <i className="pi pi-instagram text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Instagram</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Follow for behind-the-scenes insights into product development, industry events, 
              and procurement innovation.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-amber-600 hover:to-amber-700 hover:-translate-y-1 hover:shadow-lg"
            >
              <i className="pi pi-external-link"></i>
              Follow on Instagram
            </a>
          </div>
          
          {/* Email */}
          <div className="bg-gray-800/90 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in animation-delay-600">
            <div className="w-18 h-18 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <i className="pi pi-envelope text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Email</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Send me a direct message for business inquiries, collaboration opportunities, 
              or procurement consultation requests.
            </p>
            <a 
              href="mailto:juan.ruiz@example.com" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-amber-600 hover:to-amber-700 hover:-translate-y-1 hover:shadow-lg"
            >
              <i className="pi pi-send"></i>
              Send Email
            </a>
          </div>
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