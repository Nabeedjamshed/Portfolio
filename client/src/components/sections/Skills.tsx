import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";

const skills = [
  { name: "Flutter", level: 90 },
  { name: "Firebase", level: 85 },
  { name: "Python", level: 80 },
  { name: "C++", level: 75 },
  { name: "MySQL", level: 85 }
];

export default function Skills() {
  return (
    <section className="py-20">
      <SectionHeading>Technical Skills</SectionHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-[#112240] border-[#233554]">
              <h3 className="text-xl font-['Space_Grotesk'] text-[#64FFDA] mb-2">
                {skill.name}
              </h3>
              <div className="w-full bg-[#233554] h-2 rounded-full">
                <div 
                  className="bg-[#64FFDA] h-2 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
