import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Java", level: 95 },
        { name: "Spring Boot", level: 92 },
        { name: "Spring MVC", level: 88 },
        { name: "Hibernate/JPA", level: 85 },
        { name: "Microservices", level: 87 },
        { name: "REST APIs", level: 93 },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 88 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "TypeScript", level: 82 },
        { name: "HTML5/CSS3", level: 92 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Redux", level: 78 },
      ],
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "Oracle SQL", level: 90 },
        { name: "PL/SQL", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 75 },
        { name: "AWS", level: 80 },
        { name: "Docker", level: 83 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 92 },
        { name: "Maven/Gradle", level: 88 },
        { name: "Jenkins CI/CD", level: 82 },
        { name: "JUnit/Mockito", level: 87 },
        { name: "Agile/Scrum", level: 90 },
        { name: "Linux", level: 78 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-mesh">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise in full-stack development with specialization in Java ecosystem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary transition-colors duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold mb-4">Also Familiar With</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {["GraphQL", "Kubernetes", "Redis", "Kafka", "ElasticSearch", "RabbitMQ", "Nginx", "Firebase", "Webpack", "SASS", "Bootstrap", "Material-UI"].map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;