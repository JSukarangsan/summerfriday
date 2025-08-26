import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WorkflowSection from '@/components/WorkflowSection';
import UseCaseSection from '@/components/UseCaseSection';
import ClientMarquee from '@/components/ClientMarquee';
import DifferenceSection from '@/components/DifferenceSection';
import AIDeliverySection from '@/components/AIDeliverySection';
import AssessmentSection from '@/components/AssessmentSection';
import NewsletterBanner from '@/components/NewsletterBanner';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "AI Strategy & Product Design Services - Get Real Results from AI",
  description: "We help product, marketing, and ops teams move from scattered AI experiments to solutions that move the needle. Designed with your workflows and data, by experts who know how modern teams get ahead.",
  keywords: ["AI strategy", "product design", "AI implementation", "business results", "AI consulting", "team transformation", "AI operations", "systematic AI"],
  openGraph: {
    title: "AI Strategy & Product Design Services - Get Real Results from AI",
    description: "We help product, marketing, and ops teams move from scattered AI experiments to solutions that move the needle.",
    url: "https://summerfriday.co",
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "Summer Friday - AI Strategy & Product Design Services",
      },
    ],
  },
  alternates: {
    canonical: "https://summerfriday.co",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <WorkflowSection />
      <UseCaseSection />
      <ClientMarquee />
      <DifferenceSection />
      <AIDeliverySection />
      <AssessmentSection />
      <NewsletterBanner />
      <Footer />
    </main>
  );
}
