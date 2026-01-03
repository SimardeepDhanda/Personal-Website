"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card } from "./Card";
import type { Experience } from "@/data";

interface ExperienceCardCompactProps {
  experience: Experience;
  onClick?: () => void;
}

export function ExperienceCardCompact({ experience, onClick }: ExperienceCardCompactProps) {
  const content = (
    <Card className="hover:shadow-md transition-all cursor-pointer group bg-white/10 border-white/20">
        <div className="flex gap-4">
          {experience.logo && (
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-white border border-white/30">
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
                <h3 className="text-lg font-semibold text-white group-hover:text-gray-200 transition-colors">
                  {experience.role}
                </h3>
                <p className="text-sm font-medium text-gray-200">
                  {experience.org}
                </p>
              </div>
              <div className="text-sm text-gray-300">
                {experience.dates}
                {experience.location && (
                  <span className="block sm:inline sm:ml-2">• {experience.location}</span>
                )}
              </div>
            </div>
            <div className="flex items-center text-sm text-white group-hover:underline mt-2 transition-colors">
              View details
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
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

  return <Link href="/experience">{content}</Link>;
}

