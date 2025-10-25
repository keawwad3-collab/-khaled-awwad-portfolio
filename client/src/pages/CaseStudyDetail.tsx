import { Link, useRoute } from "wouter";

const caseStudyDetails: Record<string, any> = {
  sharaf: {
    title: "Sharaf Retail",
    subtitle: "Transforming Retail Experience Through Strategic Design",
    category: "Retail Strategy",
    year: "2022-2023",
    challenge: "Sharaf faced inconsistent brand presentation across 22+ retail locations in the MENA region. Each location operated independently with varying design standards, leading to a fragmented customer experience and reduced brand recognition.",
    solution: "Developed a comprehensive retail design system that standardized visual identity, in-store layouts, and customer touchpoints across all locations. Created detailed brand guidelines, trained staff, and implemented a phased rollout strategy.",
    results: [
      "75% brand enhancement score across all locations",
      "Increased customer engagement by 45%",
      "Reduced design inconsistencies by 90%",
      "Improved staff efficiency through standardized systems",
    ],
  },
  "hello-food": {
    title: "Hello Food",
    subtitle: "Digital Marketing & Brand Launch",
    category: "Digital Marketing",
    year: "2021-2022",
    challenge: "Hello Food needed to establish market presence in a competitive food delivery landscape. The brand lacked digital marketing strategy and clear market positioning.",
    solution: "Created integrated digital marketing strategy including SEO, social media campaigns, influencer partnerships, and targeted advertising. Developed brand messaging and visual identity to differentiate from competitors.",
    results: [
      "Achieved 150% growth in user acquisition",
      "Established strong social media presence (50K+ followers)",
      "Ranked in top 3 search results for key keywords",
      "Generated 200+ qualified leads per month",
    ],
  },
  "go-sport": {
    title: "Go Sport",
    subtitle: "Brand Design & Market Expansion",
    category: "Brand Design",
    year: "2023",
    challenge: "Go Sport needed to expand into new markets with a refreshed brand identity that would appeal to younger demographics while maintaining brand equity.",
    solution: "Redesigned brand identity with modern visual language, created comprehensive brand guidelines, and developed marketing collateral for market launch. Implemented omnichannel strategy across digital and physical touchpoints.",
    results: [
      "Successfully launched in 3 new markets",
      "Increased brand awareness by 60%",
      "Achieved 40% higher engagement on social media",
      "Established Go Sport as premium lifestyle brand",
    ],
  },
};

export default function CaseStudyDetail() {
  const [, params] = useRoute("/case-study/:id");
  const caseStudy = caseStudyDetails[params?.id || ""];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Case Study Not Found</h1>
          <Link href="/case-studies">
            <button className="bg-accent text-black px-8 py-3 font-semibold">
              Back to Case Studies
            </button>
          </Link>
        </div>
      </div>
    );
  }

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

      <main className="container max-w-4xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-12">
          <Link href="/case-studies">
            <button className="text-accent hover:text-accent/80 mb-6 font-semibold">
              ← Back to Case Studies
            </button>
          </Link>
          
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">
            {caseStudy.category} • {caseStudy.year}
          </p>
          <h1 className="text-5xl font-bold text-black mb-2" style={{ fontFamily: 'Montserrat' }}>
            {caseStudy.title}
          </h1>
          <h2 className="text-2xl text-primary font-semibold">
            {caseStudy.subtitle}
          </h2>
        </div>

        {/* Featured Image */}
        <div className="bg-card border border-border aspect-video flex items-center justify-center mb-16">
          <div className="text-8xl font-bold text-muted-foreground opacity-50">
            {caseStudy.title.charAt(0)}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-16">
          {/* Challenge */}
          <section>
            <h3 className="text-3xl font-bold text-black mb-6" style={{ fontFamily: 'Montserrat' }}>
              Challenge
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              {caseStudy.challenge}
            </p>
          </section>

          {/* Solution */}
          <section>
            <h3 className="text-3xl font-bold text-black mb-6" style={{ fontFamily: 'Montserrat' }}>
              Solution
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              {caseStudy.solution}
            </p>
          </section>

          {/* Results */}
          <section>
            <h3 className="text-3xl font-bold text-black mb-6" style={{ fontFamily: 'Montserrat' }}>
              Results
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.results.map((result: string, index: number) => (
                <div key={index} className="p-6 bg-card border-l-4 border-accent">
                  <p className="text-lg text-foreground">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link href="/contact">
            <button className="bg-accent hover:bg-accent/90 text-black px-8 py-4 font-semibold text-lg">
              Start Your Project
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
