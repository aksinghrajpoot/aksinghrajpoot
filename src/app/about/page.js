import Head from "next/head";

export const metadata = {
  title: 'About',
}
 
export default function About() {
  return (
    <>
      <div className="container min-h-fit">
        <h1>About Us</h1>
        <p>Welcome to the About page of our awesome website!</p>{" "}
      </div>
    </>
  );
}
