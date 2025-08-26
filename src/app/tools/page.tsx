import React from 'react';
import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import ImageTextLayout from '@/components/ImageTextLayout';

export const metadata: Metadata = {
  title: "AI-First Product Design Tools & Resources",
  description: "Download the complete AI-First Product Design guide and access the Navigator™ Figjam template. Free resources to help product teams transform from AI experiments to systematic AI operations.",
  keywords: ["AI-First Product Design", "product design tools", "AI resources", "Navigator template", "Figjam template", "product team resources", "AI operations guide"],
  openGraph: {
    title: "AI-First Product Design Tools & Resources",
    description: "Download the complete AI-First Product Design guide and access the Navigator™ Figjam template. Free resources for product teams.",
    url: "https://summerfriday.co/tools",
    images: [
      {
        url: "/guide/ai-first-cover.png",
        width: 600,
        height: 800,
        alt: "AI-First Product Design Guide Cover",
      },
    ],
  },
  alternates: {
    canonical: "https://summerfriday.co/tools",
  },
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <Heading level="h1" align="center" className="mb-4">
                Tools
              </Heading>
              <Text size="lg" color="secondary" className="max-w-3xl mx-auto">
                Essential resources and frameworks to accelerate your AI-first transformation. Download guides, access templates, and get the tools you need to build competitive advantages.
              </Text>
            </div>
          </div>
        </section>

        {/* AI-First Product Team Book */}
        <ImageTextLayout
          layout="image-left"
          backgroundColor="white"
          spacing="large"
          imageSrc="/guide/ai-first-cover.png"
          imageAlt="AI-First Product Team Book Cover"
          imageClassName="max-w-xs mx-auto"
          title="AI-First Product Team Book"
          bodyText="The complete guide to transforming your product development process with AI. This comprehensive resource covers everything from team structure and workflows to implementation strategies and measurement frameworks. Learn how leading product teams are building AI operations, redesigning processes, and achieving 2-4x faster development cycles."
          ctaText="Download Free Guide"
          ctaHref="/ai-first-product-design"
          ctaVariant="primary"
        />

        {/* Navigator Figjam */}
        <ImageTextLayout
          layout="image-right"
          backgroundColor="neutral"
          spacing="large"
          imageSrc="/Summer Friday Navigator.png"
          imageAlt="Navigator Figjam Template Preview"
          imageClassName="max-w-xs mx-auto"
          title="Navigator™ Figjam Template"
          bodyText="Interactive workshop template for mapping your AI strategy and identifying high-impact opportunities. This proven framework helps teams align around AI priorities, assess current capabilities, and create actionable roadmaps. Used by product teams at leading companies to cut through the noise and focus on what matters most."
          ctaText="Access Template"
          ctaHref="/navigator"
          ctaVariant="secondary"
          ctaDisabled={true}
          comingSoonText="Coming Soon"
        />
      </main>
      
      <Footer />
    </div>
  );
} 