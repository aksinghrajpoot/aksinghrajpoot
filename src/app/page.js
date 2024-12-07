import Aboutcomponent from "../components/About/About";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

export const metadata = {
  title:"A K Singh Rajpoot"
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Aboutcomponent />
      <Footer />
    </>
  );
}
