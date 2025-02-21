import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    link: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-[#112240] border-[#233554] group">
      <div className="relative aspect-video">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-['Space_Grotesk'] text-[#64FFDA]">
            {project.title}
          </h3>
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64FFDA] hover:text-[#64FFDA]/80"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
        <p className="mt-2 text-[#8892B0]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-[#233554] hover:bg-[#233554]/80 text-[#64FFDA]"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
