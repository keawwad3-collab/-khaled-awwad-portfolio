import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      name: "Sharaf Electronics Guideline",
      category: "Brand Systems",
      description: "Enterprise-scale creative systems for 22+ retail locations ensuring 100% brand consistency across multiple countries.",
      metrics: ["22+ Locations | 4 Countries", "100% Consistency"],
      image: "/projects/sharaf_electronics_guideline.png",
      behanceLink: "https://www.behance.net/gallery/16691125/Sharaf-Electornics-Guidleline"
    },
    {
      id: 2,
      name: "Hello Hot Ketchup",
      category: "Digital Marketing",
      description: "FMCG brand ecosystem design and digital strategy focused on customer lifecycle value and market expansion.",
      metrics: ["20+ Products | ↑ CLV", "3 Regions"],
      image: "/projects/hello_hot_ketchup.png",
      behanceLink: "https://www.behance.net/gallery/104490495/Hello-Hot-Ketchup"
    },
    {
      id: 3,
      name: "Make It Personal",
      category: "Retail Design",
      description: "Flagship store marketing and omnichannel customer experience design with integrated digital touchpoints.",
      metrics: ["Flagship Location", "Omnichannel | Engagement ↑"],
      image: "/projects/make_it_personal.webp",
      behanceLink: "https://www.behance.net/gallery/29317501/MAKE-IT-PERSONAL"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black border-b border-gray-300">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <img src="/ka-logo.png" alt="KA Logo" className="h-10 w-10 object-contain" />
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-white font-semibold hover:text-accent transition-colors">Home</Link>
            <Link href="/about" className="text-white hover:text-accent transition-colors">About</Link>
            <Link href="/portfolio" className="text-white hover:text-accent transition-colors">Portfolio</Link>
            <Link href="/case-studies" className="text-white hover:text-accent transition-colors">Case Studies</Link>
            <Link href="/contact" className="text-white hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="container max-w-6xl mx-auto px-4 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl font-bold text-black leading-tight mb-6" style={{ fontFamily: 'Montserrat' }}>
                Building Brands That Scale
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Strategic creative leader with 10+ years of experience driving brand growth, market expansion, and measurable business outcomes across MENA and North America.
              </p>
            </div>

            <div className="flex gap-4">
              <Link href="/portfolio">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-6 text-lg font-semibold">
                  View My Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-black text-black hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="overflow-hidden rounded-lg">
            <img 
              src="/hero-banner.png" 
              alt="Creative Portfolio Hero" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="bg-gray-50 py-20 border-t-2 border-black">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-black mb-4" style={{ fontFamily: 'Montserrat' }}>
              Featured Work
            </h2>
            <p className="text-xl text-gray-700 mb-16">
              Recent projects demonstrating strategic expertise across brand design, digital marketing, and retail strategy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <a 
                  key={project.id} 
                  href={project.behanceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer"
                >
                  <div className="bg-white border-2 border-gray-300 aspect-video mb-4 flex items-center justify-center overflow-hidden hover:border-yellow-400 transition-colors">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm font-semibold text-yellow-600 uppercase tracking-wide mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-yellow-600 transition-colors" style={{ fontFamily: 'Montserrat' }}>
                    {project.name}
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="text-xs text-gray-600 space-y-1 mb-3">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx}>📍 {metric}</div>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-black hover:text-yellow-600 transition-colors">
                    View Case Study →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="container max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-black mb-16" style={{ fontFamily: 'Montserrat' }}>
            Core Competencies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="h-1 w-20 bg-yellow-400"></div>
              <h3 className="text-2xl font-bold text-black" style={{ fontFamily: 'Montserrat' }}>
                Digital Strategy & Marketing
              </h3>
              <p className="text-sm font-semibold text-yellow-600 uppercase tracking-wide">DATA-DRIVEN GROWTH</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• SEO & PPC Optimization</li>
                <li>• Social Media Marketing</li>
                <li>• Data-Driven Analytics</li>
                <li>• Campaign Management</li>
                <li>• Omnichannel Strategy</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="h-1 w-20 bg-yellow-400"></div>
              <h3 className="text-2xl font-bold text-black" style={{ fontFamily: 'Montserrat' }}>
                Brand Design & Creative Direction
              </h3>
              <p className="text-sm font-semibold text-yellow-600 uppercase tracking-wide">SYSTEMATIC CREATIVITY</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Brand Identity & Strategy</li>
                <li>• Creative Direction</li>
                <li>• Graphic Design</li>
                <li>• Web Design & UX</li>
                <li>• Packaging Design</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="h-1 w-20 bg-yellow-400"></div>
              <h3 className="text-2xl font-bold text-black" style={{ fontFamily: 'Montserrat' }}>
                Retail & Launch Strategy
              </h3>
              <p className="text-sm font-semibold text-yellow-600 uppercase tracking-wide">OMNICHANNEL EXCELLENCE</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Retail Systems Design</li>
                <li>• Brand Launch Strategy</li>
                <li>• In-Store Marketing</li>
                <li>• Brand Experience Design</li>
                <li>• Scalable Systems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black text-white py-20">
          <div className="container max-w-6xl mx-auto px-4 text-center space-y-8">
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Montserrat' }}>
              Ready to Start a Project?
            </h2>
            <p className="text-xl text-gray-300">
              Let's discuss how I can help you build a brand that scales and drives measurable results.
            </p>
            <Link href="/contact">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-6 text-lg font-semibold">
                Get In Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-black">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src="/ka-logo.png" alt="KA Logo" className="h-12 w-12 object-contain mb-4" />
              <p className="text-gray-700">Strategic creative leader specializing in brand growth and market expansion.</p>
            </div>
            <div>
              <h4 className="font-bold text-black mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-700">
                <li><Link href="/about" className="hover:text-yellow-600">About</Link></li>
                <li><Link href="/portfolio" className="hover:text-yellow-600">Portfolio</Link></li>
                <li><Link href="/case-studies" className="hover:text-yellow-600">Case Studies</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-black mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-700">
                <li><a href="https://linkedin.com/in/awwad-khaled" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600">LinkedIn</a></li>
                <li><a href="https://behance.net/khaledawwad" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600">Behance</a></li>
                <li><Link href="/contact" className="hover:text-yellow-600">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Khaled Awwad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
