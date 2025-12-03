import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Full Stack Java Developer";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Rizvi Softwear Developer
          </motion.h1>
          
          <div className="h-16 mb-6">
            <h2 className="text-2xl md:text-4xl text-foreground/80 font-display">
              {text}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Crafting robust, scalable applications with Java, Spring Boot, and modern web technologies. 
            Passionate about clean code and innovative solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center mb-8"
          >
            <Button variant="gradient" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" download>
                <FiDownload className="mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border hover:border-primary transition-colors"
            >
              <FiGithub size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border hover:border-primary transition-colors"
            >
              <FiLinkedin size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;