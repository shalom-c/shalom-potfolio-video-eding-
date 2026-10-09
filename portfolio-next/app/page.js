import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Tools from "../components/Tools";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Services />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
