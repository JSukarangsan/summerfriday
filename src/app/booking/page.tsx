import React from 'react';
import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';

export const metadata: Metadata = {
  title: "Book a Strategy Session - AI Transformation Consulting",
  description: "Schedule a strategic AI consultation with Jon Sukarangsan. Turn your AI experiments into systematic solutions. Book your working session to discuss AI strategy, implementation roadmap, and team transformation.",
  keywords: ["book AI consultation", "AI strategy session", "Jon Sukarangsan meeting", "AI transformation consulting", "product team AI strategy", "AI implementation planning"],
  openGraph: {
    title: "Book a Strategy Session - AI Transformation Consulting",
    description: "Schedule a strategic AI consultation with Jon Sukarangsan. Turn your AI experiments into systematic solutions.",
    url: "https://summerfriday.co/booking",
    images: [
      {
        url: "/og-booking.png",
        width: 1200,
        height: 630,
        alt: "Book a Strategy Session with Summer Friday",
      },
    ],
  },
  alternates: {
    canonical: "https://summerfriday.co/booking",
  },
};

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#eaeae3]">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 lg:py-24 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-[276px] h-[276px] transform translate-x-[100px] -translate-y-[52px] rotate-[290deg] hidden lg:block opacity-30">
            <svg viewBox="0 0 276 276" className="w-full h-full">
              <circle cx="138" cy="138" r="120" fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.3"/>
              <circle cx="138" cy="138" r="80" fill="none" stroke="#60a5fa" strokeWidth="1" opacity="0.2"/>
              <circle cx="138" cy="138" r="40" fill="#60a5fa" opacity="0.1"/>
            </svg>
          </div>
          
          <div className="absolute bottom-0 left-0 w-[218px] h-[218px] transform -translate-x-[30px] translate-y-[100px] rotate-[45deg] hidden lg:block opacity-20">
            <svg viewBox="0 0 218 218" className="w-full h-full">
              <polygon points="109,20 180,109 109,198 38,109" fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.3"/>
              <circle cx="109" cy="109" r="60" fill="none" stroke="#60a5fa" strokeWidth="1" opacity="0.2"/>
              <circle cx="109" cy="109" r="25" fill="#60a5fa" opacity="0.1"/>
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Left Text Block */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <Heading level="h1">
                    Book a Working Session
                  </Heading>
                  <Text size="base" color="primary">
                    Ready to turn your AI experiments into systematic solutions? Schedule a working session with Jon to discuss your specific challenges and explore how Summer Friday can help your team succeed.
                  </Text>
                  <div className="space-y-4">
                    <div>
                      <Text size="sm" weight="semibold" color="primary" className="mb-2">
                        What to expect:
                      </Text>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                          <Text size="sm" color="secondary">
                            Strategic assessment of your current AI initiatives
                          </Text>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                          <Text size="sm" color="secondary">
                            Identification of high-impact opportunities
                          </Text>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                          <Text size="sm" color="secondary">
                            Customized roadmap for your team's success
                          </Text>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                          <Text size="sm" color="secondary">
                            Clear next steps and implementation guidance
                          </Text>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Booking Calendar - Cal.com Embed */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <iframe
                  src="https://cal.com/jonsukarangsan/strategy-session"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  title="Book a Strategy Session with Jon Sukarangsan"
                  className="min-h-[700px] w-full"
                  style={{
                    border: 'none'
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 