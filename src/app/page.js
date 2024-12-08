import ExperienceHome from "@/components/Experience/Experience";
import Aboutcomponent from "../components/About/About";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";

export const metadata = {
  title:"A K Singh Rajpoot"
}

export default function Home() {
  return (
    <>
      <Hero />
      <Aboutcomponent />
      <ExperienceHome/>
      <Footer/>
    </>
  );
}
