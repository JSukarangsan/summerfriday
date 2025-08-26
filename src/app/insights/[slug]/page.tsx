import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { Metadata } from "next";
import { client } from "@/sanity/client";
import Link from "next/link";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import { portableTextComponents } from '@/components/PortableTextComponents';

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  body,
  tags
}`;

const POSTS_QUERY = `*[_type == "post"]{
  slug
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export async function generateStaticParams() {
  try {
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);
    return posts.map((post) => ({
      slug: post.slug.current,
    }));
  } catch (error) {
    console.error('Error fetching posts for static generation:', error);
    // Return empty array if no posts or error - this allows the build to succeed
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
    };
  }

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(1200).height(630).url()
    : null;

  return {
    title: `${post.title} - AI Strategy Insights`,
    description: post.excerpt || `Read "${post.title}" - Expert insights on AI strategy, product design, and team transformation from Summer Friday.`,
    keywords: post.tags ? [...post.tags, "AI strategy", "product design", "Summer Friday"] : ["AI strategy", "product design", "insights"],
    openGraph: {
      title: post.title,
      description: post.excerpt || `Expert insights on AI strategy and product design from Summer Friday.`,
      url: `https://summerfriday.co/insights/${post.slug.current}`,
      images: postImageUrl ? [
        {
          url: postImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ] : [
        {
          url: "/og-insights.png",
          width: 1200,
          height: 630,
          alt: "Summer Friday AI Strategy Insights",
        },
      ],
    },
    alternates: {
      canonical: `https://summerfriday.co/insights/${post.slug.current}`,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              
              {/* Back Navigation */}
              <div className="mb-8">
                <Button variant="ghost" href="/insights" className="group">
                  <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Insights
                </Button>
              </div>

              {/* Article Header */}
              <header className="mb-12">
                <div className="mb-6">
                  <Text size="sm" color="secondary">
                    Published {new Date(post.publishedAt).toLocaleDateString()}
                  </Text>
                </div>
                
                <Heading level="h1" className="mb-4">
                  {post.title}
                </Heading>
                
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {postImageUrl && (
                  <div className="mb-8">
                    <img
                      src={postImageUrl}
                      alt={post.title}
                      className="w-full aspect-video object-cover rounded-2xl"
                      width="550"
                      height="310"
                    />
                  </div>
                )}
              </header>

              {/* Article Content */}
              <article className="max-w-none">
                {Array.isArray(post.body) && (
                  <PortableText 
                    value={post.body} 
                    components={portableTextComponents}
                  />
                )}
              </article>
              
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 