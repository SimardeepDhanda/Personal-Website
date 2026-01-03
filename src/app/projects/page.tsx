import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/data";

export const metadata = {
  title: "Projects",
  description: "A collection of software engineering projects by Simardeep Dhanda.",
};

export default function ProjectsPage() {
  return (
    <div className="w-full bg-[#1a2332] min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="mb-20 sm:mb-24 lg:mb-28">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-white/30"></div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-tight">
              Projects
            </h1>
          </div>
          <p className="text-xl sm:text-2xl text-gray-300 font-light ml-16 sm:ml-20 mb-6">
            A collection of software engineering projects I've built.
          </p>
          <div className="h-px w-full bg-white/20 ml-16 sm:ml-20"></div>
        </div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

