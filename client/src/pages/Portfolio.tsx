import { Link } from "wouter";

const projects = [
  { 
    id: 1, 
    name: "Sharaf Electronics Guideline", 
    category: "Brand Systems", 
    featured: true,
    image: "/projects/sharaf_electronics_guideline.webp"
  },
  { 
    id: 2, 
    name: "Hello Products", 
    category: "Packaging Design", 
    featured: true,
    image: "/projects/hello_products.webp"
  },
  { 
    id: 3, 
    name: "Make It Personal", 
    category: "Retail Design", 
    featured: true,
    image: "/projects/make_it_personal.webp"
  },
  { 
    id: 4, 
    name: "Mykozie Logo", 
    category: "Branding", 
    featured: false,
    image: "/projects/mykozie_logo.webp"
  },
  { 
    id: 5, 
    name: "BBQ Sauce", 
    category: "Packaging Design", 
    featured: false,
    image: "/projects/bbq_sauce.webp"
  },
  { 
    id: 6, 
    name: "Hello Hot Ketchup", 
    category: "Product Design", 
    featured: false,
    image: "/projects/hello_hot_ketchup.webp"
  },
  { 
    id: 7, 
    name: "Dipping Sauce Package", 
    category: "Packaging", 
    featured: false,
    image: "/projects/dipping_sauce_package.webp"
  },
  { 
    id: 8, 
    name: "Social Media Posts", 
    category: "Digital Content", 
    featured: false,
    image: "/projects/social_media_posts.webp"
  },
  { 
    id: 9, 
    name: "Exhibition Stand Design", 
    category: "Retail Design", 
    featured: false,
    image: "/projects/exhibition_stand_design.webp"
  },
  { 
    id: 10, 
    name: "Exhibition Stand Design 2", 
    category: "Retail Design", 
    featured: false,
    image: "/projects/exhibition_stand_design_2.webp"
  },
  { 
    id: 11, 
    name: "Mazda Campaign 2", 
    category: "Automotive", 
    featured: false,
    image: "/projects/mazda_campaign_2.webp"
  },
  { 
    id: 12, 
    name: "Chillout Dubai", 
    category: "Event Design", 
    featured: false,
    image: "/projects/chillout_dubai.webp"
  },
];

export default function Portfolio() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <span className="text-2xl font-bold text-black">KA</span>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/portfolio" className="text-accent font-semibold">Portfolio</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="container max-w-6xl mx-auto px-4 py-20">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-black mb-4" style={{ fontFamily: 'Montserrat' }}>
            Portfolio
          </h1>
          <p className="text-xl text-foreground">
            A selection of my recent work across brand design, digital marketing, and retail strategy.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-12" style={{ fontFamily: 'Montserrat' }}>
            Featured Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="bg-card border border-border aspect-video mb-4 flex items-center justify-center overflow-hidden hover:border-accent transition-colors">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-accent uppercase tracking-wide">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold text-black" style={{ fontFamily: 'Montserrat' }}>
                    {project.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-12" style={{ fontFamily: 'Montserrat' }}>
            All Projects
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="bg-card border border-border aspect-square mb-3 flex items-center justify-center overflow-hidden hover:border-accent transition-colors">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide">
                    {project.category}
                  </p>
                  <h3 className="text-sm font-bold text-black" style={{ fontFamily: 'Montserrat' }}>
                    {project.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link href="/contact">
            <button className="bg-accent hover:bg-accent/90 text-black px-8 py-4 font-semibold">
              Start a Project
            </button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="container max-w-6xl mx-auto px-4 py-12 text-center text-muted-foreground">
          <p>&copy; 2024 Khaled Awwad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
