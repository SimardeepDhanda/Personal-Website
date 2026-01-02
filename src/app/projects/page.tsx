import { Section } from "@/components/Section";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/data";

export const metadata = {
  title: "Projects",
  description: "A collection of software engineering projects by Simardeep Dhanda.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <Section>
        <PageHeader
          title="Projects"
          subtitle="A collection of software engineering projects I've built."
        />
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
}

