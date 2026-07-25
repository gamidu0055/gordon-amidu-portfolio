export default function Contact() {
  return (
    <section className="
      pt-32
      px-6
      max-w-5xl
      mx-auto
    ">


      <h1 className="
        text-5xl
        font-bold
      ">
        Contact
      </h1>



      <p className="
        mt-6
        text-lg
        text-gray-600
        dark:text-gray-300
      ">
        I welcome opportunities for research collaboration,
        academic discussion, speaking engagements, and knowledge exchange.
      </p>





      <div className="
        mt-10
        space-y-8
      ">





        <div>

          <h2 className="
            text-2xl
            font-semibold
          ">
            Email
          </h2>


          <p className="
            mt-2
            text-gray-600
            dark:text-gray-300
          ">

            <a
              href="mailto:mramidu@gmail.com"
              className="hover:underline text-blue-600"
            >
              mramidu@gmail.com
            </a>

          </p>


        </div>







        <div>

          <h2 className="
            text-2xl
            font-semibold
          ">
            Academic Profiles
          </h2>




          <ul className="
            mt-3
            space-y-3
            text-blue-600
          ">



            <li>

              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Google Scholar: Gordon Amidu
              </a>

            </li>





            <li>

              ORCID:{" "}

              <a
                href="https://orcid.org/0000-0002-3136-4806"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                0000-0002-3136-4806
              </a>

            </li>






            <li>

              LinkedIn:{" "}

              <a
                href="https://linkedin.com/in/gordon-a-45502317a"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Gordon Amidu
              </a>

            </li>




          </ul>


        </div>







        <div>

          <h2 className="
            text-2xl
            font-semibold
          ">
            Research Interests
          </h2>


          <p className="
            mt-3
            text-gray-600
            dark:text-gray-300
          ">
            Artificial intelligence, social informatics, online communities,
            digital communication, misinformation, online trolling, and
            technology-mediated interactions.
          </p>


        </div>





      </div>


    </section>
  );
}