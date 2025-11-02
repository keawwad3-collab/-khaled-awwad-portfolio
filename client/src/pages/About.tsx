import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function About() {
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
            <Link href="/about" className="text-white font-semibold hover:text-yellow-400 transition-colors">About</Link>
            <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="container max-w-4xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-black mb-4" style={{ fontFamily: 'Montserrat' }}>
            About Me
          </h1>
          <p className="text-xl text-gray-700">
            Strategic creative leader with 10+ years of experience building brands that scale
          </p>
        </div>

        {/* Professional Summary */}
        <section className="mb-16 pb-16 border-b-2 border-gray-200">
          <h2 className="text-3xl font-bold text-black mb-6" style={{ fontFamily: 'Montserrat' }}>
            Professional Summary
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Experienced Digital Marketing and Design Manager with over a decade of success driving brand growth and market expansion across the MENA region and North America. A strategic leader adept at crafting impactful digital marketing strategies, overseeing brand design initiatives, and spearheading successful brand launches.
            </p>
            <p>
              Proven ability to manage cross-functional teams, enhance retail creative systems, and deliver measurable results in dynamic environments. Proficient in SEO, Google Ads, Adobe Creative Suite, and data-driven marketing, with a strong focus on omnichannel marketing and customer lifecycle value.
            </p>
            <p>
              Currently based in Ottawa, Canada, with plans to relocate to Dubai. Passionate about building scalable brand systems that drive measurable business outcomes.
            </p>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="mb-16 pb-16 border-b-2 border-gray-200">
          <h2 className="text-3xl font-bold text-black mb-8" style={{ fontFamily: 'Montserrat' }}>
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">10+</div>
              <p className="text-gray-700 font-semibold">Years of Experience</p>
              <p className="text-sm text-gray-600">Building brands across MENA and North America</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">22+</div>
              <p className="text-gray-700 font-semibold">Retail Locations Managed</p>
              <p className="text-sm text-gray-600">Across 4 countries with 100% brand consistency</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">75%</div>
              <p className="text-gray-700 font-semibold">Brand Enhancement</p>
              <p className="text-sm text-gray-600">Average improvement in client branding</p>
            </div>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="mb-16 pb-16 border-b-2 border-gray-200">
          <h2 className="text-3xl font-bold text-black mb-8" style={{ fontFamily: 'Montserrat' }}>
            Core Competencies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="h-1 w-12 bg-yellow-400 mb-4"></div>
              <h3 className="text-xl font-bold text-black mb-3" style={{ fontFamily: 'Montserrat' }}>
                Digital Strategy & Marketing
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Digital Marketing Strategy</li>
                <li>• SEO & PPC Optimization</li>
                <li>• Social Media Marketing</li>
                <li>• Content Marketing</li>
                <li>• Email Marketing</li>
                <li>• Google Ads Certified</li>
                <li>• Campaign Management</li>
                <li>• Omnichannel Marketing</li>
              </ul>
            </div>

            <div>
              <div className="h-1 w-12 bg-yellow-400 mb-4"></div>
              <h3 className="text-xl font-bold text-black mb-3" style={{ fontFamily: 'Montserrat' }}>
                Brand Design & Creative Direction
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Brand Identity & Strategy</li>
                <li>• Creative Direction</li>
                <li>• Graphic Design</li>
                <li>• Web Design & UX</li>
                <li>• Packaging Design</li>
                <li>• Art Direction</li>
                <li>• Visual Merchandising</li>
                <li>• Adobe Creative Suite</li>
              </ul>
            </div>

            <div>
              <div className="h-1 w-12 bg-yellow-400 mb-4"></div>
              <h3 className="text-xl font-bold text-black mb-3" style={{ fontFamily: 'Montserrat' }}>
                Retail & Launch Strategy
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Retail Systems Design</li>
                <li>• Brand Launch Strategy</li>
                <li>• In-Store Marketing</li>
                <li>• Brand Experience Design</li>
                <li>• Scalable Systems</li>
                <li>• Project Management</li>
                <li>• Team Leadership</li>
                <li>• Customer Lifecycle Value</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-16 pb-16 border-b-2 border-gray-200">
          <h2 className="text-3xl font-bold text-black mb-8" style={{ fontFamily: 'Montserrat' }}>
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {/* Designfab */}
            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-xl font-bold text-black" style={{ fontFamily: 'Montserrat' }}>
                Art Director
              </h3>
              <p className="text-yellow-600 font-semibold">Designfab Inc. | Vaughan, Ontario, Canada</p>
              <p className="text-sm text-gray-600 mb-3">Oct 2023 – May 2024 (8 months)</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Led creative strategy and execution for high-impact digital and print design initiatives</li>
                <li>• Achieved 75% enhancement in client branding through innovative design solutions</li>
                <li>• Directed and mentored a team of designers, delivering work on time and within budget</li>
                <li>• Managed client relationships and translated complex requirements into compelling visual narratives</li>
              </ul>
            </div>

            {/* Hello Food */}
            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-xl font-bold text-black" style={{ fontFamily: 'Montserrat' }}>
                Digital Marketing and Design Manager
              </h3>
              <p className="text-yellow-600 font-semibold">Bahrani Group / Hello Food | Amman, Jordan</p>
              <p className="text-sm text-gray-600 mb-3">Jan 2019 – Aug 2021 (2 years 8 months)</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Developed and executed comprehensive digital marketing plans across multiple brands</li>
                <li>• Designed and optimized corporate websites, increasing SEO performance significantly</li>
                <li>• Cultivated strong brand awareness across social media platforms (Facebook, Instagram, LinkedIn)</li>
                <li>• Implemented data-driven marketing initiatives that increased Customer Lifetime Value (CLV)</li>
                <li>• Oversaw all aspects of design, ensuring brand consistency across touchpoints</li>
              </ul>
            </div>

            {/* Go Sport */}
            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-xl font-bold text-black" style={{ fontFamily: 'Montserrat' }}>
                Retail Marketing Design Specialist
              </h3>
              <p className="text-yellow-600 font-semibold">Al Mana (Go Sport) | United Arab Emirates</p>
              <p className="text-sm text-gray-600 mb-3">Jun 2018 – Jun 2019 (1 year 1 month)</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Conceptualized and developed innovative in-store marketing concepts and campaigns</li>
                <li>• Managed photography and photo editing for high-quality visual assets</li>
                <li>• Enhanced in-store application design and user experience for improved customer engagement</li>
                <li>• Collaborated with cross-functional teams to ensure seamless execution of retail strategies</li>
              </ul>
            </div>

            {/* Sharaf Retail */}
            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-xl font-bold text-black" style={{ fontFamily: 'Montserrat' }}>
                Senior Graphic Designer
              </h3>
              <p className="text-yellow-600 font-semibold">Sharaf Retail | United Arab Emirates</p>
              <p className="text-sm text-gray-600 mb-3">Mar 2017 – May 2018 (1 year 3 months)</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Created compelling creative assets for retail brands across print and digital</li>
                <li>• Streamlined brief management process between clients and creative team</li>
                <li>• Engaged with suppliers to identify optimal materials and secure competitive quotations</li>
                <li>• Contributed to development of scalable retail creative systems</li>
              </ul>
            </div>

            {/* Sharaf DG */}
            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-xl font-bold text-black" style={{ fontFamily: 'Montserrat' }}>
                Graphic Designer
              </h3>
              <p className="text-yellow-600 font-semibold">Sharaf DG | United Arab Emirates</p>
              <p className="text-sm text-gray-600 mb-3">Dec 2015 – Feb 2017 (1 year 3 months)</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Designed printable materials including brochures, flyers, and advertisements</li>
                <li>• Developed and wrote engaging ad scripts for marketing campaigns</li>
                <li>• Designed intuitive web interfaces using Photoshop</li>
                <li>• Executed Below-The-Line (BTL) outdoor and indoor printing designs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8" style={{ fontFamily: 'Montserrat' }}>
            Education & Certifications
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-lg font-bold text-black">
                Certificate in Digital Marketing
              </h3>
              <p className="text-yellow-600 font-semibold">University of Toronto, Canada</p>
              <p className="text-sm text-gray-600 mb-2">Jun 2023 – Dec 2023</p>
              <p className="text-sm text-gray-700">Intensive boot camp focused on marketing strategy, campaign development, digital advertising, and website-building analytics and reporting.</p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-lg font-bold text-black">
                Bachelor's Degree in Graphic Design
              </h3>
              <p className="text-yellow-600 font-semibold">Zarqa Private University, Jordan</p>
              <p className="text-sm text-gray-700">Comprehensive training in visual design, branding, and creative communication.</p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-lg font-bold text-black">
                Google Ads Search Certification
              </h3>
              <p className="text-yellow-600 font-semibold">Google</p>
              <p className="text-sm text-gray-600">Issued January 2024</p>
              <p className="text-sm text-gray-700">Professional certification in Google Ads Search campaign management and optimization.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link href="/contact">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 font-semibold">
              Let's Work Together
            </Button>
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
                <li><Link href="/contact" className="hover:text-yellow-600">Contact</Link></li>
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
