import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section className="pt-32 px-6 max-w-6xl mx-auto">

      <h1 className="text-5xl font-bold">
        Projects
      </h1>

      <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
        Selected research projects and academic initiatives.
      </p>


      <div className="mt-10 grid md:grid-cols-2 gap-8">

        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}

      </div>

    </section>
  );
}