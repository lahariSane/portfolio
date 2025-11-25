import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto mb-12" />

          <motion.div
            className="bg-card rounded-2xl p-8 shadow-lg border border-border"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm{" "}
              <span className="text-primary font-semibold">Lahari Sane</span>, a
              Computer Science undergraduate at IIIT Sricity driven by a passion
              for building technology that truly impacts people.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My work bridges full-stack web development, NLP-based AI
              applications, and research in mental health, particularly focusing
              on Postpartum Depression. From creating human-centered digital
              solutions to leading hackathon projects that tackle real-world
              problems, I love turning ideas into experiences that make a
              difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Curiosity, collaboration, and creativity are at the core of my
              journey — I’m constantly exploring how technology can empower,
              connect, and heal.
            </p>

            <Button className="bg-gradient-primary shadow-glow" asChild>
              <a
                href="https://linkedin.com/in/laharisane"
                target="_blank"
                rel="noopener noreferrer"
              >
                Let's Connect
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
