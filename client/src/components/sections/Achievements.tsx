import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const achievements = [
  {
    year: 2025,
    title: "Co-founded Programmunity",
    description: "Created a thriving programming community platform"
  },
  {
    year: 2024,
    title: "4th Position in TechFest NED",
    description: "Coding Competition achievement at NED University"
  },
  {
    year: 2024,
    title: "3rd Position in Supercom",
    description: "Coding Competition at Bahria University"
  },
  {
    year: 2024,
    title: "5th Position in ProBattle",
    description: "Machine Learning Competition at IBA University"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <SectionHeading>Achievements</SectionHeading>

      <div className="space-y-6 mt-10">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-[#112240] border-[#233554] hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-4">
                <Trophy className="h-6 w-6 text-[#64FFDA] flex-shrink-0" />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-['Space_Grotesk'] text-[#64FFDA]">
                      {achievement.title}
                    </h3>
                    <span className="text-sm text-[#8892B0]">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="mt-2 text-[#8892B0]">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}