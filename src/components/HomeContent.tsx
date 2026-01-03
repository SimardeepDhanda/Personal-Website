"use client";

import Link from "next/link";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import { Section } from "@/components/Section";
import { Hero } from "@/components/Hero";
import { ScrollSection } from "@/components/ScrollSection";
import { ProjectCardCompact } from "@/components/ProjectCardCompact";
import { ExperienceCardCompact } from "@/components/ExperienceCardCompact";
import { Tag } from "@/components/Tag";
import { StickyNav } from "@/components/StickyNav";
import { SITE, PROJECTS, EXPERIENCE, SKILLS } from "@/data";

export function HomeContent() {
  const featuredProjects = PROJECTS.slice(0, 3);
  const featuredExperience = EXPERIENCE.slice(0, 2);

  return (
    <>
      <StickyNav />
      <Hero />

      {/* About Section - Navy */}
      <ScrollSection id="about" colorVariant="about">
        <Section>
          <h2 className="text-4xl font-bold text-white mb-8">
            About
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-200 leading-relaxed mb-4 text-lg">
              I'm a software engineering student focused on building clean, reliable software and steadily growing as a developer. I enjoy working on projects that turn ideas into real products, whether that's building full stack applications, improving system performance, or refining user experiences. I'm always interested in learning new tools and technologies and applying them in practical, thoughtful ways.
            </p>
            <p className="text-gray-200 leading-relaxed text-lg">
              Outside of software, I train Brazilian jiu jitsu and follow the UFC closely. I enjoy the sport both for the competition and the discipline behind it. I'm also an avid reader, especially fantasy and science fiction, and I'm currently working through the Red Rising series by Pierce Brown. When I want to relax, I usually reach for a video game or a book.
            </p>
          </div>
        </Section>
      </ScrollSection>

      {/* Projects Section - White */}
      <ScrollSection id="projects" colorVariant="projects">
        <Section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Projects
            </h2>
            <Link
              href="/projects"
              className="text-sm text-[#1a2332] hover:underline font-medium flex items-center gap-1"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCardCompact
                  key={project.id}
                  project={project}
                  onClick={() => {
                    window.location.href = "/projects";
                  }}
                />
              ))}
            </div>
          </Section>
        </ScrollSection>

      {/* Experience Section - Navy */}
      <ScrollSection id="experience" colorVariant="experience">
        <Section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold text-white">
              Experience
            </h2>
            <Link
              href="/experience"
              className="text-sm text-white hover:underline font-medium flex items-center gap-1"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
            <div className="space-y-4">
              {featuredExperience.map((exp) => (
                <ExperienceCardCompact
                  key={exp.id}
                  experience={exp}
                  onClick={() => {
                    window.location.href = "/experience";
                  }}
                />
              ))}
            </div>
          </Section>
        </ScrollSection>

      {/* Skills Section - White */}
      <ScrollSection id="skills" colorVariant="skills">
        <Section>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Skills
          </h2>
          <div className="space-y-8">
            {Object.entries(SKILLS).map(([category, items], idx) => (
              <div key={category} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </ScrollSection>

      {/* Contact Section - Navy */}
      <ScrollSection id="contact" colorVariant="contact">
        <Section>
          <h2 className="text-4xl font-bold text-white mb-8">
            Contact
          </h2>
          <div className="max-w-md">
            <p className="text-lg text-gray-200 mb-6">
              Feel free to reach out if you'd like to connect or collaborate.
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-gray-200 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>{SITE.email}</span>
              </a>
              <div className="flex items-center gap-4">
                {SITE.socials.map((social) => {
                  const Icon = social.label === "GitHub" ? Github : Linkedin;
                  return (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                      <span>{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Section>
      </ScrollSection>
    </>
  );
}

