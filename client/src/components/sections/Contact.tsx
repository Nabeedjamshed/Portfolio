import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20">
      <SectionHeading>Get In Touch</SectionHeading>

      <div className="grid md:grid-cols-2 gap-12 mt-10">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-['Space_Grotesk']">
            Let's Connect
          </h3>
          <p className="text-[#8892B0]">
            I'm always open to discussing new projects, opportunities and collaborations.
          </p>

          <div className="flex gap-4">
            <a href="mailto:nabeedjamshedali800@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-[#64FFDA]">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://github.com/Nabeedjamshed" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-[#64FFDA]">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/nabeed-jamshed-14b4292a3/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-[#64FFDA]">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <Input 
            placeholder="Your Name" 
            className="bg-[#112240] border-[#233554]"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input 
            type="email" 
            placeholder="Your Email" 
            className="bg-[#112240] border-[#233554]"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <Textarea 
            placeholder="Your Message" 
            className="bg-[#112240] border-[#233554] min-h-[150px]"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <Button type="submit" className="w-full bg-[#64FFDA] text-[#0A192F] hover:bg-[#64FFDA]/90">
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
}