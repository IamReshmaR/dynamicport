
import { ArrowDown } from "lucide-react";
import Transition from "./Transition";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/0" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Transition animation="fade" delay={300}>
          <p className="text-sm md:text-base font-medium uppercase tracking-wider mb-4">Hello, I'm</p>
        </Transition>
        
        <Transition animation="scale" delay={500} className="mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Creative Designer & Developer
          </h1>
        </Transition>
        
        <Transition animation="fade" delay={800} className="max-w-2xl mx-auto">
          <p className="text-muted-foreground text-lg md:text-xl mb-12">
            I create elegant digital experiences with a focus on simplicity, usability, and aesthetic excellence.
          </p>
        </Transition>
        
        <Transition animation="scale" delay={1100}>
          <div className="inline-block">
            <button
              onClick={scrollToAbout}
              className="animate-subtle-pulse flex items-center justify-center w-12 h-12 rounded-full border border-border bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-apple"
              aria-label="Scroll to About section"
            >
              <ArrowDown size={20} />
            </button>
          </div>
        </Transition>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-fade-in opacity-0" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
        <div className="flex space-x-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            aria-label="GitHub Profile"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:example@example.com" 
            className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
