import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    id: 1,
    title: "Service Nest",
    description: "A comprehensive service marketplace platform connecting service providers with customers.",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: ["Flutter", "Firebase", "Node.js"],
    link: "https://github.com/Nabeedjamshed/service_nest"
  },
  {
    id: 2,
    title: "Smart Teaching Assistant",
    description: "AI-powered teaching assistant application leveraging machine learning for personalized education.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    technologies: ["Python", "TensorFlow", "AI"],
    link: "https://github.com/M-Awwab-Khan/smart-teaching-assistant"
  },
  {
    id: 3,
    title: "WhatsApp Chat Analyzer",
    description: "Advanced analytics tool for WhatsApp conversations using data science techniques.",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
    technologies: ["Python", "Data Science", "NLP"],
    link: "https://github.com/Nabeedjamshed/Whatsapp-chat-analyzer"
  },
  {
    id: 4,
    title: "CamPredictor",
    description: "Machine learning-based prediction system utilizing computer vision.",
    imageUrl: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf",
    technologies: ["Python", "OpenCV", "Machine Learning"],
    link: "https://github.com/Nabeedjamshed/CamPredictor"
  },
  {
    id: 5,
    title: "Voice Assistant",
    description: "Intelligent voice assistant using natural language processing.",
    imageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008",
    technologies: ["Python", "NLP", "Speech Recognition"],
    link: "https://github.com/Nabeedjamshed/Voice_assistent"
  },
  {
    id: 6,
    title: "Titanic Mystery",
    description: "Exploratory Data Analysis of the Titanic dataset with predictive modeling.",
    imageUrl: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13",
    technologies: ["Python", "Data Analysis", "Machine Learning"],
    link: "https://github.com/Nabeedjamshed/Titanic-Mystery-EDA"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <SectionHeading>Featured Projects</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}