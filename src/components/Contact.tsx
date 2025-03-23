
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Transition from "./Transition";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };
  
  return (
    <section id="contact" ref={sectionRef} className="section bg-muted/50">
      <div className="text-center mb-16">
        <Transition animation="fade">
          <span className="inline-block py-1 px-3 text-xs rounded-full bg-primary/10 text-primary mb-4">
            Get in Touch
          </span>
        </Transition>
        <Transition animation="slide-up" delay={200}>
          <h2 className="section-title">Contact</h2>
        </Transition>
        <Transition animation="fade" delay={400}>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out through any of the channels below.
          </p>
        </Transition>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Transition animation="scale" delay={200}>
          <div className="space-y-8">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Email</h4>
                <a 
                  href="mailto:example@example.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  example@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Phone</h4>
                <a 
                  href="tel:+1234567890" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Location</h4>
                <p className="text-muted-foreground">
                  San Francisco, California
                </p>
              </div>
            </div>
            
            <div className="pt-8">
              <h3 className="text-xl font-bold mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-3 rounded-full border border-border/50 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  aria-label="GitHub"
                >
                  GitHub
                </a>
                <a 
                  href="#" 
                  className="p-3 rounded-full border border-border/50 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                <a 
                  href="#" 
                  className="p-3 rounded-full border border-border/50 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  aria-label="Twitter"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </Transition>
        
        <Transition animation="scale" delay={400}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                placeholder="Your message here..."
              />
            </div>
            
            <button
              type="submit"
              className="group flex items-center justify-center space-x-2 w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300"
            >
              <span>Send Message</span>
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </Transition>
      </div>
    </section>
  );
};

export default Contact;
