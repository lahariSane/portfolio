import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Hackathons from "@/components/Hackathons";
import Leadership from "@/components/Leadership";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y267BGYVRP"
        ></script>
        <script
          // Set GA config via Helmet to keep scripts in document head.
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y267BGYVRP');
            `,
          }}
        />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Hackathons />
        <Leadership />
        <Education />
        <Achievements />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
