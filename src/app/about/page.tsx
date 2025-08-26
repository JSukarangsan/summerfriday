import React from 'react';
import Image from 'next/image';
import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "About Jon Sukarangsan - AI Strategy Leader & Summer Friday Founder",
  description: "Meet Jon Sukarangsan, founder of Summer Friday with 20+ years helping companies like Google, Samsung, Goldman Sachs, and Nike transform with AI-first strategies. Expert in product design, AI operations, and team transformation.",
  keywords: ["Jon Sukarangsan", "AI strategy leader", "Summer Friday founder", "AI consultant", "product design expert", "Google", "Samsung", "Goldman Sachs", "Nike", "AI transformation"],
  openGraph: {
    title: "About Jon Sukarangsan - AI Strategy Leader & Summer Friday Founder",
    description: "Meet Jon Sukarangsan, founder of Summer Friday with 20+ years helping Fortune 500 companies transform with AI-first strategies.",
    url: "https://summerfriday.co/about",
    images: [
      {
        url: "/jon profile 3.png",
        width: 500,
        height: 500,
        alt: "Jon Sukarangsan - Founder of Summer Friday",
      },
    ],
  },
  alternates: {
    canonical: "https://summerfriday.co/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* White navbar and header section */}
      <div className="bg-white">
        <Navbar />
        
        {/* Bio Section with Profile Picture */}
        <section className="py-16 lg:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Bio Content - Left Side */}
              <div className="space-y-6">
                <div>
                  <Heading level="h1" className="mb-0">Jon Sukarangsan</Heading>
                </div>
                
                <div className="space-y-6">
                                            <Text size="base" color="secondary">
                            Jon leads Summer Friday and is a seasoned leader in emerging digital solutions. With 20+ years of experience, Jon has helped build and scale impactful products & practices at companies like Samsung, Google, Marriott, Citibank, Goldman Sachs, and McKinsey.
                          </Text>
                  <Text size="base" color="secondary">
                    As an executive at the global agency DEPT as well as MediaMonks (AI Agency of the Year), he helped clients transform their businesses for the AI era.
                  </Text>
                  <Text size="base" color="secondary">
                    He now leads Summer Friday with a mission: to grow human and technological capability within organizations of all kinds. His approach blends hands-on delivery, systems thinking, and cultural enablement to create lasting transformations.
                  </Text>
                </div>
              </div>
              
              {/* Profile Picture - Right Side */}
              <div className="flex justify-center lg:justify-end relative">
                <div className="relative z-10">
                  <Image
                    src="/jon profile 3.png"
                    alt="Jon Sukarangsan"
                    width={500}
                    height={500}
                    className="object-cover rounded-2xl"
                    style={{ transform: 'translateY(200px)' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <main className="flex-grow bg-[#eaeae3] relative">
        {/* Main Content Section */}
        <section className="pt-60 pb-16 lg:pb-24">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-left">
              <Heading level="h2" className="mb-8">
                The Real Problem with AI Transformation
              </Heading>
              
              <div className="prose prose-lg max-w-none space-y-8">
                <Text size="base" color="secondary">
                  I've spent the last 20+ years watching teams get stuck in the same pattern. They gather in conference rooms, laptops open, everyone nodding along to the latest AI strategy presentation. But when it comes time to actually implement? Silence. Hesitation. That familiar friction that kills momentum before it even starts.
                </Text>
                
                <Text size="base" color="secondary">
                  This is what I call the "AI paralysis paradox" — teams that know they need to transform but can't figure out where to start, or worse, they start everywhere at once and accomplish nothing.
                </Text>

                <Heading level="h4" className="!mb-6">
                  Why Most AI Initiatives Fail
                </Heading>
                
                <Text size="base" color="secondary">
                  I've helped F500 companies like Samsung, Google, and Marriott through digital transformations, and worked with companies of all sizes and industries at top-tier agencies like DEPT and MediaMonks (AI Agency of the Year). And I've witnessed the same pattern repeatedly. Companies would invest millions in AI tools and talent, only to see projects stall because they missed the fundamental truth: successful AI transformation isn't about having the coolest technology or the fastest implementation.
                </Text>

                <Text size="base" color="secondary">
                  It's about systematically identifying what part of your business needs a booster and what part is creating friction.
                </Text>

                <Text size="lg" color="secondary">
                  That's why I founded Summer Friday — not as another AI consultancy promising quick fixes, but as a network of builders, strategists, and leaders who understand that lasting change requires more than just delivering proof-of-concepts.
                </Text>
                
                <Text size="lg" color="secondary">
                  We're unique because we don't just hand you a prototype and walk away. We work with companies until they feel like they've fundamentally changed their way of working for the better. We stay until the silence in those conference rooms turns into confident action.
                </Text>

                <Heading level="h4" className="!mb-6">
                  Our Approach: Beyond the Shiny Objects
                </Heading>
                
                <Text size="lg" color="secondary">
                  The brands that will win in the AI era aren't going to be the ones who adopt tools the fastest or can do the coolest tricks. They'll be the ones who can systematically transform their operations, culture, and decision-making processes.
                </Text>
                
                <Text size="lg" color="secondary" className="!mb-6">
                  We help you:
                </Text>
                
                <ul className="space-y-4 list-none pl-0 mb-12">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <Text size="base" color="secondary">
                      Identify friction points that are secretly sabotaging your AI initiatives
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <Text size="base" color="secondary">
                      Build internal capability so your team doesn't depend on external consultants forever
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <Text size="base" color="secondary">
                      Create sustainable systems that evolve with AI technology rather than against it
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <Text size="lg" color="secondary">
                      Transform culture so innovation becomes natural, not forced
                    </Text>
                  </li>
                </ul>

                <Text size="base" color="secondary">
                  Summer Friday isn't just me — it's a carefully curated network of senior practitioners who've been in the trenches. We're builders who've shipped products, strategists who've guided transformations, and leaders who've managed teams through change.
                </Text>
                
                <Text size="base" color="secondary">
                  We work as small, focused teams because that's how real work gets done. No account managers, no junior staff learning on your dime. Just seasoned professionals who can see around corners and help you navigate the complexity of AI transformation.
                </Text>

                <Heading level="h4" className="!mb-6">
                  Why This Matters Now
                </Heading>
                
                <Text size="base" color="secondary">
                  AI isn't slowing down. Every day brings new tools, new capabilities, new opportunities — and new ways to fall behind. The question isn't whether your organization will transform, but whether you'll do it thoughtfully or reactively.
                </Text>
                
                <Text size="base" color="secondary" weight="medium" className="!mb-12">
                  We help you evolve with intention, not just speed.
                  <br/><br/>
                  -Jon.
                </Text>

                {/* CTA Section */}
                <div className="mt-16 pt-8 border-t border-neutral-400">
                  <div className="text-center">
                    <Text size="base" color="secondary" align="center" className="mb-8">
                      Ready to transform your AI approach from reactive to intentional?
                    </Text>
                    <Button variant="primary" size="lg" href="/booking">
                      Book a strategy session
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 