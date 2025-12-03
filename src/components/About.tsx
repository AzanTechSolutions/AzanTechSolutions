import { motion } from "framer-motion";
import { FiCode, FiServer, FiDatabase, FiCloud } from "react-icons/fi";

const About = () => {
  const experiences = [
    {
      year: "2023 - Present",
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      description: "Leading development of enterprise Java applications using Spring Boot and microservices architecture.",
    },
    {
      year: "2021 - 2023",
      title: "Java Developer",
      company: "Digital Innovations Ltd.",
      description: "Developed RESTful APIs and integrated Oracle databases for scalable web applications.",
    },
    {
      year: "2019 - 2021",
      title: "Junior Developer",
      company: "StartUp Hub",
      description: "Built full-stack applications using Java, React, and implemented CI/CD pipelines.",
    },
  ];

  const highlights = [
    { icon: FiCode, title: "Clean Code", description: "Writing maintainable, scalable code following SOLID principles" },
    { icon: FiServer, title: "Backend Expert", description: "Spring Boot, Microservices, REST APIs" },
    { icon: FiDatabase, title: "Database Design", description: "Oracle SQL, PL/SQL, PostgreSQL optimization" },
    { icon: FiCloud, title: "Cloud Ready", description: "AWS, Docker, Kubernetes deployment" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-mesh">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate Full Stack Java Developer with expertise in building enterprise-grade applications. 
            I specialize in creating robust backend systems with Spring Boot and modern, responsive frontends with React.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 text-center hover:border-primary transition-all duration-300"
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-accent" />
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"}`}>
                  <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 ml-12 md:ml-0 hover:border-primary transition-colors duration-300">
                    <span className="text-sm text-primary font-semibold">{exp.year}</span>
                    <h4 className="text-xl font-bold mt-2">{exp.title}</h4>
                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;