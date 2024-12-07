// app/layout.js
import Head from "next/head";
import "@/global.css";
import { defaultMetadata } from '@/metaConfig';


// `generateMetadata` dynamically sets metadata based on the current page
export async function generateMetadata({ pathname }) {
  // Check if the current path is the home page
  const isHomePage = pathname === '/';

  // Return the dynamic metadata
  return {
    title: isHomePage
      ? defaultMetadata.siteTitle // Just the site title for the home page
      : `${defaultMetadata.pageTitle} - ${defaultMetadata.siteTitle}`, // Page title + site title for other pages
    description: defaultMetadata.description, // Default description
  };
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
