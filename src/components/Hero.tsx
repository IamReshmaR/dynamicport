import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import TypeWriter from './TypeWriter';
import Transition from './Transition';

const Hero: React.FC = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-[70vh] flex flex-col justify-center bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Main Content */}
        <div className="max-w-3xl mx-auto">
          <Transition animation="fade">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8">
              <TypeWriter
                text="Welcome to My Data Science Portfolio"
                delay={50}
                onComplete={() => setShowDescription(true)}
              />
            </h1>
          </Transition>

          {showDescription && (
            <Transition animation="slide-up">
              <div className="text-lg sm:text-xl text-gray-300 mb-12">
                <TypeWriter
                  text="I'm a Data & Analytics Engineer with a passion for transforming raw data into powerful insights."
                  delay={30}
                  onComplete={() => {
                    setShowButtons(true);
                    setShowSocial(true);
                  }}
                />
                <br />
                <TypeWriter
                  text="With a strong foundation in Python, SQL, and data visualization tools, I build scalable solutions and integrate generative AI to supercharge analytics workflows."
                  delay={25}
                />
              </div>
            </Transition>
          )}

          {/* Navigation Buttons */}
          {showButtons && (
            <Transition animation="slide-up" delay={100}>
              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={() => scrollToSection('about')}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full 
                    backdrop-blur-sm border border-white/10 transition-all duration-300 
                    hover:border-white/30 hover:scale-105"
                >
                  About Me
                </button>
              </div>
            </Transition>
          )}
          
          {/* Social Links */}
          {showSocial && (
            <Transition animation="fade" delay={200}>
              <div className="flex space-x-8">
                <a 
                  href="https://github.com/IamReshmaR" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors transform hover:scale-110"
                >
                  <Github size={28} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/reshmarajan3590" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors transform hover:scale-110"
                >
                  <Linkedin size={28} />
                </a>
                <a 
                  href="mailto:reshmarajan3590@gmail.com" 
                  className="text-white hover:text-gray-300 transition-colors transform hover:scale-110"
                >
                  <Mail size={28} />
                </a>
              </div>
            </Transition>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
