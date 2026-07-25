type ProjectCardProps = {
  title: string;
  description: string;
};

export default function ProjectCard({
  title,
  description,
}: ProjectCardProps) {
  return (
    <article className="border rounded-2xl p-6 hover:shadow-lg transition">

      <h2 className="text-2xl font-semibold">
        {title}
      </h2>

      <p className="mt-4 text-gray-600 dark:text-gray-300">
        {description}
      </p>

    </article>
  );
}