import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function About() {
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
            <Link href="/about" className="text-accent font-semibold">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="container max-w-6xl mx-auto px-4 py-20">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-black mb-4" style={{ fontFamily: 'Montserrat' }}>
            About Me
          </h1>
          <p className="text-2xl text-accent font-bold" style={{ fontFamily: 'Montserrat' }}>
            Strategic Creative Leader
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Biography */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                Experienced Digital Marketing and Design Manager with over a decade of success driving brand growth and market expansion across the MENA region and North America. I am a strategic leader adept at crafting impactful digital marketing strategies, overseeing end-to-end brand design initiatives, and spearheading successful brand launches.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                My approach is rooted in the belief that design must be both beautiful and functional, directly contributing to measurable business outcomes. I possess a proven ability to manage cross-functional teams, enhance retail creative systems, and deliver measurable results in dynamic, high-stakes environments.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                Proficient in SEO, Google Ads, the Adobe Creative Suite, and data-driven marketing, my focus is on developing robust omnichannel strategies that maximize customer lifecycle value and ensure brand consistency at every touchpoint.
              </p>
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-6">
            <div className="p-6 bg-card border-l-4 border-accent">
              <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Montserrat' }}>
                10+
              </div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Years of Experience
              </p>
            </div>
            
            <div className="p-6 bg-card border-l-4 border-primary">
              <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Montserrat' }}>
                22+
              </div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Retail Locations Managed
              </p>
            </div>
            
            <div className="p-6 bg-card border-l-4 border-teal-500">
              <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Montserrat' }}>
                75%
              </div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Brand Enhancement Score
              </p>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-12" style={{ fontFamily: 'Montserrat' }}>
            Core Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-6 bg-card border-t-4 border-accent">
              <h3 className="text-xl font-bold text-black mb-2" style={{ fontFamily: 'Montserrat' }}>
                Digital Strategy & Marketing
              </h3>
              <p className="text-sm text-accent font-semibold uppercase tracking-wide mb-4">
                Data-Driven Growth
              </p>
              <ul className="space-y-2 text-sm text-foreground">
                <li>→ SEO & PPC Optimization</li>
                <li>→ Social Media Marketing</li>
                <li>→ Data-Driven Analytics</li>
                <li>→ Campaign Management</li>
                <li>→ Omnichannel Strategy</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 bg-card border-t-4 border-primary">
              <h3 className="text-xl font-bold text-black mb-2" style={{ fontFamily: 'Montserrat' }}>
                Brand Design & Creative Direction
              </h3>
              <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-4">
                Systematic Creativity
              </p>
              <ul className="space-y-2 text-sm text-foreground">
                <li>→ Brand Identity & Strategy</li>
                <li>→ Creative Direction</li>
                <li>→ Graphic Design</li>
                <li>→ Web Design & UX</li>
                <li>→ Packaging Design</li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 bg-card border-t-4 border-teal-500">
              <h3 className="text-xl font-bold text-black mb-2" style={{ fontFamily: 'Montserrat' }}>
                Retail & Launch Strategy
              </h3>
              <p className="text-sm text-teal-500 font-semibold uppercase tracking-wide mb-4">
                Omnichannel Excellence
              </p>
              <ul className="space-y-2 text-sm text-foreground">
                <li>→ Retail Systems Design</li>
                <li>→ Brand Launch Strategy</li>
                <li>→ In-Store Marketing</li>
                <li>→ Brand Experience Design</li>
                <li>→ Scalable Systems</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/portfolio">
            <Button className="bg-accent hover:bg-accent/90 text-black px-8 py-6 text-lg">
              View My Work
            </Button>
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
