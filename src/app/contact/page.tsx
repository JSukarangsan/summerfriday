import React from 'react';
import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';

export const metadata: Metadata = {
  title: "Contact Summer Friday - AI Strategy & Implementation Experts",
  description: "Get in touch with Summer Friday's AI strategy experts. Discuss how we can help your organization transform from scattered AI experiments to systematic solutions. Contact us for AI consulting, product design, and team transformation services.",
  keywords: ["contact Summer Friday", "AI strategy consultation", "AI implementation help", "business AI transformation", "product design services", "AI operations consulting"],
  openGraph: {
    title: "Contact Summer Friday - AI Strategy & Implementation Experts",
    description: "Get in touch with Summer Friday's AI strategy experts. Transform your organization with systematic AI solutions.",
    url: "https://summerfriday.co/contact",
    images: [
      {
        url: "/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact Summer Friday - AI Strategy Experts",
      },
    ],
  },
  alternates: {
    canonical: "https://summerfriday.co/contact",
  },
};

export default function ContactPage() {
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
                    Get in touch
                  </Heading>
                  <Text size="base" color="primary">
                    Have a question or want to learn more about how we can help your organization? Fill out the form and we'll get back to you shortly.
                  </Text>
                </div>
              </div>

              {/* Right Contact Form - Tally Embed */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 md:p-8">
                <iframe
                  src="https://tally.so/embed/waRQM2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Contact Form"
                  className="min-h-[600px] w-full"
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