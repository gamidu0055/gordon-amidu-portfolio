export default function CV() {
  return (
    <section className="pt-32 px-6 max-w-5xl mx-auto">

      <h1 className="text-5xl font-bold">
        Curriculum Vitae
      </h1>

      <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
        Academic profile, research experience, publications,
        teaching activities, and professional contributions.
      </p>


      <div className="mt-8">

        <a
          href="/documents/Gordon-Amidu-CV.pdf"
          target="_blank"
          className="inline-block px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black"
        >
          Download CV
        </a>

      </div>


      <div className="mt-12 space-y-10">


        <div>
          <h2 className="text-3xl font-semibold">
            Research Interests
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Social informatics, online communities, artificial
            intelligence, misinformation, digital communication,
            and online behavior.
          </p>
        </div>


        <div>
          <h2 className="text-3xl font-semibold">
            Education
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Academic training and research experience in information
            science, communication, and technology studies.
          </p>
        </div>


        <div>
          <h2 className="text-3xl font-semibold">
            Research Experience
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Research involving digital platforms, artificial
            intelligence systems, online interactions, and
            computational social science methods.
          </p>
        </div>


      </div>

    </section>
  );
}