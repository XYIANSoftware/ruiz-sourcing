import { Card } from 'primereact/card'
import Container from '@/components/layout/Container'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800 border-gray-700 text-white shadow-2xl mb-8">
            <div className="p-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gradient">
                About Juan Ruiz
              </h1>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Juan Ruiz is a seasoned procurement professional with extensive experience in the beverage industry. 
                  Currently serving as Procurement Manager at <span className="text-amber-300 font-semibold">Happy Dad Hard Seltzer & Tea</span>, 
                  Juan oversees all aspects of product sourcing, supplier relationships, and supply chain optimization.
                </p>
                
                <p>
                  With a deep understanding of procurement strategies and market dynamics, Juan plays a crucial role in 
                  ensuring the company&apos;s product lines meet the highest quality standards while maintaining competitive pricing. 
                  His expertise spans across various product categories, including the highly anticipated upcoming lemonade release.
                </p>
                
                <p>
                  Juan&apos;s approach combines strategic thinking with hands-on execution, working closely with suppliers, 
                  internal stakeholders, and industry partners to drive innovation and operational excellence in procurement processes.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="bg-gray-800 border-gray-700 text-white shadow-2xl">
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-amber-400">
                Product Highlights
              </h2>
              
              <div className="text-center text-gray-400">
                <p className="text-lg">
                  <i className="pi pi-info-circle text-2xl text-amber-400 mb-4 block"></i>
                  Content coming soon...
                </p>
                <p className="text-sm mt-4">
                  Future updates will include product showcases, sourcing insights, and industry highlights.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  )
} 