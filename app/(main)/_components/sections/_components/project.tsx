import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { ProjectProps } from "@/lib/types/project";

const Project = ({
  title,
  thumbnailUrl = `/projects/${title
    .toLowerCase()
    .replace(/[^a-z0-9 ]/gi, "")
    .replaceAll(" ", "-")}.webp`,
  date,
  description,
  tags,
  githubLink,
  websiteLink,
  itchLink,
  steamLink,
}: ProjectProps) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 text-white/80 pb-4">
        <Image
          src={thumbnailUrl}
          unoptimized
          width={1920}
          height={1080}
          alt={`The thumbnail for a project called "${title}"`}
          className="w-64 sm:w-48 aspect-16/9 h-full rounded-lg"
        />
        <div className="flex flex-col">
          <p className="text-white/90">
            <span className="font-bold text-lg">{title}</span> ({date})
          </p>
          <p>{description}</p>
          <div className="flex flex-col gap-2 lg:flex-row justify-between">
            {tags && (
              <ul className="flex flex-row flex-wrap gap-2 mt-2 text-xs text-white/60">
                {tags.map((filter) => (
                  <li key={filter} className="whitespace-nowrap">
                    [ {filter} ]
                  </li>
                ))}
              </ul>
            )}
            {(githubLink || websiteLink || itchLink || steamLink) && (
              <div className="flex flex-row gap-2">
                {githubLink && (
                  <Link
                    href={githubLink}
                    target="_blank"
                    className="frosted-glass-button p-1 rounded-full text-white hover:scale-110 transition-all duration-200"
                  >
                    <Image
                      src="/icons/github.svg"
                      alt="GitHub Logo"
                      className="w-4 h-4 select-none"
                      unoptimized
                      width={1}
                      height={1}
                      draggable={false}
                    />
                  </Link>
                )}
                {websiteLink && (
                  <Link
                    href={websiteLink}
                    target="_blank"
                    className="frosted-glass-button p-1 rounded-full text-white hover:scale-110 transition-all duration-200"
                  >
                    <Globe className="w-4 h-4" aria-label="Website Icon" />
                  </Link>
                )}
                {itchLink && (
                  <Link
                    href={itchLink}
                    target="_blank"
                    className="frosted-glass-button p-1 rounded-full text-white hover:scale-110 transition-all duration-200"
                  >
                    <Image
                      src="/icons/itch.svg"
                      alt="Itch.io Logo"
                      className="w-4 h-4 select-none"
                      unoptimized
                      width={1}
                      height={1}
                      draggable={false}
                    />
                  </Link>
                )}
                {steamLink && (
                  <Link
                    href={steamLink}
                    target="_blank"
                    className="frosted-glass-button p-1 rounded-full text-white hover:scale-110 transition-all duration-200"
                  >
                    <Image
                      src="/icons/steam.svg"
                      alt="Steam Logo"
                      className="w-4 h-4 select-none"
                      unoptimized
                      width={1}
                      height={1}
                      draggable={false}
                    />
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Project;
