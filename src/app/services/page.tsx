'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  const adoptionServices = [
    {
      emoji: "🎯",
      title: "Surface your highest-value opportunities",
      description: "AI Navigator™ is a structured 2-hour working session that maps where AI can cut cycle time, reduce cost, or unlock new value in your workflows. You leave with a clear set of quick wins and bigger bets."
    },
    {
      emoji: "📊",
      title: "Assess your readiness, end-to-end",
      description: "Our AI Diagnostic evaluates your tools, data, design systems, and ways of working. It shows you what's working, where the friction is, and which gaps matter most before scaling."
    },
    {
      emoji: "👥",
      title: "Bring your team along, not just your tools",
      description: "Adoption fails when teams don't trust or understand the outputs. We run department-specific training anchored in your real work — from designers learning to encode intent in Figma, to PMs using AI copilots for research, to engineers integrating AI into delivery pipelines."
    },
    {
      emoji: "🛠️",
      title: "Make AI part of your daily toolkit",
      description: "From curated prompt libraries to setup of AI-native platforms, we help your teams start at 80% instead of 0. Every recommendation is tied to your context, not a generic \"tool of the week.\""
    },
    {
      emoji: "💪",
      title: "Build confidence through practice",
      description: "We create safe-to-fail sandboxes where teams can experiment without risk, building literacy and judgment over time. The result: your people know when to trust AI, when to override it, and how to make it better."
    }
  ];

  const strategyServices = [
    {
      emoji: "⚙️",
      title: "AI-First Operating System Design",
      description: "Align your context, memory, and tools into a system where AI becomes a repeatable engine — not just an experiment."
    },
    {
      emoji: "🔄",
      title: "Workflow Redesign",
      description: "Re-engineer how your team moves from idea to execution, turning AI's speed into deeper craft and faster learning."
    },
    {
      emoji: "🗺️",
      title: "AI Readiness Roadmap",
      description: "A prioritized plan that takes you from pilots to scaled adoption. Built around ROI, not hype."
    }
  ];

  const implementationServices = [
    {
      emoji: "🎨",
      title: "AI-Ready Design Systems",
      description: "Increase product design & development velocity by leveraging your design system for rapid prototyping and production pipelines. Encode design standards so AI can design with you — multiplying the ROI from your design system investment."
    },
    {
      emoji: "🤖",
      title: "Agent Workflows & Builds",
      description: "We design and implement custom AI agents that connect your tools, data, and processes into automated workflows. From single-task agents that eliminate repetitive work, to orchestrated multi-agent systems that collaborate across design, product, and engineering — we build the infrastructure for scalable, context-aware automation."
    },
    {
      emoji: "⚡",
      title: "Product & Experience Prototyping",
      description: "Explore new AI-powered features, services, and experiences — from concept to testable reality in days, not months."
    },
    {
      emoji: "🤝",
      title: "Advisory Partnerships",
      description: "Ongoing guidance to scale adoption, refine systems, and identify what's next as the AI landscape evolves."
    }
  ];

  return (
    <>
      <Head>
        <title>AI Strategy & Implementation Services - Summer Friday</title>
        <meta name="description" content="Move from AI experimentation to competitive advantage. We help teams turn AI from hype into systematic solutions with adoption, strategy, and implementation services." />
        <meta name="keywords" content="AI strategy services, AI implementation, AI adoption, business transformation, AI consulting, product team AI, AI training, AI readiness" />
        <meta property="og:title" content="AI Strategy & Implementation Services - Summer Friday" />
        <meta property="og:description" content="Move from AI experimentation to competitive advantage. Turn AI from hype into systematic solutions." />
        <meta property="og:url" content="https://summerfriday.co/services" />
        <meta property="og:image" content="/og-services.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Summer Friday AI Strategy Services" />
        <link rel="canonical" href="https://summerfriday.co/services" />
      </Head>
      
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-[#eaeae3] px-6 sm:px-8 lg:px-12 py-20 lg:py-32">
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
                    Move from experimentation to competitive advantage.
                  </Heading>
                </div>
              </div>

              {/* Description */}
              <div className="max-w-4xl mx-auto mb-8 overflow-hidden">
                <div 
                  className={`transform transition-all duration-1000 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: '400ms' }}
                >
                  <Text size="lg" align="center" color="secondary">
                    Most teams dabble with AI. Few teams turn it into real advantage. We help you close that gap. Our work isn't reports or prototypes that gather dust — it's systems, workflows, and training that stick. We make AI adoption real inside your organization, so your team becomes faster, sharper, and ready to compete.
                  </Text>
                </div>
              </div>

              {/* CTA Button */}
              <div className="overflow-hidden">
                <div 
                  className={`transform transition-all duration-1000 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: '600ms' }}
                >
                  <div className="flex justify-center">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      onClick={() => {
                        const contactSection = document.querySelector('#contact-section');
                        if (contactSection) {
                          contactSection.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }
                      }}
                      className="transform hover:scale-105 transition-transform duration-300"
                    >
                      Get in touch
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

        {/* Adoption & Training Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <Heading level="h4" className="mb-4">
                Adoption & Training
              </Heading>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adoptionServices.map((service, index) => (
                <Card key={index} variant="default" className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="text-2xl mb-3">{service.emoji}</div>
                    <Heading level="h6" className="mb-4">
                      {service.title}
                    </Heading>
                    <Text size="sm" color="secondary" className="flex-grow">
                      {index === 0 ? (
                        <>
                          <Link href="/navigator" className="text-blue-600 hover:text-blue-800 font-medium">
                            AI Navigator™
                          </Link>
                          {" is a structured 2-hour working session that maps where AI can cut cycle time, reduce cost, or unlock new value in your workflows. You leave with a clear set of quick wins and bigger bets."}
                        </>
                      ) : (
                        service.description
                      )}
                    </Text>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Strategy Section */}
        <section className="py-16 lg:py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <Heading level="h4" className="mb-4">
                Strategy
              </Heading>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {strategyServices.map((service, index) => (
                <Card key={index} variant="default" className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="text-2xl mb-3">{service.emoji}</div>
                    <Heading level="h6" className="mb-4">
                      {service.title}
                    </Heading>
                    <Text size="sm" color="secondary" className="flex-grow">
                      {service.description}
                    </Text>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation & Innovation Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <Heading level="h4" className="mb-4">
                Implementation & Innovation
              </Heading>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {implementationServices.map((service, index) => (
                <Card key={index} variant="default" className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="text-2xl mb-3">{service.emoji}</div>
                    <Heading level="h6" className="mb-4">
                      {service.title}
                    </Heading>
                    <Text size="sm" color="secondary" className="flex-grow">
                      {service.description}
                    </Text>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section id="contact-section" className="py-16 lg:py-24 bg-[#eaeae3]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Content */}
              <div className="space-y-6">
                <Heading level="h2">
                  Ready to stop experimenting and start showing progress?
                </Heading>
                <div className="space-y-4">
                  <Text size="lg" color="secondary">
                    Roadmaps are easy. Progress is hard.
                  </Text>
                  <Text size="lg" color="secondary">
                    We bring the frameworks, the systems, and the practical experience to get you there.
                  </Text>
                  <Text size="lg" color="primary" weight="medium">
                    Let's tackle the problems your competitors think can't be solved.
                  </Text>
                </div>
              </div>

              {/* Right Contact Form */}
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
    </>
  );
} 