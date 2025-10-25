import { Link } from "wouter";

const caseStudies = [
  {
    id: "sharaf",
    title: "Sharaf Retail",
    subtitle: "Transforming Retail Experience Through Strategic Design",
    category: "Retail Strategy",
    image: "1",
    description: "Led comprehensive retail design overhaul for 22+ locations across MENA region, resulting in 75% brand enhancement score and significantly improved customer experience.",
  },
  {
    id: "hello-food",
    title: "Hello Food",
    subtitle: "Digital Marketing & Brand Launch",
    category: "Digital Marketing",
    image: "2",
    description: "Spearheaded digital marketing strategy and brand launch campaign, driving market awareness and customer acquisition through omnichannel approach.",
  },
  {
    id: "go-sport",
    title: "Go Sport",
    subtitle: "Brand Design & Market Expansion",
    category: "Brand Design",
    image: "3",
    description: "Developed comprehensive brand design system and launch strategy for market expansion, establishing strong brand presence and market positioning.",
  },
];

export default function CaseStudies() {
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
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/case-studies" className="text-accent font-semibold">Case Studies</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="container max-w-6xl mx-auto px-4 py-20">
        {/* Page Header */}
        <div className="mb-20">
          <h1 className="text-5xl font-bold text-black mb-4" style={{ fontFamily: 'Montserrat' }}>
            Case Studies
          </h1>
          <p className="text-xl text-foreground max-w-2xl">
            In-depth analysis of strategic projects that demonstrate my approach to solving complex business challenges through design and marketing.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="bg-card border border-border aspect-video flex items-center justify-center">
                  <div className="text-6xl font-bold text-muted-foreground opacity-50">
                    {study.image}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                  {study.category}
                </p>
                <h2 className="text-4xl font-bold text-black mb-2" style={{ fontFamily: 'Montserrat' }}>
                  {study.title}
                </h2>
                <h3 className="text-xl text-primary font-semibold mb-6">
                  {study.subtitle}
                </h3>
                <p className="text-lg text-foreground leading-relaxed mb-8">
                  {study.description}
                </p>
                <Link href={`/case-study/${study.id}`}>
                  <button className="bg-accent hover:bg-accent/90 text-black px-8 py-3 font-semibold">
                    Read Full Case Study
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link href="/contact">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 font-semibold">
              Discuss Your Project
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
