import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with microservices architecture, handling 10K+ daily transactions",
      image: "/api/placeholder/600/400",
      techStack: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker", "AWS"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Banking API System",
      description: "Secure RESTful API for banking operations with OAuth2 authentication and PL/SQL procedures",
      image: "/api/placeholder/600/400",
      techStack: ["Java", "Spring Security", "Oracle DB", "PL/SQL", "JWT", "Redis"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Healthcare Management",
      description: "Patient management system with real-time appointment scheduling and medical records",
      image: "/api/placeholder/600/400",
      techStack: ["Spring Boot", "React", "TypeScript", "MongoDB", "WebSocket"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Inventory Tracker",
      description: "Real-time inventory management with predictive analytics and automated reordering",
      image: "/api/placeholder/600/400",
      techStack: ["Java", "Spring MVC", "Angular", "MySQL", "Kafka"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Social Media API",
      description: "Scalable social media backend with GraphQL API and real-time notifications",
      image: "/api/placeholder/600/400",
      techStack: ["Spring Boot", "GraphQL", "PostgreSQL", "WebSocket", "Redis"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Task Management System",
      description: "Agile project management tool with Kanban boards and team collaboration features",
      image: "/api/placeholder/600/400",
      techStack: ["Java", "React", "Material-UI", "PostgreSQL", "Docker"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing my expertise in full-stack development with Java and modern web technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="h-48 bg-gradient-mesh rounded-lg mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary/30">{project.title.charAt(0)}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FiGithub className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="default" size="sm" asChild className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;