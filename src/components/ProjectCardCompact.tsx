"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card } from "./Card";
import { Tag } from "./Tag";
import type { Project } from "@/data";

interface ProjectCardCompactProps {
  project: Project;
  onClick?: () => void;
}

export function ProjectCardCompact({ project, onClick }: ProjectCardCompactProps) {
  const content = (
    <Card className="flex flex-col h-full transition-all cursor-pointer group">
        {project.image && (
          <div className="relative w-full h-32 mb-3 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 group-hover:border-gray-300 transition-colors">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        )}
        <div className="flex-1 flex flex-col">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#1a2332] transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              {project.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            {project.tech.slice(0, 4).map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
            {project.tech.length > 4 && (
              <Tag>+{project.tech.length - 4} more</Tag>
            )}
          </div>

          <div className="mt-auto pt-3 border-t border-gray-200 flex items-center text-sm text-[#1a2332] group-hover:underline transition-colors">
            View details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="text-left w-full">
        {content}
      </button>
    );
  }

  return <Link href="/projects">{content}</Link>;
}

