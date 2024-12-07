// src/app/404.jsx
import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link href="/" passHref>
        <a style={styles.link}>Go back to Home</a>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    color: '#333',
    padding: '0 20px'
  },
  heading: {
    fontSize: '3rem',
    margin: '0 0 20px'
  },
  text: {
    fontSize: '1.5rem',
    margin: '0 0 20px'
  },
  link: {
    fontSize: '1.2rem',
    color: '#0070f3',
    textDecoration: 'none'
  }
};
