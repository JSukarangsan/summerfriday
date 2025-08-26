'use client';

import { useEffect, useState } from 'react';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#workflow-section, section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="bg-[#eaeae3] px-6 sm:px-8 lg:px-12 py-20 lg:py-32 min-h-[80vh] flex items-center">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Main Headline */}
        <div className="mb-8 overflow-hidden">
          <div 
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <Heading level="h1" align="center">
              It's time to get real results from AI.
            </Heading>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-12 overflow-hidden">
          <div 
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <Text size="xl" align="center" color="secondary">
              We help product, marketing, and ops teams move from scattered AI experiments to solutions that move the needle. Designed with your workflows and data, by experts who know how modern teams get ahead.
            </Text>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="overflow-hidden">
          <div 
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="primary" 
                size="lg" 
                href="#use-cases"
                className="transform hover:scale-105 transition-transform duration-300"
              >
                View Use Cases
              </Button>
              <Button 
                variant="primary" 
                size="lg" 
                href="/booking"
                className="transform hover:scale-105 transition-transform duration-300"
              >
                Book a Working Session
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="mt-16 overflow-hidden flex justify-center">
          <div 
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <button 
              onClick={scrollToNextSection}
              className="inline-flex flex-col items-center text-neutral-800 text-xl font-medium hover:opacity-70 transition-opacity cursor-pointer"
              aria-label="Scroll to next section"
            >
              Learn More
              <svg
                className="mt-2 w-8 h-8 animate-bounce"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}