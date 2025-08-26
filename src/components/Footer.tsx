import React from 'react';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Left Content */}
          <div className="flex flex-col justify-between h-full space-y-8">
            <Heading level="h4" color="white" className="max-w-lg">
              Let's start your journey to improve product performance and build you competitive advantage.
            </Heading>
            
            {/* AI-First Attribution */}
            <div className="mt-auto">
              <Text size="base" color="white" className="max-w-4xl leading-relaxed">
                This site was built using{' '}
                <a href="https://claude.ai/chat" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors underline">
                  Claude Code
                </a>{' '}
                and{' '}
                <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors underline">
                  Cursor
                </a>
                . Font is{' '}
                <a href="https://fonts.adobe.com/fonts/sombra" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors underline">
                  Sombra Variable
                </a>{' '}
                and{' '}
                <a href="https://fonts.google.com/specimen/Inter" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors underline">
                  Inter
                </a>
                . Lightweight CMS by{' '}
                <a href="https://www.sanity.io" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors underline">
                  Sanity
                </a>
                . Learn the AI-First approach to rapidly building web experiences.
              </Text>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            
            {/* Social Links */}
            <div className="space-y-4">
              <Heading level="h5" color="white">
                Follow Us
              </Heading>
              <div className="flex space-x-6">
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/company/summerfriday/?viewAsMember=true" 
                  className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <Text size="base" color="white">
                    LinkedIn
                  </Text>
                </a>
                
                {/* YouTube */}
                <a 
                  href="https://www.youtube.com/@SummerFridayCo" 
                  className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <Text size="base" color="white">
                    YouTube
                  </Text>
                </a>
              </div>
            </div>

            {/* Say Hello */}
            <div className="space-y-2">
              <Heading level="h5" color="white">
                Say Hello
              </Heading>
              <a 
                href="mailto:hi@summerfriday.co" 
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Text size="base" color="white">
                  hi@summerfriday.co
                </Text>
              </a>
            </div>

            {/* Links */}
            <div className="space-y-2">
              <Heading level="h5" color="white">
                Links
              </Heading>
              <div className="flex flex-col space-y-2">
                <a 
                  href="#" 
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <Text size="base" color="white">
                    Tools
                  </Text>
                </a>
                <a 
                  href="#" 
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <Text size="base" color="white">
                    Insights
                  </Text>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <Text size="sm" color="muted">
              © 2025 Summer Friday. All rights reserved.
            </Text>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Text size="sm" color="muted">
                  Privacy Policy
                </Text>
              </a>
              <a 
                href="#" 
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Text size="sm" color="muted">
                  Terms of Service
                </Text>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer; 