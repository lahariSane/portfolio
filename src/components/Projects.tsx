import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects as projectsData } from "@/data/projects";

const Projects = () => {
  const totalProjects = projectsData.length;
  const remainder = totalProjects % 3;
  const shouldCenterLastRow = remainder === 2;

  const renderProjectCard = (
    project: (typeof projectsData)[number],
    index: number,
    wrapperClassName = "",
  ) => (
    <motion.div
      key={`${project.slug}-${wrapperClassName || "card"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={wrapperClassName}
    >
      <Link to={`/projects/${project.slug}`} className="block h-full">
        <Card className="p-6 h-full flex flex-col hover:shadow-glow transition-all duration-300 border-border group">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-4">
              {project.summary}
            </p>
            {project.achievement && (
              <p className="text-sm text-accent font-semibold mb-4">
                🏆 {project.achievement}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, 6).map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
            {project.tech.length > 6 && (
              <Badge variant="secondary">+{project.tech.length - 6}</Badge>
            )}
          </div>

          <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
            <span>View project</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </Card>
      </Link>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto mb-12" />

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.map((project, index) => {
                if (shouldCenterLastRow && index === totalProjects - 2) {
                  return (
                    <div
                      key="projects-last-row"
                      className="hidden lg:flex col-span-3 justify-between gap-8 max-w-4xl mx-auto"
                    >
                      {projectsData.slice(-2).map((proj, i) =>
                        renderProjectCard(proj, index + i, "w-full max-w-sm"),
                      )}
                    </div>
                  );
                }

                if (shouldCenterLastRow && index >= totalProjects - 2) {
                  return renderProjectCard(project, index, "lg:hidden");
                }

                return renderProjectCard(project, index);
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
