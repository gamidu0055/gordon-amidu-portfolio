export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-gray-600 dark:text-gray-400">

        <p>
          © {new Date().getFullYear()} Gordon Amidu. All rights reserved.
        </p>

        <p className="mt-2">
          Academic Portfolio | Research in Social Informatics, AI, and Digital Communication
        </p>

      </div>
    </footer>
  );
}