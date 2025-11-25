import { motion } from 'framer-motion';
import { Code2, Heart } from 'lucide-react';
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiMail, href: 'mailto:laharisane1511@gmail.com', label: 'Email' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/laharisane', label: 'LinkedIn' },
    { icon: FiGithub, href: 'https://github.com/lahariSane', label: 'GitHub' },
    { icon: Code2, href: '#', label: 'LeetCode' },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-primary transition-colors"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          <div className="h-1 w-full max-w-md bg-gradient-primary rounded-full opacity-30" />

          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © {currentYear} Lahari Sane. Made with <Heart className="h-4 w-4 text-primary fill-primary" /> and code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
