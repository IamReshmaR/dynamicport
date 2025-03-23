
import { useEffect, useRef, useState } from "react";
import Transition from "./Transition";

const About = () => {
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
      { threshold: 0.2 }
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
  
  return (
    <section id="about" ref={sectionRef} className="section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className={`fade-in-stagger ${isVisible ? 'visible' : ''}`}>
          <span className="inline-block py-1 px-3 text-xs rounded-full bg-primary/10 text-primary mb-4">
            About Me
          </span>
          <h2 className="section-title">Crafting Digital Experiences</h2>
          <p className="text-muted-foreground mb-6">
            I'm a designer and developer passionate about creating elegant, 
            functional digital products that solve real problems.
          </p>
          <p className="text-muted-foreground mb-6">
            With years of experience in both design and development, I bring a unique 
            perspective to each project, focusing on the intersection of aesthetics and functionality.
          </p>
          <p className="text-muted-foreground mb-8">
            I believe in less but better — creating products that are intuitive, 
            beautiful, and provide exceptional user experiences.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-3xl font-bold mb-2">5+</h3>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
          </div>
        </div>
        
        <Transition 
          animation="scale" 
          delay={300} 
          className="relative aspect-square rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-4 rounded-xl overflow-hidden border border-border/50 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
            <div className="col-start-1 col-end-2 row-start-1 row-end-2 bg-primary/5 rounded-tl-2xl"></div>
            <div className="col-start-3 col-end-4 row-start-1 row-end-2 bg-primary/5 rounded-tr-2xl"></div>
            <div className="col-start-1 col-end-2 row-start-3 row-end-4 bg-primary/5 rounded-bl-2xl"></div>
            <div className="col-start-3 col-end-4 row-start-3 row-end-4 bg-primary/5 rounded-br-2xl"></div>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default About;
