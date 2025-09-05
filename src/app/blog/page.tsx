'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { WPPost } from '@/app/types/wordpress';
import { getPosts } from '@/app/lib/wordpress';
import styles from "./Blog.module.css";

export default function Blogs(): React.ReactElement {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showFeaturedImages, setShowFeaturedImages] = useState<boolean>(false);

  useEffect(() => {
    async function loadPosts() {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (err) {
        setError('Failed to load blog posts');
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Read Blogs</h1>
        </div>
        <div className="container py-10">
          <p>Loading posts...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Read Blogs</h1>
        </div>
        <div className="container py-10">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <Head>
        <title>Blog Posts</title>
        <meta name="description" content="Read our latest blog posts and articles" />
        <meta name="keywords" content="blog, articles, posts" />
      </Head>

      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Read Blogs</h1>
          
          {/* Toggle for featured images */}
          <div className={styles.toggleContainer}>
            <label className={styles.toggleLabel}>
              <input 
                type="checkbox" 
                checked={showFeaturedImages}
                onChange={() => setShowFeaturedImages(!showFeaturedImages)}
              />
              Show Featured Images
            </label>
          </div>
        </div>

        <div className="container py-10">
          <div className="grid gap-4">
            {posts.length > 0 ? (
              posts.map((post) => {
                // Extract author information
                const author = post._embedded?.author?.[0]?.name || 'Unknown Author';
                
                // Extract featured image if available
                const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

                return (
                  <div key={post.id} className={styles.card}>
                    {showFeaturedImages && featuredImage && (
                      <div className={styles.featuredImage}>
                        <img src={featuredImage} alt={post.title.rendered} />
                      </div>
                    )}
                    
                    <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    
                    <div className={styles.meta}>
                      <span>By {author}</span>
                      <span>Published: {formatDate(post.date)}</span>
                      {post.modified !== post.date && (
                        <span>Updated: {formatDate(post.modified)}</span>
                      )}
                    </div>
                    
                    <div 
                      className={styles.excerpt} 
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
                    />
                    
                    <Link href={`/${post.slug}`} passHref>
                      <span className={styles.readMore}>Read More</span>
                    </Link>
                  </div>
                );
              })
            ) : (
              <p>No blog posts found.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}