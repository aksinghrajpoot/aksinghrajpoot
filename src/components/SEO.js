// components/SEO.js
import Head from "next/head";

const SEO = ({ title, description, keywords }) => {
  const siteTitle = "A K Singh"; // Replace with your site name
  const pageTitle = title ? `${siteTitle} | ${title}` : siteTitle;
  const defaultDescription = "Your default site description here.";
  const defaultKeywords = "default, keywords, here";

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph Tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={typeof window !== "undefined" ? window.location.href : ""} />
      <meta property="og:site_name" content={siteTitle} />
    </Head>
  );
};

export default SEO;
