import { ProjectItem } from "@/components/ui/parallax-scroll";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectsGridView({
  projects
}: {
  projects: ProjectItem[];
}) {
  return (
    <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <div className="group relative overflow-hidden bg-gray-100">
      <Link href={project.link} className="block cursor-pointer">
        <div className="relative h-auto w-full">
          <img
            src={project.src}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            alt={project.name}
          />
          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex items-center justify-between text-white">
              <h3 className="text-xl font-medium">{project.name}</h3>
              <div className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="size-6" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
