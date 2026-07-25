type PublicationPreviewProps = {
  title: string;
  year: string;
  description: string;
};

export default function PublicationPreview({
  title,
  year,
  description,
}: PublicationPreviewProps) {
  return (
    <div className="rounded-3xl border p-6 hover:shadow-xl transition">

      <p className="text-sm text-gray-500">
        {year}
      </p>

      <h3 className="mt-2 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 dark:text-gray-300">
        {description}
      </p>

    </div>
  );
}