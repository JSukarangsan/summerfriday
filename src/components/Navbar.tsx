'use client';

import { useState, useRef, useEffect } from 'react';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems: NavItem[] = [
    { label: 'About', href: '/about' },
    {
      label: 'Services',
      href: '/services',
      dropdown: [
        { label: 'Navigator™', href: '/navigator' },
      ]
    },
    { label: 'Insights', href: '/insights' },
    { label: 'Tools', href: '/tools' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="w-full flex items-center justify-between px-8 py-6 bg-white hidden lg:flex">
        {/* Left Logo */}
        <div className="flex items-center">
          <a 
            href="/" 
            className="hover:opacity-80 transition-opacity duration-200"
          >
            <img 
              src="/SummerFridayLogo.png" 
              alt="SUMMER FRIDAY & PARTNERS" 
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.dropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="text-neutral-800 text-sm font-medium hover:text-blue-500 transition-colors duration-200 font-inter flex items-center gap-1"
                    >
                      {item.label}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </a>
                  ) : (
                    <button className="text-neutral-800 text-sm font-medium hover:text-blue-500 transition-colors duration-200 font-inter flex items-center gap-1">
                      {item.label}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                  
                  {/* Dropdown */}
                  <div className={`absolute left-0 mt-2 w-48 bg-white border border-neutral-200 rounded-lg shadow-lg transition-all duration-200 ease-out z-50 ${
                    openDropdown === item.label 
                      ? 'opacity-100 translate-y-0 visible' 
                      : 'opacity-0 -translate-y-2 invisible'
                  }`}>
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-neutral-700 hover:text-blue-500 hover:bg-neutral-50 transition-colors font-inter"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a 
                  href={item.href!} 
                  className="text-neutral-800 text-sm font-medium hover:text-blue-500 transition-colors duration-200 font-inter"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="w-full flex lg:hidden items-center justify-between px-6 py-4 relative bg-white">
        {/* Mobile Logo - Left */}
        <div className="flex items-center">
          <a 
            href="/" 
            className="hover:opacity-80 transition-opacity duration-200"
          >
            <img 
              src="/SummerFridayLogo.png" 
              alt="SUMMER FRIDAY & PARTNERS" 
              className="h-10 w-auto"
            />
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <div className="ml-auto">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <div className={`w-6 h-0.5 bg-neutral-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-neutral-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-neutral-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-neutral-200 z-50 overflow-hidden">
            <div className="py-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div>
                      {item.href ? (
                        <div className="flex items-center">
                          <a 
                            href={item.href}
                            className="flex-1 px-6 py-3 text-neutral-800 hover:bg-neutral-50 transition-colors duration-200 text-sm font-medium font-inter"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </a>
                          <button
                            onClick={() => toggleMobileDropdown(item.label)}
                            className="px-3 py-3 text-neutral-800 hover:bg-neutral-50 transition-colors duration-200"
                          >
                            <svg 
                              className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => toggleMobileDropdown(item.label)}
                          className="w-full text-left px-6 py-3 text-neutral-800 hover:bg-neutral-50 transition-colors duration-200 text-sm font-medium font-inter flex items-center justify-between"
                        >
                          {item.label}
                          <svg 
                            className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}
                      
                      {/* Mobile Dropdown */}
                      <div className={`overflow-hidden transition-all duration-200 ease-out ${
                        openDropdown === item.label ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="bg-neutral-50">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block px-8 py-2 text-sm text-neutral-600 hover:text-blue-500 transition-colors font-inter"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a 
                      href={item.href!} 
                      className="block px-6 py-3 text-neutral-800 hover:bg-neutral-50 transition-colors duration-200 text-sm font-medium font-inter"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}