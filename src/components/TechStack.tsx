import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const techStack = {
  Languages: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C'],
  Frameworks: ['React', 'Node.js', 'React Native', 'Express.js', 'Tailwind CSS', 'Material UI'],
  Databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
  Tools: ['Git', 'Figma', 'Docker', 'Postman', 'PyTorch', 'Hugging Face'],
};

const TechStack = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Tech Stack</h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto mb-12" />

          <div className="max-w-4xl mx-auto space-y-8">
            {Object.entries(techStack).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4 text-primary">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-sm py-2 px-4 hover:bg-gradient-primary hover:text-white transition-all cursor-pointer"
                      >
                        {item}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
