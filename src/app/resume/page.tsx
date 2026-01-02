"use client";

import { useState } from "react";
import { Download, Copy, Check } from "lucide-react";
import { Section } from "@/components/Section";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { Tag } from "@/components/Tag";
import { RESUME, EXPERIENCE, PROJECTS, SITE } from "@/data";

export default function ResumePage() {
  const [copied, setCopied] = useState(false);

  const copyAsText = () => {
    const text = generatePlainTextResume();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const generatePlainTextResume = () => {
    let text = `${SITE.name}\n${SITE.title}\n${SITE.location}\n\n`;
    text += `Email: ${SITE.email}\n`;
    SITE.socials.forEach((social) => {
      text += `${social.label}: ${social.href}\n`;
    });
    text += "\n---\n\n";

    text += "EXPERIENCE\n\n";
    EXPERIENCE.forEach((exp) => {
      text += `${exp.role} | ${exp.org}\n`;
      text += `${exp.dates}${exp.location ? ` | ${exp.location}` : ""}\n`;
      exp.bullets.forEach((bullet) => {
        text += `• ${bullet}\n`;
      });
      text += "\n";
    });

    text += "PROJECTS\n\n";
    PROJECTS.forEach((project) => {
      text += `${project.title} - ${project.subtitle}\n`;
      text += `Tech: ${project.tech.join(", ")}\n`;
      project.bullets.forEach((bullet) => {
        text += `• ${bullet}\n`;
      });
      text += "\n";
    });

    return text;
  };

  const skills = {
    Languages: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
    Frameworks: ["Next.js", "React", "Node.js", "Express", "FastAPI", "Tailwind CSS"],
    Tools: ["Git", "PostgreSQL", "Supabase", "Vercel", "scikit-learn", "Pandas"],
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <Section>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <PageHeader title="Resume" />
          <div className="flex gap-3">
            <a
              href={RESUME.pdfUrl}
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a2332] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
            <button
              onClick={copyAsText}
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy as Text
                </>
              )}
            </button>
          </div>
        </div>
      </Section>

      <div className="space-y-8">
        {/* Header */}
        <Card>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {SITE.name}
          </h1>
          <p className="text-lg text-gray-600 mb-4">{SITE.title}</p>
          <div className="text-sm text-gray-600 space-y-1">
            <p>{SITE.location}</p>
            <p>Email: {SITE.email}</p>
            <div className="flex flex-wrap gap-2">
              {SITE.socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1a2332] transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </Card>

        {/* Education */}
        <Card>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Bachelor of Engineering, Software Engineering
            </h3>
            <p className="text-sm text-gray-600">
              McMaster University • Expected Graduation: [Year]
            </p>
          </div>
        </Card>

        {/* Skills */}
        <Card>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Skills
          </h2>
          <div className="space-y-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Experience */}
        <Card>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="space-y-6">
            {EXPERIENCE.map((exp) => (
              <div key={exp.id}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-gray-700">
                      {exp.org}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">
                    {exp.dates}
                  </p>
                </div>
                <ul className="space-y-1">
                  {exp.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-700 flex items-start"
                    >
                      <span className="text-[#1a2332] mr-2">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        {/* Projects */}
        <Card>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <div className="space-y-6">
            {PROJECTS.map((project) => (
              <div key={project.id}>
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {project.subtitle}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
                <ul className="space-y-1">
                  {project.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-700 flex items-start"
                    >
                      <span className="text-[#1a2332] mr-2">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

