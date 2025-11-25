import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Mail } from 'lucide-react';
import { FiLinkedin, FiGithub } from "react-icons/fi";

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'laharisane1511@gmail.com',
    href: 'mailto:laharisane1511@gmail.com',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/laharisane',
    href: 'https://linkedin.com/in/laharisane',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/lahariSane',
    href: 'https://github.com/lahariSane',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto mb-12" />
          <p className="text-center text-lg font-medium w-1/3 mx-auto text-muted-foreground mb-6">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-glow transition-all duration-300 border-border group cursor-pointer">
                  <motion.div
                    className="inline-block p-4 rounded-full bg-gradient-primary mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <contact.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {contact.label}
                  </h3>
                  <p className="text-sm text-muted-foreground break-all">
                    {contact.value}
                  </p>
                </Card>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
