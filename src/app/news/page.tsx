export default function News() {
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
        News & Recognition
      </h1>



      <p className="
        mt-6
        text-lg
        text-gray-600
        dark:text-gray-300
      ">
        Updates on research activities, publications, academic events,
        professional recognition, and scholarly contributions.
      </p>





      <div className="
        mt-12
        space-y-8
      ">



        {/* Publication Update */}

        <article className="
          rounded-3xl
          border
          p-8
          hover:shadow-xl
          transition
        ">

          <p className="
            text-sm
            text-blue-600
          ">
            2026
          </p>


          <h2 className="
            mt-3
            text-2xl
            font-semibold
          ">
            Publication on Political Gendertrolling
          </h2>


          <p className="
            mt-4
            text-gray-600
            dark:text-gray-300
          ">
            Research on political gendertrolling examines the relationship
            between gender, political communication, online harassment,
            and digital platform interactions.
          </p>


        </article>





        {/* Research Publication */}

        <article className="
          rounded-3xl
          border
          p-8
          hover:shadow-xl
          transition
        ">

          <p className="
            text-sm
            text-blue-600
          ">
            2025
          </p>


          <h2 className="
            mt-3
            text-2xl
            font-semibold
          ">
            Research on TikTok and Reciprocal Trolling
          </h2>


          <p className="
            mt-4
            text-gray-600
            dark:text-gray-300
          ">
            Research examining TikTok features, collapsing contexts, and
            reciprocal trolling was published in Information, Communication
            & Society.
          </p>


        </article>






        {/* Recognition 1 */}

        <article className="
          rounded-3xl
          border
          p-8
          hover:shadow-xl
          transition
        ">

          <p className="
            text-sm
            text-blue-600
          ">
            Recognition
          </p>


          <h2 className="
            mt-3
            text-2xl
            font-semibold
          ">
            Featured in Indiana University Conference on Africa Updates
          </h2>


          <p className="
            mt-4
            text-gray-600
            dark:text-gray-300
          ">
            Featured in Indiana University Libraries and Information Science
            updates highlighting participation and contributions related to
            the Indiana University Conference on Africa.
          </p>



          <a
            href="https://blogs.iu.edu/ilsnewsletter/ils-updates/the-indiana-university-conference-on-africa-gordon-amidu/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              mt-5
              px-5
              py-2
              rounded-full
              bg-blue-600
              text-white
            "
          >
            View Feature
          </a>


        </article>






        {/* Recognition 2 */}

        <article className="
          rounded-3xl
          border
          p-8
          hover:shadow-xl
          transition
        ">

          <p className="
            text-sm
            text-blue-600
          ">
            Academic Event
          </p>


          <h2 className="
            mt-3
            text-2xl
            font-semibold
          ">
            Conference Video Feature
          </h2>


          <p className="
            mt-4
            text-gray-600
            dark:text-gray-300
          ">
            Video coverage highlighting academic engagement and conference
            participation.
          </p>



          <a
            href="https://www.youtube.com/watch?v=CdIisExDirQ"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              mt-5
              px-5
              py-2
              rounded-full
              bg-blue-600
              text-white
            "
          >
            Watch Video
          </a>


        </article>







        {/* Recognition 3 */}

        <article className="
          rounded-3xl
          border
          p-8
          hover:shadow-xl
          transition
        ">

          <p className="
            text-sm
            text-blue-600
          ">
            Social Media Recognition
          </p>


          <h2 className="
            mt-3
            text-2xl
            font-semibold
          ">
            Featured Academic Recognition Post
          </h2>


          <p className="
            mt-4
            text-gray-600
            dark:text-gray-300
          ">
            Recognition and highlights shared through social media platforms.
          </p>



          <a
            href="https://www.instagram.com/p/DRBPO0nETyE/?img_index=3"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              mt-5
              px-5
              py-2
              rounded-full
              bg-blue-600
              text-white
            "
          >
            View Post
          </a>


        </article>



      </div>



    </main>
  );
}