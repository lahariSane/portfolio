import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";
import { experiences } from "@/data/experiences";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto mb-12" />

          <div className="max-w-5xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.slug}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 border-border bg-card/80">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="p-3 rounded-lg bg-gradient-primary shrink-0">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                        <Badge variant="secondary" className="uppercase">
                          {exp.role}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {exp.period}
                        {exp.location ? ` • ${exp.location}` : ""}
                      </p>
                      <p className="text-muted-foreground">{exp.summary}</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {exp.responsibilities.slice(0, 3).map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
