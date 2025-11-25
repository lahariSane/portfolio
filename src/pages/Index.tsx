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
import SEO from "@/components/seo";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  SITE_NAME,
  SITE_URL,
} from "@/config/siteMeta";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title={SITE_NAME}
        description={DEFAULT_DESCRIPTION}
        keywords={[
          ...DEFAULT_KEYWORDS,
          "Portfolio",
          "Hero Section",
          "Projects Showcase",
        ]}
        url={SITE_URL}
      />
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
  );
};

export default Index;
