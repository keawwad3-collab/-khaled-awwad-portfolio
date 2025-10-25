import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      name: "Sharaf Retail",
      category: "Retail Strategy",
      description: "Transforming retail experience across 22+ locations with strategic design system",
      color: "border-accent",
      image: "/projects/wix_sharaf_brand_guide.webp",
      behanceLink: "https://www.behance.net/khaledawwad"
    },
    {
      id: 2,
      name: "Brand Development",
      category: "Digital Marketing",
      description: "Strategic branding and digital marketing campaigns for market expansion",
      color: "border-primary",
      image: "/projects/wix_project_signage.webp",
      behanceLink: "https://www.behance.net/khaledawwad"
    },
    {
      id: 3,
      name: "Product Design",
      category: "Brand Design",
      description: "Comprehensive product design and packaging strategy for premium positioning",
      color: "border-accent",
      image: "/projects/wix_product_display.webp",
      behanceLink: "https://www.behance.net/khaledawwad"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-primary border-b border-border">
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
              <h1 className="text-6xl font-bold text-primary leading-tight mb-6" style={{ fontFamily: 'Montserrat' }}>
                Building Brands That Scale
              </h1>
              <p className="text-xl text-foreground leading-relaxed">
                Strategic creative leader with 10+ years of experience driving brand growth, market expansion, and measurable business outcomes across MENA and North America.
              </p>
            </div>

            <div className="flex gap-4">
              <Link href="/portfolio">
                <Button className="bg-accent hover:bg-accent/90 text-black px-8 py-6 text-lg font-semibold">
                  View My Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg font-semibold">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="bg-card border border-border aspect-square flex items-center justify-center overflow-hidden">
            <img 
              src="/ka-logo.png" 
              alt="KA Logo" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="bg-gray-50 py-20">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'Montserrat' }}>
              Featured Work
            </h2>
            <p className="text-xl text-foreground mb-16">
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
                  <div className="bg-card border-2 border-border aspect-video mb-4 flex items-center justify-center overflow-hidden hover:border-accent transition-colors">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors" style={{ fontFamily: 'Montserrat' }}>
                    {project.name}
                  </h3>
                  <p className="text-foreground">
                    {project.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="container max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-primary mb-16" style={{ fontFamily: 'Montserrat' }}>
            Core Competencies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="h-1 w-20 bg-accent"></div>
              <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Montserrat' }}>
                Digital Strategy & Marketing
              </h3>
              <p className="text-sm font-semibold text-accent uppercase tracking-wide">DATA-DRIVEN GROWTH</p>
              <ul className="space-y-2 text-foreground">
                <li>• SEO & PPC Optimization</li>
                <li>• Social Media Marketing</li>
                <li>• Data-Driven Analytics</li>
                <li>• Campaign Management</li>
                <li>• Omnichannel Strategy</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="h-1 w-20 bg-accent"></div>
              <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Montserrat' }}>
                Brand Design & Creative Direction
              </h3>
              <p className="text-sm font-semibold text-accent uppercase tracking-wide">SYSTEMATIC CREATIVITY</p>
              <ul className="space-y-2 text-foreground">
                <li>• Brand Identity & Strategy</li>
                <li>• Creative Direction</li>
                <li>• Graphic Design</li>
                <li>• Web Design & UX</li>
                <li>• Packaging Design</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="h-1 w-20 bg-accent"></div>
              <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Montserrat' }}>
                Retail & Launch Strategy
              </h3>
              <p className="text-sm font-semibold text-accent uppercase tracking-wide">OMNICHANNEL EXCELLENCE</p>
              <ul className="space-y-2 text-foreground">
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
        <section className="bg-primary text-white py-20">
          <div className="container max-w-6xl mx-auto px-4 text-center space-y-8">
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Montserrat' }}>
              Ready to Start a Project?
            </h2>
            <p className="text-xl text-gray-300">
              Let's discuss how I can help you build a brand that scales and drives measurable results.
            </p>
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-black px-8 py-6 text-lg font-semibold">
                Get In Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src="/ka-logo.png" alt="KA Logo" className="h-12 w-12 object-contain mb-4" />
              <p className="text-foreground">Strategic creative leader specializing in brand growth and market expansion.</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2 text-foreground">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/case-studies">Case Studies</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Connect</h4>
              <ul className="space-y-2 text-foreground">
                <li><a href="https://linkedin.com/in/khaledawwad" target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a></li>
                <li><a href="https://behance.net/khaledawwad" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Behance</a></li>
                <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Khaled Awwad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
