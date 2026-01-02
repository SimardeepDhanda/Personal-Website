import { Section } from "@/components/Section";
import { PageHeader } from "@/components/PageHeader";
import { ExperienceCard } from "@/components/ExperienceCard";
import { EXPERIENCE } from "@/data";

export const metadata = {
  title: "Experience",
  description: "Professional experience and roles by Simardeep Dhanda.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <Section>
        <PageHeader
          title="Experience"
          subtitle="Professional roles and contributions."
        />
      </Section>

      <Section>
        <div className="space-y-6">
          {EXPERIENCE.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </Section>
    </div>
  );
}

