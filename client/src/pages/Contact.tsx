import { Link } from "wouter";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
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
            <span className="text-2xl font-bold text-black">KA</span>
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
        <div className="mb-20">
          <h1 className="text-5xl font-bold text-black mb-4" style={{ fontFamily: 'Montserrat' }}>
            Get In Touch
          </h1>
          <p className="text-xl text-foreground max-w-2xl">
            Have a project in mind or want to discuss a collaboration? I'd love to hear from you.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-8">
            {/* Email */}
            <div>
              <h3 className="text-lg font-bold text-black mb-2" style={{ fontFamily: 'Montserrat' }}>
                Email
              </h3>
              <p className="text-foreground mb-4">
                keawwad@hotmail.com
              </p>
              <a href="mailto:keawwad@hotmail.com" className="inline-block bg-accent hover:bg-accent/90 text-black px-6 py-2 font-semibold">
                Send Email
              </a>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-lg font-bold text-black mb-2" style={{ fontFamily: 'Montserrat' }}>
                Phone
              </h3>
              <p className="text-foreground mb-4">
                +1 416 839 0390
              </p>
              <a href="tel:+14168390390" className="inline-block bg-accent hover:bg-accent/90 text-black px-6 py-2 font-semibold">
                Call Now
              </a>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-lg font-bold text-black mb-2" style={{ fontFamily: 'Montserrat' }}>
                Location
              </h3>
              <p className="text-foreground mb-2">
                Ottawa, Canada
              </p>
              <p className="text-accent font-semibold mb-4">
                Moving to Dubai
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <h3 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'Montserrat' }}>
                Connect
              </h3>
              <div className="space-y-3">
                <a href="#" className="block text-accent hover:text-accent/80 font-semibold">
                  LinkedIn
                </a>
                <a href="#" className="block text-accent hover:text-accent/80 font-semibold">
                  Behance
                </a>
                <a href="#" className="block text-accent hover:text-accent/80 font-semibold">
                  Portfolio
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full px-4 py-3 border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent resize-none"
                />
              </div>

              {/* Submit */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 font-semibold"
                >
                  Send Message
                </button>
                <button
                  type="reset"
                  className="bg-card hover:bg-card/80 text-foreground border border-border px-8 py-3 font-semibold"
                >
                  Clear
                </button>
              </div>
            </form>

            {/* Note */}
            <p className="mt-8 text-sm text-muted-foreground">
              💡 <strong>Tip:</strong> For faster response, you can also reach out directly via email or phone. I typically respond within 24-48 hours.
            </p>
          </div>
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
