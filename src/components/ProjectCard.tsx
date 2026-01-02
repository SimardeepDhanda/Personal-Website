"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "./Card";
import { Tag } from "./Tag";
import type { Project } from "@/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="flex flex-col h-full">
      {project.image && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
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
      <div className="flex-1 flex flex-col">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            {project.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        {project.bullets.length > 0 && (
          <div className="mb-4">
            <ul className="space-y-2">
              {project.bullets.slice(0, expanded ? project.bullets.length : 2).map((bullet, idx) => (
                <li key={idx} className="text-sm text-gray-700 flex items-start">
                  <span className="text-[#1a2332] mr-2">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            {project.bullets.length > 2 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-2 text-sm text-[#1a2332] hover:underline flex items-center gap-1"
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
          <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-200">
            {project.links.map((link) => {
              const isGithub = link.label.toLowerCase() === "github";
              const Icon = isGithub ? Github : ExternalLink;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-[#1a2332] transition-colors flex items-center gap-1"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
}

