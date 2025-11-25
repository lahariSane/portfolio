import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    institution: 'IIIT Sricity',
    location: 'Sricity, Andhra Pradesh',
    degree: 'B.Tech in Computer Science',
    period: '2022 - Present',
    gpa: '9.21 / 10.0',
  },
  {
    institution: 'Narayana Junior College',
    location: 'Hyderabad, Telangana',
    degree: 'Intermediate in Computer Science',
    period: '2020 - 2022',
    score: '989 / 1000',
  },
  {
    institution: 'Narayana E.M High School',
    location: 'Dharmavaram, Andhra Pradesh',
    degree: 'Secondary School Leaving Certificate',
    period: '2020 Passed out',
    score: '600/600',
  }
];

const Education = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Education</h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto mb-12" />

          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-glow transition-all duration-300 border-border">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-primary">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{edu.institution}</h3>
                      <p className="text-primary font-semibold mb-2">{edu.degree}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-1">
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{edu.period}</span>
                        <span>•</span>
                        <span className="font-semibold text-accent">
                          {edu.gpa || edu.score}
                        </span>
                      </div>
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

export default Education;
