import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20">
      <SectionHeading>Get In Touch</SectionHeading>

      <div className="grid md:grid-cols-2 gap-12 mt-10">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-['Space_Grotesk']">
            Let's Connect
          </h3>
          <p className="text-[#8892B0]">
            I'm always open to discussing new projects, opportunities and collaborations.
          </p>

          <div className="flex gap-4">
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        <motion.form
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <Input 
            placeholder="Your Name" 
            className="bg-[#112240] border-[#233554]" 
          />
          <Input 
            type="email" 
            placeholder="Your Email" 
            className="bg-[#112240] border-[#233554]" 
          />
          <Textarea 
            placeholder="Your Message" 
            className="bg-[#112240] border-[#233554] min-h-[150px]" 
          />
          <Button className="w-full bg-[#64FFDA] text-[#0A192F] hover:bg-[#64FFDA]/90">
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
}