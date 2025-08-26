import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/client';

export async function POST(request: NextRequest) {
  try {
    // Get all posts
    const posts = await client.fetch('*[_type == "post"]{_id, title, tags}');
    console.log(`Found ${posts.length} posts`);

    // Sample tags to assign
    const tagSets = [
      ['AI', 'Product Development', 'Strategy'],
      ['Design Systems', 'Frontend', 'UI/UX'],
      ['Team Building', 'Leadership', 'Process'],
      ['Innovation', 'Technology', 'Insights'],
      ['Workflow', 'Productivity', 'Automation'],
      ['AI-First', 'Transformation', 'Best Practices'],
      ['Product Management', 'Development', 'Tools'],
    ];

    const updates = [];

    // Add tags to posts that don't have them
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      
      // Skip if post already has tags
      if (post.tags && post.tags.length > 0) {
        console.log(`Skipping ${post.title} - already has tags`);
        continue;
      }
      
      const tags = tagSets[i % tagSets.length]; // Cycle through tag sets
      
      console.log(`Adding tags to post: ${post.title}`);
      console.log(`Tags: ${tags.join(', ')}`);

      // Note: This is a read-only client, so we'll return the update instructions
      updates.push({
        postId: post._id,
        title: post.title,
        tagsToAdd: tags
      });
    }

    return NextResponse.json({
      success: true,
      message: `Found ${posts.length} posts, ${updates.length} need tags`,
      posts: posts.map((p: any) => ({
        title: p.title,
        existingTags: p.tags || [],
        needsTags: !p.tags || p.tags.length === 0
      })),
      updates
    });

  } catch (error) {
    console.error('Error checking posts:', error);
    return NextResponse.json(
      { error: 'Failed to process posts' },
      { status: 500 }
    );
  }
} 