import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Award } from 'lucide-react';

const achievements = [
  {
    title: 'JEE Advanced 2022',
    description: 'All India Rank: 10108',
  },
  {
    title: 'Smart India Hackathon 2024',
    description: 'Finalist',
  },
  {
    title: 'Tally CodeBrewers 2024',
    description: '2nd Runner-up',
  },
];

const Achievements = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Achievements</h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-glow transition-all duration-300 border-border group">
                  <motion.div
                    className="inline-block p-4 rounded-full bg-gradient-primary mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Award className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
