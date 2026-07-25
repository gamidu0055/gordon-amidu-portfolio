type ResearchHighlightProps = {
  title: string;
  description: string;
};

export default function ResearchHighlight({
  title,
  description,
}: ResearchHighlightProps) {
  return (
    <div className="rounded-3xl border p-6 hover:shadow-xl transition">

      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 dark:text-gray-300">
        {description}
      </p>

    </div>
  );
}