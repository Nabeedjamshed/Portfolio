import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0A192F]/80 backdrop-blur-sm border-b border-[#233554]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between">
            <div className="flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-[#CCD6F6] hover:text-[#64FFDA]">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-[#CCD6F6] hover:text-[#64FFDA]">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-[#CCD6F6] hover:text-[#64FFDA]">Projects</button>
              <button onClick={() => scrollToSection('achievements')} className="text-[#CCD6F6] hover:text-[#64FFDA]">Achievements</button>
              <button onClick={() => scrollToSection('contact')} className="text-[#CCD6F6] hover:text-[#64FFDA]">Contact</button>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-[#64FFDA]" />
              ) : (
                <Moon className="h-5 w-5 text-[#64FFDA]" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}