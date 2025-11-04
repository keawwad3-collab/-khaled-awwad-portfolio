import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  // Disable parallax on mobile for performance
  const heroParallax = useTransform(scrollY, [0, 800], [0, 40]);



  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <motion.img 
              src="/ka-logo.png" 
              alt="KA Logo" 
              className="h-16 w-16 object-contain cursor-pointer" 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>
          <div className="hidden md:flex gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" }
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.span
                  className="text-white hover:text-yellow-400 transition-colors duration-300 cursor-pointer relative group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                </motion.span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Cinematic Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with conditional parallax */}
        <motion.div
          className="absolute inset-0 z-0 hidden md:block"
          style={{ y: heroParallax }}
        >
          <img
            src="/assets/hero/wow-banner.jpg"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/15" />
        </motion.div>

        {/* Mobile background (no parallax) */}
        <div className="absolute inset-0 z-0 md:hidden">
          <img
            src="/assets/hero/wow-banner-mobile.jpg"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container max-w-5xl mx-auto px-6 py-32 mt-16 md:mt-0 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-8"
          >
            {/* H1 - Updated Tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight px-4"
              style={{ fontFamily: 'Montserrat', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
            >
              Building Stronger Brands<br className="hidden md:block" /> Through Strategy and Design
            </motion.h1>

            {/* Subhead - Updated */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-100 font-light max-w-3xl mx-auto px-4"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
            >
              Where creative direction meets measurable growth.
            </motion.p>



            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8 px-4"
            >
              {/* Primary CTA */}
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-semibold border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-200 w-full sm:w-auto"
                  >
                    Get in touch
                  </Button>
                </motion.div>
              </Link>

              {/* Secondary CTA */}
              <motion.a
                href="https://www.behance.net/awwadkhaled"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  variant="outline" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:border-yellow-400 px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-semibold transition-all duration-200 w-full sm:w-auto"
                >
                  View Behance
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Expertise Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-black mb-6 text-center"
            style={{ fontFamily: 'Montserrat' }}
          >
            Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            Strategic leadership across digital marketing, brand systems, and retail design—driving measurable outcomes for enterprise clients.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Brand Strategy & Creative Direction",
                subtitle: "STRATEGIC CREATIVITY",
                skills: ["Brand Identity & Positioning", "Creative Direction", "Visual Storytelling", "Brand Experience Design", "Design Systems"]
              },
              {
                title: "Digital Marketing & Growth",
                subtitle: "DATA-DRIVEN RESULTS",
                skills: ["SEO & Content Strategy", "Social Media Marketing", "Campaign Management", "Analytics & Insights", "Omnichannel Strategy"]
              },
              {
                title: "Retail & Launch Strategy",
                subtitle: "OMNICHANNEL EXCELLENCE",
                skills: ["Retail Systems Design", "Brand Launch Planning", "In-Store Marketing", "Customer Experience", "Scalable Frameworks"]
              }
            ].map((competency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="border-2 border-gray-200 p-6 md:p-8 space-y-4 bg-white hover:border-yellow-400 transition-all duration-300"
              >
                <div className="border-l-4 border-yellow-400 pl-4">
                  <p className="text-xs font-bold text-yellow-600 uppercase tracking-wide mb-2">
                    {competency.subtitle}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-black">
                    {competency.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {competency.skills.map((skill, idx) => (
                    <li key={idx} className="text-sm md:text-base text-gray-700 flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Achievements Section - NO NUMERIC METRICS */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-black mb-12 md:mb-16 text-center"
            style={{ fontFamily: 'Montserrat' }}
          >
            Key Achievements
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Organic Traffic Growth",
                description: "Achieved through strategic SEO optimization and content marketing campaigns across multiple brands."
              },
              {
                title: "Workflow Optimization",
                description: "Streamlined creative workflows and implemented scalable design systems for faster delivery."
              },
              {
                title: "Brand Cohesion",
                description: "Established comprehensive brand guidelines ensuring unified messaging across 22+ retail locations."
              },
              {
                title: "Customer Lifetime Value",
                description: "Increased CLV through data-driven digital marketing strategies and omnichannel customer experience design."
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-white border-2 border-gray-200 p-6 md:p-8 hover:border-yellow-400 transition-all duration-300"
              >
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3 flex items-center gap-3">
                  <span className="text-yellow-600">✓</span>
                  {achievement.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-black text-white py-16 md:py-24"
      >
        <div className="container max-w-4xl mx-auto px-6 text-center space-y-6 md:space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: 'Montserrat' }}
          >
            Ready to Start a Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300"
          >
            Let's discuss how I can help you build a brand that scales and drives measurable results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-200">
                  Get In Touch
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-gray-200 py-12">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src="/ka-logo.png" alt="KA Logo" className="h-12 w-12 object-contain mb-4" />
              <p className="text-gray-700 text-sm">
                Strategic creative leader specializing in brand growth and market expansion.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-black mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-gray-700 hover:text-yellow-600 transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-gray-700 hover:text-yellow-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.linkedin.com/in/awwad-khaled" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-yellow-600 transition-colors">LinkedIn</a></li>
                <li><a href="https://www.behance.net/awwadkhaled" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-yellow-600 transition-colors">Behance</a></li>
                <li><Link href="/contact" className="text-gray-700 hover:text-yellow-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            © 2024 Khaled Awwad. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
