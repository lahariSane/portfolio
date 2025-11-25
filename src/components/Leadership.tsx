import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Users, ExternalLink } from "lucide-react";

const Leadership = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">
            Positions of Responsibility
          </h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto mb-12" />

          <div className="max-w-3xl mx-auto">
            <Card className="p-6 hover:shadow-glow transition-all duration-300 border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">
                    Student Development Council Member
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    IIIT Sricity
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    2023 - 2024
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Organized 3+ major events fostering collaboration and
                    innovation. Led both technical and cultural teams for
                    Abhisarga 2k24.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://www.linkedin.com/posts/laharisane_abhisarga2k24-iiitsricity-organizergratitude-activity-7170660496721862657-HOXF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBYkSIB-aQ6xL1_OC_LOo7LFEDoA2SInHM"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Post 1 - Abhisarga 2k24
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/laharisane_looking-back-on-my-time-as-a-ug2-member-of-activity-7260665719334281216-7vK4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBYkSIB-aQ6xL1_OC_LOo7LFEDoA2SInHM"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Post 2 - Appreciation Certificate
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
