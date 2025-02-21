import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] text-[#CCD6F6] relative pb-4 inline-block">
      {children}
      <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#64FFDA]"></span>
    </h2>
  );
}
