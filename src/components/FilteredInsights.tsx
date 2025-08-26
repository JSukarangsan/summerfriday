'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { type SanityDocument } from 'next-sanity';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';

interface FilteredInsightsProps {
  posts: SanityDocument[];
  allTags: string[];
}

export default function FilteredInsights({ posts, allTags }: FilteredInsightsProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = selectedTag 
    ? posts.filter(post => post.tags && post.tags.includes(selectedTag))
    : posts;

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  const clearFilter = () => {
    setSelectedTag(null);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Main Content - Posts List */}
      <div className="lg:col-span-3">
        {/* Filter Status */}
        {selectedTag && (
          <div className="mb-6 flex items-center gap-4">
            <Text size="sm" color="secondary">
              Showing posts tagged with "{selectedTag}"
            </Text>
            <Button 
              variant="ghost" 
              onClick={clearFilter}
              className="text-sm"
            >
              Clear filter
            </Button>
          </div>
        )}

        {/* Posts List */}
        <div className="space-y-8 pb-16">
          {filteredPosts.map((post) => (
            <article key={post._id} className="border-b border-neutral-200 pb-8">
              <Link href={`/insights/${post.slug.current}`} className="block group">
                <Eyebrow 
                  text={new Date(post.publishedAt).toLocaleDateString()}
                  className="mb-2 bg-neutral-900 text-white px-2 py-1 rounded inline-block"
                />
                <Heading level="h2" className="mb-2 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </Heading>
              </Link>
            </article>
          ))}
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <Text size="lg" color="secondary">
                {selectedTag 
                  ? `No insights found for "${selectedTag}". Try a different topic.`
                  : "No insights published yet. Check back soon!"
                }
              </Text>
            </div>
          )}
        </div>
      </div>

      {/* Right Rail - Tag Filter */}
      <div className="lg:col-span-1">
        <div className="p-6 sticky top-8">
          <Text size="lg" className="mb-4 font-semibold">
            Filter by Topic
          </Text>
          
          <div className="flex flex-wrap gap-2">
            {allTags.sort().map((tag) => (
              <Button
                key={tag}
                variant="outline"
                onClick={() => handleTagClick(tag)}
                className={`text-xs px-2 py-0.5 ${
                  selectedTag === tag 
                    ? 'bg-blue-50 border-blue-500 text-blue-700' 
                    : ''
                }`}
              >
                {tag}
              </Button>
            ))}
            
            {allTags.length === 0 && (
              <Text size="sm" color="secondary">
                No tags available yet.
              </Text>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 