import { teaching } from "@/data/teaching";
import TeachingCard from "@/components/TeachingCard";

export default function Teaching() {
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
        Teaching
      </h1>




      <p className="
        mt-6
        text-lg
        text-gray-600
        dark:text-gray-300
      ">
        My teaching interests focus on digital technologies, information
        systems, library marketing, library technical services, artificial
        intelligence and libraries, collection development, social
        informatics, and research methods. I aim to help students understand
        the relationship between technology, society, information practices,
        and human behavior.
      </p>





      <section className="mt-14">


        <h2 className="
          text-3xl
          font-bold
        ">
          Teaching Areas
        </h2>



        <div className="
          mt-10
          grid
          md:grid-cols-2
          gap-8
        ">


          {teaching.map((item) => (

            <TeachingCard
              key={item.title}
              {...item}
            />

          ))}


        </div>


      </section>





      <section className="mt-16">


        <h2 className="
          text-3xl
          font-bold
        ">
          Teaching Philosophy
        </h2>



        <p className="
          mt-6
          text-lg
          text-gray-600
          dark:text-gray-300
        ">
          My teaching philosophy emphasizes active learning, critical
          thinking, and connecting theoretical concepts with practical
          applications. I encourage students to explore how digital
          technologies, information systems, and emerging innovations shape
          communication, knowledge creation, and society.
        </p>


      </section>





      <section className="mt-16">


        <h2 className="
          text-3xl
          font-bold
        ">
          Instructional Interests
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
            Artificial intelligence and libraries
          </li>


          <li>
            Digital technologies and information systems
          </li>


          <li>
            Library marketing and user engagement
          </li>


          <li>
            Library technical services and collection development
          </li>


          <li>
            Social informatics and digital society
          </li>


          <li>
            Research methods and data analysis
          </li>


        </ul>


      </section>



    </main>
  );
}