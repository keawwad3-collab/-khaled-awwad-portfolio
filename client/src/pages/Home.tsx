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
    },
    {
      id: 2,
      name: "Hello Food",
      category: "Digital Marketing",
      description: "Digital marketing strategy and brand launch driving market awareness",
      color: "border-primary",
    },
    {
      id: 3,
      name: "Go Sport",
      category: "Brand Design",
      description: "Brand redesign and market expansion strategy for premium positioning",
      color: "border-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-black" style={{ fontFamily: 'Montserrat' }}>
            KA
          </span>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-accent font-semibold">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/contact">Contact</Link>
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

          {/* Hero Image Placeholder */}
          <div className="bg-card border border-border aspect-square flex items-center justify-center">
            <div className="text-8xl font-bold text-muted-foreground opacity-50">
              KA
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="bg-card border-t border-border py-20">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-black mb-4" style={{ fontFamily: 'Montserrat' }}>
              Featured Work
            </h2>
            <p className="text-lg text-foreground mb-16">
              Recent projects demonstrating strategic expertise across brand design, digital marketing, and retail strategy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <Link key={project.id} href="/case-studies">
                  <div className="group cursor-pointer h-full">
                    <div className={`bg-background border-2 ${project.color} aspect-video mb-6 flex items-center justify-center group-hover:border-opacity-80 transition-all`}>
                      <div className="text-5xl font-bold text-muted-foreground opacity-50">
                        {project.id}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-accent uppercase tracking-wide">
                        {project.category}
                      </p>
                      <h3 className="text-xl font-bold text-black" style={{ fontFamily: 'Montserrat' }}>
                        {project.name}
                      </h3>
                      <p className="text-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/portfolio">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold">
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Core Competencies Section */}
        <section className="container max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-black mb-16" style={{ fontFamily: 'Montserrat' }}>
            Core Competencies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-8 bg-card border-t-4 border-accent">
              <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Montserrat' }}>
                Digital Strategy & Marketing
              </h3>
              <p className="text-sm text-accent font-semibold uppercase tracking-wide mb-6">
                Data-Driven Growth
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>SEO & PPC Optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Social Media Marketing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Data-Driven Analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Campaign Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Omnichannel Strategy</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 bg-card border-t-4 border-primary">
              <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Montserrat' }}>
                Brand Design & Creative Direction
              </h3>
              <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-6">
                Systematic Creativity
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Brand Identity & Strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Creative Direction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Graphic Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Web Design & UX</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Packaging Design</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 bg-card border-t-4 border-teal-500">
              <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Montserrat' }}>
                Retail & Launch Strategy
              </h3>
              <p className="text-sm text-teal-500 font-semibold uppercase tracking-wide mb-6">
                Omnichannel Excellence
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">→</span>
                  <span>Retail Systems Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">→</span>
                  <span>Brand Launch Strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">→</span>
                  <span>In-Store Marketing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">→</span>
                  <span>Brand Experience Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold">→</span>
                  <span>Scalable Systems</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-card border-t border-border py-20">
          <div className="container max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-black mb-6" style={{ fontFamily: 'Montserrat' }}>
              Ready to Start a Project?
            </h2>
            <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help you build a brand that scales and drives measurable business results.
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
      <footer className="bg-card border-t border-border mt-0">
        <div className="container max-w-6xl mx-auto px-4 py-12 text-center text-muted-foreground">
          <p>&copy; 2024 Khaled Awwad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
