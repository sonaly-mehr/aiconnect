import Footer from "@/components/layout/Footer";
import AboutUs from "@/components/layout/Home/AboutUs";
import Contact from "@/components/layout/Home/Contact";
import Hero from "@/components/layout/Home/Hero";
import Services from "@/components/layout/Home/Services";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Services/>
      <AboutUs/>
      <Contact/>
      <Footer/>
    </main>
  );
}
