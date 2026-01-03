"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Experience } from "@/data";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col lg:flex-row">
        {experience.logo && (
          <div className="relative w-full lg:w-1/2 h-80 sm:h-96 lg:h-auto lg:min-h-[450px] flex-shrink-0 overflow-hidden bg-gray-100">
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
        <div className="flex-1 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-white">
          <div>
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                {experience.role}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <p className="text-lg sm:text-xl font-semibold text-gray-800">
                  {experience.org}
                </p>
                <div className="text-base text-gray-600 font-medium">
                  {experience.dates}
                  {experience.location && (
                    <span className="block sm:inline sm:ml-2">• {experience.location}</span>
                  )}
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {experience.bullets.map((bullet, idx) => (
                <li key={idx} className="text-base text-gray-700 leading-relaxed flex items-start">
                  <span className="text-[#1a2332] mr-3 mt-1.5 flex-shrink-0 font-bold">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {experience.links && experience.links.length > 0 && (
            <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
              {experience.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-[#1a2332] hover:text-[#2a3a4a] transition-colors flex items-center gap-2 font-medium"
                >
                  <ExternalLink className="h-4 w-4" />
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

