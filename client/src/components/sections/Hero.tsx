import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-between">
      <div className="space-y-6 max-w-2xl">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-7xl font-bold font-['Space_Grotesk']"
        >
          Hi, I'm{" "}
          <span className="text-[#64FFDA]">
            Nabeed Jamshed
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl sm:text-2xl text-[#8892B0] max-w-2xl font-['Inter']"
        >
          A passionate AI and Machine Learning enthusiast dedicated to building intelligent systems that solve real-world problems. 
          Specializing in deep learning, computer vision, and predictive analytics.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            className="bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10"
            size="lg"
          >
            View My Work
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="hidden lg:block"
      >
        <div className="relative w-80 h-80">
          <div className="absolute inset-0 border-2 border-[#64FFDA] rounded-lg transform rotate-6"></div>
          <img 
            src="/attached_assets/nabeed Ali.jpg"
            alt="Nabeed Jamshed"
            className="absolute inset-0 w-full h-full object-cover rounded-lg transform -rotate-6 transition-transform duration-300 hover:rotate-0"
          />
        </div>
      </motion.div>
    </section>
  );
}