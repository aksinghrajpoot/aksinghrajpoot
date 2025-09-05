import { WPPost } from '@/app/types/wordpress';

const WORDPRESS_API_URL = 'https://blog.aksinghrajpoot.com/wp-json/wp/v2';

export async function getPosts(): Promise<WPPost[]> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?_embed&per_page=100&orderby=date&order=desc`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    
    const posts: WPPost[] = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return [];
  }
}

export async function getPost(slug: string): Promise<WPPost | null> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    
    const posts: WPPost[] = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
    return null;
  }
}