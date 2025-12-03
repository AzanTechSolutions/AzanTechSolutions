import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const Footer = () => {
  const socialLinks = [
    { icon: FiGithub, href: "https://github.com", label: "GitHub" },
    { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FiMail, href: "mailto:john.developer@example.com", label: "Email" },
  ];

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} John Developer. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;