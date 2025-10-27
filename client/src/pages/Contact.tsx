import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <img src="/ka-logo.png" alt="KA Logo" className="h-10 w-10 object-contain" />
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/contact" className="text-accent font-semibold">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="container max-w-6xl mx-auto px-4 py-20">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-black mb-4" style={{ fontFamily: 'Montserrat' }}>
            Let's Work Together
          </h1>
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-black mb-8" style={{ fontFamily: 'Montserrat' }}>
                Get In Touch
              </h2>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-accent uppercase tracking-wide">Email</p>
                  <a href="mailto:khaled@example.com" className="text-xl text-black hover:text-accent transition-colors">
                    khaled@khaledawwad.com
                  </a>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-accent uppercase tracking-wide">Location</p>
                  <p className="text-xl text-black">
                    Toronto, Canada
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Profiles */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: 'Montserrat' }}>
                Connect With Me
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="https://linkedin.com/in/khaledawwad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border-2 border-border hover:border-accent hover:bg-gray-50 transition-all"
                >
                  <div className="w-12 h-12 bg-accent flex items-center justify-center text-black font-bold">
                    in
                  </div>
                  <div>
                    <p className="font-semibold text-black">LinkedIn</p>
                    <p className="text-sm text-foreground">linkedin.com/in/khaledawwad</p>
                  </div>
                </a>

                <a 
                  href="https://behance.net/khaledawwad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border-2 border-border hover:border-accent hover:bg-gray-50 transition-all"
                >
                  <div className="w-12 h-12 bg-accent flex items-center justify-center text-black font-bold">
                    Be
                  </div>
                  <div>
                    <p className="font-semibold text-black">Behance</p>
                    <p className="text-sm text-foreground">behance.net/khaledawwad</p>
                  </div>
                </a>

                <a 
                  href="https://instagram.com/khaledawwad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border-2 border-border hover:border-accent hover:bg-gray-50 transition-all"
                >
                  <div className="w-12 h-12 bg-accent flex items-center justify-center text-black font-bold">
                    @
                  </div>
                  <div>
                    <p className="font-semibold text-black">Instagram</p>
                    <p className="text-sm text-foreground">@khaledawwad</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-border focus:border-accent focus:outline-none bg-white text-black"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-border focus:border-accent focus:outline-none bg-white text-black"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-border focus:border-accent focus:outline-none bg-white text-black"
                  placeholder="Project subject"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-border focus:border-accent focus:outline-none bg-white text-black resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-black px-8 py-4 text-lg font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src="/ka-logo.png" alt="KA Logo" className="h-12 w-12 object-contain mb-4" />
              <p className="text-foreground">Strategic creative leader specializing in brand growth and market expansion.</p>
            </div>
            <div>
              <h4 className="font-bold text-black mb-4">Quick Links</h4>
              <ul className="space-y-2 text-foreground">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/case-studies">Case Studies</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-black mb-4">Connect</h4>
              <ul className="space-y-2 text-foreground">
                <li><a href="https://linkedin.com/in/khaledawwad" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://behance.net/khaledawwad" target="_blank" rel="noopener noreferrer">Behance</a></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Khaled Awwad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
