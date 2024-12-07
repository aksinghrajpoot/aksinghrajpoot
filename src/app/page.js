import Head from "next/head";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return <>
  <Head>
        <title>A K Singh Rajpoot </title>
  </Head>
  <Header />
  <Hero/>
  <About />
  <Footer/>
  </>;
}