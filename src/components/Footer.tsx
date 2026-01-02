import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import { SITE } from "@/data";

export function Footer() {
  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "github":
        return <Github className="h-4 w-4" />;
      case "linkedin":
        return <Linkedin className="h-4 w-4" />;
      case "email":
        return <Mail className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${SITE.email}`}
              className="text-gray-600 hover:text-[#1a2332] transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            {SITE.socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#1a2332] transition-colors"
                aria-label={social.label}
              >
                {getIcon(social.label) || <span className="text-sm">{social.label}</span>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

