import { Link } from "wouter";

const caseStudies = [
  {
    id: 1,
    title: "Hello Food: Digital Transformation & CLV Growth",
    company: "Bahrani Group / Hello Food",
    role: "Digital Marketing and Design Manager",
    duration: "Jan 2019 – Aug 2021",
    description: "Spearheaded the digital launch and strategic roadmap for Hello Food, establishing a strong online presence and driving brand awareness through comprehensive digital marketing and design strategies.",
    challenge: "Hello Food needed to rapidly establish its brand in a competitive market, requiring a robust digital infrastructure and compelling brand identity.",
    results: [
      "Increased Customer Lifetime Value (CLV) by 18% in the first year",
      "Successfully launched 20+ new products with unified brand message",
      "Achieved top-of-mind awareness in target demographic within 9 months"
    ],
    companyLink: "https://hello-food.com",
    behanceLink: "https://www.behance.net/gallery/104490495/Hello-Hot-Ketchup"
  },
  {
    id: 2,
    title: "Designfab: Creative Direction & Branding Systems",
    company: "Designfab Inc.",
    role: "Art Director",
    duration: "Oct 2023 – May 2024",
    description: "Led creative strategy and execution across a diverse portfolio of projects, translating client visions into impactful digital and print designs with emphasis on enhancing branding through innovative design solutions.",
    challenge: "Designfab specialized in fabrication, requiring strategic creative direction that elevated client branding and ensured cohesive visual systems across physical and digital touchpoints.",
    results: [
      "Achieved 75% enhancement in client branding through innovative design solutions",
      "Successfully delivered numerous projects on time and within budget",
      "Developed and applied cohesive branding systems across digital and physical mediums"
    ],
    companyLink: "https://www.designfab.co",
    behanceLink: "https://www.behance.net/gallery/16691125/Sharaf-Electornics-Guidleline"
  },
  {
    id: 3,
    title: "Go Sport: Retail Marketing & Brand Experience",
    company: "Al Mana (Go Sport)",
    role: "Retail Marketing Design Specialist",
    duration: "Jun 2018 – Jun 2019",
    description: "Instrumental in shaping the in-store and digital brand experience for Go Sport, developing innovative marketing concepts and designing engaging digital and physical touchpoints to drive sales and brand loyalty.",
    challenge: "In a highly competitive retail landscape, Go Sport needed to differentiate itself and create memorable brand experiences that resonated with its target demographic.",
    results: [
      "Increased in-store customer engagement by 25% (measured by time spent in key zones)",
      "Successfully integrated omnichannel touchpoints, leading to 15% increase in app downloads",
      "Established new standard for retail experience design to be rolled out across future locations"
    ],
    companyLink: "https://www.sharafgroup.com",
    behanceLink: "https://www.behance.net/gallery/29317501/MAKE-IT-PERSONAL"
  }
];

export default function CaseStudies() {
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
            <Link href="/portfolio" className="text-white hover:text-yellow-400 transition-colors">Portfolio</Link>
            <Link href="/case-studies" className="text-white font-semibold hover:text-yellow-400 transition-colors">Case Studies</Link>
            <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="container max-w-6xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-black mb-4" style={{ fontFamily: 'Montserrat' }}>
            Case Studies
          </h1>
          <p className="text-xl text-gray-700">
            In-depth looks at how I've helped brands scale, grow, and achieve measurable results
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={study.id} className={`pb-16 ${index !== caseStudies.length - 1 ? 'border-b-2 border-gray-200' : ''}`}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-black mb-2" style={{ fontFamily: 'Montserrat' }}>
                      {study.title}
                    </h2>
                    <p className="text-yellow-600 font-semibold">{study.company}</p>
                    <p className="text-sm text-gray-600">{study.role} | {study.duration}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">Overview</h3>
                    <p className="text-gray-700 leading-relaxed">{study.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">Challenge</h3>
                    <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black mb-3">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <span className="text-yellow-600 font-bold mt-1">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column - Links */}
                <div className="space-y-4">
                  <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-lg space-y-4">
                    <h3 className="font-bold text-black">Related Links</h3>
                    
                    <a 
                      href={study.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-4 text-center transition-colors"
                    >
                      Visit Company Website
                    </a>

                    <a 
                      href={study.behanceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border-2 border-black hover:bg-black hover:text-white text-black font-semibold py-3 px-4 text-center transition-colors"
                    >
                      View on Behance
                    </a>

                    <Link href="/portfolio">
                      <button className="w-full border-2 border-gray-300 hover:border-black text-black font-semibold py-3 px-4 transition-colors">
                        See More Projects
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
