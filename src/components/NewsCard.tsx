type NewsCardProps = {
  title: string;
  date: string;
  description: string;
};

export default function NewsCard({
  title,
  date,
  description,
}: NewsCardProps) {
  return (
    <article className="border rounded-2xl p-6 hover:shadow-lg transition">

      <p className="text-sm text-gray-500">
        {date}
      </p>

      <h2 className="text-2xl font-semibold mt-2">
        {title}
      </h2>

      <p className="mt-4 text-gray-600 dark:text-gray-300">
        {description}
      </p>

    </article>
  );
}