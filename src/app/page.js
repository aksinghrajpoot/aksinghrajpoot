import Aboutcomponent from "../components/About/About";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

export const metadata = {
  title: '',
  description: "Welcome to A K Singh Rajpoot's personal website!",
};
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
