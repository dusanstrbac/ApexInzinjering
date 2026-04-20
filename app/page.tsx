import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PortfolioGrid from "@/components/PortfolioGrid";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PortfolioGrid />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
