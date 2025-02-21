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

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <SectionHeading>Technical Skills</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-[#112240] border-[#233554] hover:shadow-lg hover:shadow-[#64FFDA]/10 transition-all duration-300">
              <h3 className="text-xl font-['Space_Grotesk'] text-[#64FFDA] mb-4">
                {skill.name}
              </h3>
              <div className="w-full bg-[#233554] h-2 rounded-full overflow-hidden">
                <motion.div 
                  className="bg-[#64FFDA] h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
              <div className="mt-2 text-right text-sm text-[#8892B0]">
                {skill.level}%
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}