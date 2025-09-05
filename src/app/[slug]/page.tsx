import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { WPPost } from '@/app/types/wordpress';
import { getPosts, getPost } from '@/app/lib/wordpress';

interface PostProps {
  post: WPPost | null;
}

export default function Post({ post }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  const author = post._embedded?.author?.[0]?.name || 'Unknown Author';
  
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <Head>
        <title>{post.title.rendered}</title>
        <meta 
          name="description" 
          content={post.excerpt.rendered.replace(/<[^>]*>/g, '')} 
        />
      </Head>

      <article className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
          <span>By {author}</span>
          <span>Published: {formatDate(post.date)}</span>
          {post.modified !== post.date && (
            <span>Updated: {formatDate(post.modified)}</span>
          )}
        </div>
        
        <div 
          className="prose max-w-none" 
          dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
        />
      </article>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await getPost(slug);

  return {
    props: {
      post,
    },
    revalidate: 60, // Regenerate page every 60 seconds
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};