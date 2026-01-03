"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { Tag } from "./Tag";
import type { Project } from "@/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
      <div className="p-8 sm:p-10 lg:p-12">
        {/* Top section: Image beside Title/Subtitle/Tech */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mb-8">
          {project.image && (
            <div className="relative w-full sm:w-48 md:w-56 lg:w-64 h-48 sm:h-48 md:h-56 lg:h-64 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                onError={(e) => {
                  // Hide image on error (placeholder not found)
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 leading-tight">
              {project.title}
            </h3>
            <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              {project.subtitle}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section: Explanation spanning full width */}
        <div className="space-y-6">
          {project.bullets.length > 0 && (
            <div>
              <ul className="space-y-3">
                {project.bullets.slice(0, expanded ? project.bullets.length : 2).map((bullet, idx) => (
                  <li key={idx} className="text-base text-gray-700 leading-relaxed flex items-start">
                    <span className="text-[#1a2332] mr-3 mt-1.5 flex-shrink-0 font-bold">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              {project.bullets.length > 2 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-4 text-base text-[#1a2332] hover:underline flex items-center gap-1 font-medium"
                >
                  {expanded ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      Show less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      Show more
                    </>
                  )}
                </button>
              )}
            </div>
          )}

          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
              {project.links.map((link) => {
                const isGithub = link.label.toLowerCase() === "github";
                const Icon = isGithub ? Github : ExternalLink;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-[#1a2332] hover:text-[#2a3a4a] transition-colors flex items-center gap-2 font-medium"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

