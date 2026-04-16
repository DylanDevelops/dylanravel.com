import Image from "next/image";
import Link from "next/link";
import { GlobeIcon, StarIcon } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { useGitHubStars } from "@/lib/hooks/use-github-stars";
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
  showGitHubStars = false,
  websiteLink,
  itchLink,
  steamLink,
}: ProjectProps) => {
  const { stars, loading } = useGitHubStars(githubLink, showGitHubStars);
  return (
    <>
      <div className="flex flex-col gap-4 pb-4 text-white/80 sm:flex-row">
        <Image
          src={thumbnailUrl}
          unoptimized
          width={1920}
          height={1080}
          alt={`The thumbnail for a project called "${title}"`}
          className="aspect-16/9 h-full w-full rounded-lg sm:w-48"
        />
        <div className="flex flex-col">
          <p className="text-white/90">
            <span className="text-lg font-bold">{title}</span> ({date})
          </p>
          <p>{description}</p>
          {showGitHubStars && stars !== null && (
            <div className="mt-1 flex flex-row items-center gap-1 text-xs text-white/50">
              <StarIcon className="h-3 w-3 text-white/50" />
              <span>{stars.toLocaleString()}+ stars on GitHub</span>
            </div>
          )}
          <div className="flex flex-col justify-between gap-2 lg:flex-row">
            {tags && (
              <ul className="mt-2 flex flex-row flex-wrap gap-2 text-xs text-white/60">
                {tags.map((filter) => (
                  <li key={filter} className="whitespace-nowrap">
                    [ {filter} ]
                  </li>
                ))}
              </ul>
            )}
            {(githubLink || websiteLink || itchLink || steamLink) && (
              <div className="flex flex-row items-center gap-2">
                {githubLink && (
                  <Link
                    href={githubLink}
                    target="_blank"
                    className="frosted-glass-button rounded-full p-1 text-white transition-all duration-200 hover:scale-110"
                  >
                    <Image
                      src="/icons/github.svg"
                      alt="GitHub Logo"
                      className="h-4 w-4 select-none"
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
                    className="frosted-glass-button rounded-full p-1 text-white transition-all duration-200 hover:scale-110"
                  >
                    <GlobeIcon className="h-4 w-4" aria-label="Website Icon" />
                  </Link>
                )}
                {itchLink && (
                  <Link
                    href={itchLink}
                    target="_blank"
                    className="frosted-glass-button rounded-full p-1 text-white transition-all duration-200 hover:scale-110"
                  >
                    <Image
                      src="/icons/itch.svg"
                      alt="Itch.io Logo"
                      className="h-4 w-4 select-none"
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
                    className="frosted-glass-button rounded-full p-1 text-white transition-all duration-200 hover:scale-110"
                  >
                    <Image
                      src="/icons/steam.svg"
                      alt="Steam Logo"
                      className="h-4 w-4 select-none"
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
