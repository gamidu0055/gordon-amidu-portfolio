import Image from "next/image";
import ResearchHighlight from "@/components/ResearchHighlight";
import PublicationPreview from "@/components/PublicationPreview";
import AnimatedSection from "@/components/AnimatedSection";

const researchAreas = [
  {
    title: "Social Informatics",
    description:
      "Examining how people, information technologies, and social systems interact in digital environments.",
  },

  {
    title: "Artificial Intelligence",
    description:
      "Investigating AI systems, misinformation, and the social implications of emerging technologies.",
  },

  {
    title: "Online Communities",
    description:
      "Studying online behavior, trolling, harassment, and digital communication patterns.",
  },
];


const publications = [
  {
    title:
      "The roles of collapsing contexts and TikTok’s features in reciprocal trolling",
    year: "2025",
    description:
      "Fichman, P., & Amidu, G. (2025). Information, Communication & Society, 28(8), 1442–1462. DOI: 10.1080/1369118X.2024.2391820",
  },

  {
    title:
      "Political Gendertrolling",
    year: "2026",
    description:
      "Fichman, P., & Amidu, G. (2026). Social Science Computer Review, 44(4), 678–696. DOI: 10.1177/08944393251343930",
  },
];


export default function Home() {
  return (
    <main>


      {/* Hero Section */}

      <AnimatedSection>

        <section className="
          min-h-screen
          flex
          items-center
          justify-center
          px-6
        ">

          <div className="
            max-w-5xl
            text-center
          ">


            {/* Profile Image */}

            <div className="flex justify-center mb-8">

              <Image
                src="/images/gordon-amidu.jpg"
                alt="Gordon Amidu"
                width={220}
                height={220}
                className="
                  rounded-full
                  object-cover
                  border-4
                  shadow-xl
                "
                priority
              />

            </div>



            <h1 className="
              text-6xl
              md:text-8xl
              font-bold
            ">
              Gordon Amidu
            </h1>



            <p className="
              mt-8
              text-xl
              text-gray-600
              dark:text-gray-300
            ">
              Research Scholar exploring artificial intelligence,
              online communities, digital communication, and social informatics.
            </p>



            <p className="
              mt-5
              text-lg
              text-gray-500
              dark:text-gray-400
            ">
              Research interests: Online trolling, digital communication,
              misinformation, AI and society, and social informatics.
            </p>



            {/* Academic Profile Buttons */}

            <div className="
              mt-8
              flex
              flex-wrap
              justify-center
              gap-4
            ">


              <a
                href="mailto:mramidu@gmail.com"
                className="
                  px-5
                  py-2
                  rounded-full
                  border
                  hover:bg-gray-100
                  dark:hover:bg-gray-800
                  transition
                "
              >
                Email
              </a>



              <a
                href="https://orcid.org/0000-0002-3136-4806"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-5
                  py-2
                  rounded-full
                  border
                  hover:bg-gray-100
                  dark:hover:bg-gray-800
                  transition
                "
              >
                ORCID
              </a>



              <a
                href="https://linkedin.com/in/gordon-a-45502317a"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-5
                  py-2
                  rounded-full
                  border
                  hover:bg-gray-100
                  dark:hover:bg-gray-800
                  transition
                "
              >
                LinkedIn
              </a>


            </div>


          </div>

        </section>

      </AnimatedSection>





      {/* Research Areas */}

      <AnimatedSection>

        <section className="
          px-6
          max-w-6xl
          mx-auto
          py-20
        ">

          <h2 className="text-4xl font-bold">
            Research Areas
          </h2>


          <div className="
            mt-10
            grid
            md:grid-cols-3
            gap-8
          ">

            {researchAreas.map((item) => (

              <ResearchHighlight
                key={item.title}
                {...item}
              />

            ))}

          </div>

        </section>

      </AnimatedSection>





      {/* Featured Publications */}

      <AnimatedSection>

        <section className="
          px-6
          max-w-6xl
          mx-auto
          py-20
        ">

          <h2 className="text-4xl font-bold">
            Featured Publications
          </h2>


          <div className="
            mt-10
            grid
            md:grid-cols-2
            gap-8
          ">

            {publications.map((item) => (

              <PublicationPreview
                key={item.title}
                {...item}
              />

            ))}

          </div>

        </section>

      </AnimatedSection>





      {/* Contact Section */}

      <AnimatedSection>

        <section className="
          text-center
          px-6
          py-20
        ">

          <h2 className="text-4xl font-bold">
            Interested in collaboration?
          </h2>


          <p className="
            mt-4
            text-gray-600
            dark:text-gray-300
          ">
            I welcome opportunities for research collaboration,
            academic discussion, and knowledge exchange.
          </p>


          <a
            href="/contact"
            className="
              inline-block
              mt-8
              px-8
              py-3
              rounded-full
              bg-blue-600
              text-white
            "
          >
            Contact Me
          </a>


        </section>

      </AnimatedSection>


    </main>
  );
}