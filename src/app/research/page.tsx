import { researchAreas } from "@/data/research";
import ResearchCard from "@/components/ResearchCard";

export default function Research() {
  return (
    <main className="
      pt-32
      px-6
      max-w-6xl
      mx-auto
    ">


      <h1 className="
        text-5xl
        font-bold
      ">
        Research
      </h1>



      <p className="
        mt-6
        text-lg
        text-gray-600
        dark:text-gray-300
      ">
        My research examines the relationship between technology,
        communication, and society, with a focus on how digital platforms
        influence online behavior, information environments, and social
        interactions.
      </p>




      <section className="mt-14">


        <h2 className="
          text-3xl
          font-bold
        ">
          Research Themes
        </h2>



        <div className="
          mt-10
          grid
          md:grid-cols-2
          gap-8
        ">


          {researchAreas.map((area) => (

            <ResearchCard
              key={area.title}
              {...area}
            />

          ))}


        </div>


      </section>





      <section className="mt-16">


        <h2 className="
          text-3xl
          font-bold
        ">
          Research Approaches
        </h2>



        <p className="
          mt-6
          text-lg
          text-gray-600
          dark:text-gray-300
        ">
          My work uses interdisciplinary approaches from social informatics,
          communication studies, and computational social science. I apply
          quantitative methods, content analysis, bibliometric analysis,
          and digital trace approaches to understand technology-mediated
          interactions.
        </p>


      </section>





      <section className="mt-16">


        <h2 className="
          text-3xl
          font-bold
        ">
          Current Research Directions
        </h2>



        <ul className="
          mt-6
          space-y-3
          list-disc
          pl-6
          text-lg
          text-gray-600
          dark:text-gray-300
        ">

          <li>
            Online trolling, harassment, and toxic communication patterns
            across digital platforms.
          </li>


          <li>
            The social implications of artificial intelligence and emerging
            technologies.
          </li>


          <li>
            Misinformation, information behavior, and trust in digital spaces.
          </li>


          <li>
            How platform features and social contexts shape online
            interactions.
          </li>


        </ul>


      </section>



    </main>
  );
}