import { Link } from "wouter";

const projects = [
  { 
    id: 1, 
    name: "Sharaf Electronics Guideline", 
    category: "Brand Systems", 
    featured: true,
    image: "/projects/sharaf_electronics_guideline.webp",
    behanceLink: "https://www.behance.net/gallery/16691125/Sharaf-Electornics-Guidleline"
  },
  { 
    id: 2, 
    name: "Hello Hot Ketchup", 
    category: "Packaging Design", 
    featured: true,
    image: "/projects/hello_hot_ketchup.webp",
    behanceLink: "https://www.behance.net/gallery/104490495/Hello-Hot-Ketchup"
  },
  { 
    id: 3, 
    name: "Make It Personal", 
    category: "Retail Design", 
    featured: true,
    image: "/projects/make_it_personal.webp",
    behanceLink: "https://www.behance.net/gallery/29317501/MAKE-IT-PERSONAL"
  },
  { 
    id: 4, 
    name: "BBQ Sauce", 
    category: "Packaging Design", 
    featured: false,
    image: "/projects/bbq_sauce.webp",
    behanceLink: "https://www.behance.net/gallery/94107693/BBQ-Sauce"
  },
  { 
    id: 5, 
    name: "Dipping Sauce Package", 
    category: "Packaging", 
    featured: false,
    image: "/projects/dipping_sauce_package.webp",
    behanceLink: "https://www.behance.net/gallery/104056179/Dipping-Sauce-Package"
  },
  { 
    id: 6, 
    name: "Exhibition Stand Design 1", 
    category: "Retail Design", 
    featured: false,
    image: "/projects/exhibition_stand_design.webp",
    behanceLink: "https://www.behance.net/gallery/94837589/Exhibition-Stand-Design"
  },
  { 
    id: 7, 
    name: "Exhibition Stand Design 2", 
    category: "Retail Design", 
    featured: false,
    image: "/projects/exhibition_stand_design_2.webp",
    behanceLink: "https://www.behance.net/gallery/94837063/Exhibition-Stand-design"
  },
  { 
    id: 8, 
    name: "Guidelines DG Plus", 
    category: "Brand Systems", 
    featured: false,
    image: "/projects/guidelines_dg_plus.webp",
    behanceLink: "https://www.behance.net/gallery/16692931/Guidelines-DG-Plus"
  },
  { 
    id: 9, 
    name: "Stationary Design Sharaf Electronics", 
    category: "Branding", 
    featured: false,
    image: "/projects/stationary_design_sharaf.webp",
    behanceLink: "https://www.behance.net/gallery/16692401/Stationary-Design-Sharaf-Electronics"
  },
];

export default function Portfolio() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black border-b-2 border-gray-300">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <img src="/ka-logo.png" alt="KA Logo" className="h-10 w-10 object-contain" />
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-white hover:text-yellow-400 transition-colors">Home</Link>
            <Link href="/about" className="text-white hover:text-yellow-400 transition-colors">About</Link>
            <Link href="/portfolio" className="text-white font-semibold hover:text-yellow-400 transition-colors">Portfolio</Link>
            <Link href="/case-studies" className="text-white hover:text-yellow-400 transition-colors">Case Studies</Link>
            <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="container max-w-6xl mx-auto px-4 py-20">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-black mb-4" style={{ fontFamily: 'Montserrat' }}>
            Portfolio
          </h1>
          <p className="text-xl text-gray-700">
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
              <a 
                key={project.id} 
                href={project.behanceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <div className="bg-gray-100 border-2 border-gray-300 aspect-video mb-4 flex items-center justify-center overflow-hidden hover:border-yellow-400 transition-all duration-300">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-yellow-600 uppercase tracking-wide">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold text-black group-hover:text-yellow-600 transition-colors" style={{ fontFamily: 'Montserrat' }}>
                    {project.name}
                  </h3>
                </div>
              </a>
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
              <a 
                key={project.id} 
                href={project.behanceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <div className="bg-gray-100 border-2 border-gray-300 aspect-square mb-3 flex items-center justify-center overflow-hidden hover:border-yellow-400 transition-all duration-300">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-yellow-600 uppercase tracking-wide">
                    {project.category}
                  </p>
                  <h3 className="text-sm font-bold text-black group-hover:text-yellow-600 transition-colors" style={{ fontFamily: 'Montserrat' }}>
                    {project.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link href="/contact">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 font-semibold">
              Start a Project
            </button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-black mt-20">
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
                <li><a href="https://linkedin.com/in/khaledawwad" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600">LinkedIn</a></li>
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
