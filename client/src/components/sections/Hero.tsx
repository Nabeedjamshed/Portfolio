import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-between pt-16">
      <div className="space-y-6 max-w-2xl">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="text-5xl sm:text-7xl font-bold font-['Space_Grotesk']"
        >
          Hi, I'm{" "}
          <motion.span 
            className="text-[#64FFDA]"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Nabeed Jamshed
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
          className="text-xl sm:text-2xl text-[#8892B0] max-w-2xl font-['Inter']"
        >
          A passionate AI and Machine Learning enthusiast dedicated to building intelligent systems that solve real-world problems. 
          Specializing in deep learning, computer vision, and predictive analytics.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Button 
            onClick={scrollToProjects}
            className="bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10"
            size="lg"
          >
            View My Work
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
        className="hidden lg:block relative"
      >
        <div className="relative w-80 h-80">
          <motion.div 
            className="absolute inset-0 border-2 border-[#64FFDA] rounded-lg"
            animate={{ rotate: [0, 6] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          ></motion.div>
          <motion.img 
            src="D:\Portfolio\NabeedPortfolio\attached_assets\nabeed Ali.jpg" 
            alt="Laptop Setup"
            className="absolute inset-0 w-full h-full object-cover rounded-lg transform -rotate-6"
            whileHover={{ rotate: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </section>
  );
}