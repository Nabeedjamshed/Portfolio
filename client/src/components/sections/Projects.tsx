import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    id: 1,
    title: "Service Nest",
    description: "A comprehensive service marketplace platform",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: ["Flutter", "Firebase", "Node.js"],
    link: "#"
  },
  {
    id: 2,
    title: "Smart Teaching Assistant",
    description: "AI-powered teaching assistant application",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    technologies: ["Python", "TensorFlow", "Flask"],
    link: "#"
  },
  {
    id: 3,
    title: "Campredictor",
    description: "Machine learning based prediction system",
    imageUrl: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf",
    technologies: ["Python", "Scikit-learn", "Flask"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section className="py-20">
      <SectionHeading>Featured Projects</SectionHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
