import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface NavbarProps {
  minimal?: boolean;
}

const Navbar = ({ minimal = false }: NavbarProps) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (minimal) return;
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNameClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {minimal ? (
          <Link
            to="/"
            className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Home
          </Link>
        ) : (
          <motion.span whileHover={{ scale: 1.05 }}>
            <Link
              to="/"
              onClick={handleNameClick}
              className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent"
            >
              Lahari Sane
            </Link>
          </motion.span>
        )}

        {!minimal && (
          <div className="hidden md:flex items-center gap-6">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
