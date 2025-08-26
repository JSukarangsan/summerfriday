import { type SanityDocument } from "next-sanity";
import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import FilteredInsights from '@/components/FilteredInsights';

import { client } from "@/sanity/client";

export const metadata: Metadata = {
  title: "AI Strategy Insights & Product Design Articles",
  description: "Expert insights on AI strategy, product design, and team transformation. Learn how leading companies implement AI-first operations and build systematic AI advantages.",
  keywords: ["AI strategy insights", "product design articles", "AI implementation", "team transformation", "AI operations", "business AI", "product management", "design systems"],
  openGraph: {
    title: "AI Strategy Insights & Product Design Articles",
    description: "Expert insights on AI strategy, product design, and team transformation. Learn how leading companies implement AI-first operations.",
    url: "https://summerfriday.co/insights",
    images: [
      {
        url: "/og-insights.png",
        width: 1200,
        height: 630,
        alt: "Summer Friday AI Strategy Insights",
      },
    ],
  },
  alternates: {
    canonical: "https://summerfriday.co/insights",
  },
};

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, tags}`;

const TAGS_QUERY = `array::unique(*[_type == "post" && defined(tags)].tags[])`;

const options = { next: { revalidate: 30 } };

export default async function InsightsPage() {
  const [posts, allTags] = await Promise.all([
    client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options),
    client.fetch<string[]>(TAGS_QUERY, {}, options)
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-[#eaeae3]">
      <Navbar />
      
      <main className="flex-grow">
                <section className="py-16 lg:py-24 bg-[#eaeae3]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            
            {/* Header */}
            <div className="mb-16">
              <Heading level="h2" className="mb-4">
                Insights
              </Heading>
              <Text size="lg" color="secondary" className="max-w-2xl">
                The latest thoughts on AI-first product development, team transformation, and building competitive advantages.
              </Text>
            </div>

            {/* Filtered Content */}
            <FilteredInsights posts={posts} allTags={allTags} />
            
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 