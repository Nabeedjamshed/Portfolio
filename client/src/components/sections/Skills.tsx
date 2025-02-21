import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";

const skills = [
  { name: "Machine Learning", level: 90 },
  { name: "Deep Learning", level: 85 },
  { name: "Computer Vision", level: 85 },
  { name: "Python", level: 90 },
  { name: "TensorFlow/PyTorch", level: 80 },
  { name: "Natural Language Processing", level: 75 }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <SectionHeading>Technical Skills</SectionHeading>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={cardVariants}
          >
            <Card className="p-6 bg-[#112240] border-[#233554] hover:shadow-lg hover:shadow-[#64FFDA]/10 transition-all duration-300">
              <motion.h3 
                className="text-xl font-['Space_Grotesk'] text-[#64FFDA] mb-4"
                whileHover={{ scale: 1.05 }}
              >
                {skill.name}
              </motion.h3>
              <div className="w-full bg-[#233554] h-2 rounded-full overflow-hidden">
                <motion.div 
                  className="bg-[#64FFDA] h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
                />
              </div>
              <motion.div 
                className="mt-2 text-right text-sm text-[#8892B0]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                {skill.level}%
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}