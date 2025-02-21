import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const achievements = [
  {
    year: 2023,
    title: "Co-founded Programmunity",
    description: "Created a thriving programming community platform"
  },
  {
    year: 2022,
    title: "National Coding Competition Winner",
    description: "First place in algorithmic problem solving"
  },
  {
    year: 2021,
    title: "Google Flutter Certification",
    description: "Advanced mobile development certification"
  }
];

export default function Achievements() {
  return (
    <section className="py-20">
      <SectionHeading>Achievements</SectionHeading>
      
      <div className="space-y-6 mt-10">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-[#112240] border-[#233554]">
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
