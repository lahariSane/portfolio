import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy, Users, ExternalLink } from "lucide-react";

const hackathons = [
  {
    title: "Tally CodeBrewers 2024",
    achievement: "2nd Runner-ups",
    description:
      "Built an online coding platform with live leaderboard and socket-based updates.",
    team: "Team of 3",
    mentors: "Sainath Das and Dinchin",
    link: "https://www.linkedin.com/posts/laharisane_hackathon-coding-tech-activity-7232227413164744704-hd--?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBYkSIB-aQ6xL1_OC_LOo7LFEDoA2SInHM",
  },
  {
    title: "Smart India Hackathon (SIH) 2024",
    achievement: "Finalist",
    description:
      "Developed a Smart Electricity Management System using RTOS. I have focused on frontend integration and data visualization.",
    team: "Team of 5",
    link: "https://www.linkedin.com/posts/naveen-kumar-lankotu_sih2024-teamwork-innovation-ugcPost-7277915277814611968-TlnT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBYkSIB-aQ6xL1_OC_LOo7LFEDoA2SInHM",
  },
];

const Hackathons = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Hackathons</h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-glow transition-all duration-300 border-border">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-primary">
                      <Trophy className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">
                        {hackathon.title}
                      </h3>
                      <p className="text-accent font-semibold">
                        {hackathon.achievement}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {hackathon.description}
                  </p>
                  {hackathon.team && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Users className="h-4 w-4" />
                      {hackathon.team}
                      {hackathon.mentors && ` • Guided by ${hackathon.mentors}`}
                    </div>
                  )}
                  {hackathon.link && (
                    <a
                      href={hackathon.link}
                      className="inline-flex items-center gap-2 text-primary hover:underline mt-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Reference Post
                    </a>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hackathons;
