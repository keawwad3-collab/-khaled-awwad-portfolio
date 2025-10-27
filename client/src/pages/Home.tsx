import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuredProjects = [
    {
      id: 1,
      name: "Sharaf Electronics Guideline",
      category: "Brand Systems",
      description: "Enterprise-scale creative systems for 22+ retail locations ensuring 100% brand consistency across multiple countries.",
      metrics: ["22+ Locations | 4 Countries", "100% Consistency"],
      image: "/projects/sharaf_electronics_guideline.png",
      behanceLink: "https://www.behance.net/gallery/16691125/Sharaf-Electornics-Guidleline",
      result: "+40% brand recognition across markets"
    },
    {
      id: 2,
      name: "Hello Hot Ketchup",
      category: "Digital Strategy",
      description: "FMCG brand ecosystem design and digital strategy focused on customer lifecycle value and market expansion.",
      metrics: ["20+ Products | ↑ CLV", "3 Regions"],
      image: "/projects/hello_hot_ketchup.png",
      behanceLink: "https://www.behance.net/gallery/104490495/Hello-Hot-Ketchup",
      result: "+18% customer lifetime value in first year"
    },
    {
      id: 3,
      name: "Make It Personal",
      category: "Retail Design",
      description: "Flagship store marketing and omnichannel customer experience design with integrated digital touchpoints.",
      metrics: ["Flagship Location", "Omnichannel | Engagement ↑"],
      image: "/projects/make_it_personal.webp",
      behanceLink: "https://www.behance.net/gallery/29317501/MAKE-IT-PERSONAL",
      result: "+25% in-store engagement"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.03,
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black border-b border-gray-300">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <img src="/ka-logo.png" alt="KA Logo" className="h-10 w-10 object-contain" />
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-white font-semibold hover:text-yellow-400 transition-colors duration-300">Home</Link>
            <Link href="/about" className="text-white hover:text-yellow-400 transition-colors duration-300">About</Link>
            <Link href="/portfolio" className="text-white hover:text-yellow-400 transition-colors duration-300">Portfolio</Link>
            <Link href="/case-studies" className="text-white hover:text-yellow-400 transition-colors duration-300">Case Studies</Link>
            <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors duration-300">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="flex flex-col">
        {/* Hero Section with Parallax */}
        <section className="container max-w-6xl mx-auto px-4 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl font-bold text-black leading-tight mb-6"
                style={{ fontFamily: 'Montserrat' }}
              >
                Building Brands That Scale
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-700 leading-relaxed"
              >
                Strategic creative leader with 10+ years of experience driving brand growth, market expansion, and measurable business outcomes across MENA and North America.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4"
            >
              <Link href="/portfolio">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-6 text-lg font-semibold">
                    View My Work
                  </Button>
                </motion.div>
              </Link>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button variant="outline" className="border-black text-black hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                    Get In Touch
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              transform: `translateY(${scrollY * 0.2}px)`
            }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src="/hero-banner.png"
              alt="Digital Marketing and Design"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        </section>

        {/* Featured Work Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="bg-gray-50 py-20 border-t-2 border-black"
        >
          <div className="container max-w-6xl mx-auto px-4">
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-black mb-4"
              style={{ fontFamily: 'Montserrat' }}
            >
              Featured Work
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-700 mb-16"
            >
              Recent projects demonstrating strategic expertise across brand design, digital strategy, and retail leadership.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="bg-white border-2 border-gray-200 overflow-hidden group cursor-pointer"
                >
                  <motion.a
                    href={project.behanceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={cardHoverVariants}
                    className="block"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <p className="text-xs font-bold text-yellow-600 uppercase tracking-wide mb-2">
                          {project.category}
                        </p>
                        <h3 className="text-xl font-bold text-black mb-2">
                          {project.name}
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-2">
                        {project.metrics.map((metric, idx) => (
                          <p key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                            <span className="text-yellow-600">▸</span>
                            {metric}
                          </p>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm font-semibold text-black">
                          {project.result}
                        </p>
                      </div>

                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="text-yellow-600 font-semibold flex items-center gap-2"
                      >
                        View Case Study →
                      </motion.div>
                    </div>
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Core Competencies */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="py-20"
        >
          <div className="container max-w-6xl mx-auto px-4">
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-black mb-16 text-center"
              style={{ fontFamily: 'Montserrat' }}
            >
              Core Competencies
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Digital Strategy & Marketing",
                  subtitle: "DATA-DRIVEN GROWTH",
                  skills: ["SEO & Content Marketing", "Social Media Strategy", "Data-Driven Analytics", "Campaign Management", "Omnichannel Strategy"]
                },
                {
                  title: "Brand Design & Creative Direction",
                  subtitle: "SYSTEMATIC CREATIVITY",
                  skills: ["Brand Identity & Strategy", "Creative Direction", "Graphic Design", "Web Design & UX", "Packaging Design"]
                },
                {
                  title: "Retail & Launch Strategy",
                  subtitle: "OMNICHANNEL EXCELLENCE",
                  skills: ["Retail Systems Design", "Brand Launch Strategy", "In-Store Marketing", "Brand Experience Design", "Scalable Systems"]
                }
              ].map((competency, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                  className="border-2 border-gray-200 p-8 space-y-4 bg-white"
                >
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <p className="text-xs font-bold text-yellow-600 uppercase tracking-wide mb-2">
                      {competency.subtitle}
                    </p>
                    <h3 className="text-2xl font-bold text-black">
                      {competency.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {competency.skills.map((skill, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start gap-2">
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

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black text-white py-20"
        >
          <div className="container max-w-4xl mx-auto px-4 text-center space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold"
              style={{ fontFamily: 'Montserrat' }}
            >
              Ready to Start a Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Let's discuss how I can help you build a brand that scales and drives measurable results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 215, 0, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 text-lg font-semibold">
                    Get In Touch
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="bg-white border-t-2 border-gray-200 py-12">
          <div className="container max-w-6xl mx-auto px-4">
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
                  <li><Link href="/portfolio" className="text-gray-700 hover:text-yellow-600 transition-colors">Portfolio</Link></li>
                  <li><Link href="/case-studies" className="text-gray-700 hover:text-yellow-600 transition-colors">Case Studies</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-black mb-4">Connect</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://www.linkedin.com/in/awwad-khaled" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-yellow-600 transition-colors">LinkedIn</a></li>
                  <li><a href="https://www.behance.net/khaledawwad" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-yellow-600 transition-colors">Behance</a></li>
                  <li><Link href="/contact" className="text-gray-700 hover:text-yellow-600 transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
              © 2024 Khaled Awwad. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
