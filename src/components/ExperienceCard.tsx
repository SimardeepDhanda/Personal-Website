"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Card } from "./Card";
import { Tag } from "./Tag";
import type { Experience } from "@/data";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card>
      <div className="flex gap-4">
        {experience.logo && (
          <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={experience.logo}
              alt={experience.org}
              fill
              className="object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        )}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {experience.role}
              </h3>
              <p className="text-sm font-medium text-gray-700">
                {experience.org}
              </p>
            </div>
            <div className="text-sm text-gray-600">
              {experience.dates}
              {experience.location && (
                <span className="block sm:inline sm:ml-2">• {experience.location}</span>
              )}
            </div>
          </div>

          <ul className="space-y-2 mb-4">
            {experience.bullets.map((bullet, idx) => (
              <li key={idx} className="text-sm text-gray-700 flex items-start">
                <span className="text-[#1a2332] mr-2">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {experience.links && experience.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {experience.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-[#1a2332] transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

