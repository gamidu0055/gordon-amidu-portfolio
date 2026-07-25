import { publications } from "@/data/publications";

export default function Publications() {
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
        Publications
      </h1>



      <p className="
        mt-6
        text-lg
        text-gray-600
        dark:text-gray-300
      ">
        Selected peer-reviewed publications and scholarly contributions
        in digital communication, online communities, artificial intelligence,
        misinformation, and social informatics.
      </p>




      <div className="
        mt-12
        space-y-10
      ">


        {publications.map((publication) => (

          <article
            key={publication.title}
            className="
              rounded-3xl
              border
              p-8
              hover:shadow-xl
              transition
              bg-white
              dark:bg-black
            "
          >


            <div className="
              flex
              items-center
              justify-between
              flex-wrap
              gap-4
            ">


              <span className="
                text-sm
                font-semibold
                text-blue-600
              ">
                {publication.category}
              </span>



              <span className="
                text-sm
                text-gray-500
              ">
                {publication.year}
              </span>


            </div>




            <h2 className="
              mt-5
              text-2xl
              font-semibold
            ">
              {publication.title}
            </h2>




            <p className="
              mt-4
              text-gray-700
              dark:text-gray-300
            ">
              {publication.authors}
            </p>




            <p className="
              mt-3
              italic
              text-gray-600
              dark:text-gray-400
            ">
              {publication.journal}, {publication.volume}, {publication.pages}.
            </p>




            <a
              href={publication.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                mt-6
                px-6
                py-3
                rounded-full
                bg-blue-600
                text-white
                hover:bg-blue-700
                transition
              "
            >
              View DOI
            </a>



          </article>

        ))}


      </div>


    </main>
  );
}