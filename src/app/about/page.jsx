import AboutCard from "@/components/AboutCard";
import AboutCard2 from "@/components/AboutCard2";
import Emily from "/public/headshots/emily_headshot.jpg";
import Ethan from "/public/headshots/ethan_headshot.jpg";
import Ashley from "/public/headshots/ashley_headshot.jpg";
import Keely from "/public/headshots/keely_headshot.png";
import Sami from "/public/headshots/anon_headshot.jpg";

export default function About() {
  return (
    <main className="flex max-w-screen-xl flex-col justify-center items-center px-4">
      <div className="about-content my-8">
        <h1 className="text-2xl md:text-4xl text-center my-4 text-white">
          Check out the project GitHub{" "}
          <a
            className="text-white font-bold"
            href="https://github.com/emilymclean94/stream_verse"
          >
            HERE
          </a>
        </h1>

        <h2 className="text-xl md:text-2xl text-[#b279d8f5] text-center my-4">
          Get to know the team:
        </h2>
        <div className="flex flex-wrap flex-row justify-center">
          <AboutCard
            headshot={Emily}
            name="Emily McLean"
            subtitle="Lead Developer"
            ghLink="https://github.com/emilymclean94"
            liLink="https://www.linkedin.com/in/emilyamclean/"
            bio="Full stack developer and lover of books, video games, and my dogs."
          />
          <AboutCard
            headshot={Ashley}
            name="Ashley Giraldo"
            subtitle="Lead Developer"
            ghLink="hhttps://github.com/Ashleyg5"
            liLink="https://www.linkedin.com/in/ashley-giraldo/"
            bio="My bio is coming really, really soon...Trust me."
          />
          <AboutCard
            headshot={Ethan}
            name="Ethan Garrison"
            subtitle="Lead Developer"
            ghLink="https://github.com/EGARRISXN"
            liLink="https://www.linkedin.com/in/ethan-garrison-261ba4a2/"
            bio="Developer of the full stack varietal ready to make a some waves!"
          />
          <AboutCard
            headshot={Keely}
            name="Keely Sherman"
            subtitle="Lead Developer"
            ghLink="https://github.com/keelyybug"
            liLink="https://www.linkedin.com/in/keelysherman/"
            bio="My bio is coming really, really soon...Trust me."
          />
          <AboutCard
            headshot={Sami}
            name="Sami Sweet-Kloid"
            subtitle="Lead Developer"
            ghLink="https://github.com/sweetkloid"
            liLink="https://www.linkedin.com/in/keelysherman/"
            bio="My bio is coming really, really soon...Trust me."
          />
        </div>
      </div>

      <hr className="w-full border-[#b279d8f5] my-8" />

      <div className="about-content my-8">
        <h1 className="text-2xl md:text-4xl text-center my-4 text-white">
          Check out the project GitHub{" "}
          <a
            className="text-white font-bold"
            href="https://github.com/emilymclean94/stream_verse"
          >
            HERE
          </a>
        </h1>

        <h2 className="text-xl md:text-2xl text-[#b279d8f5] text-center my-4">
          Get to know the team:
        </h2>
        <div className="flex flex-wrap flex-row justify-center">
          <AboutCard2
            headshot={Emily}
            name="Emily McLean"
            subtitle="Lead Developer"
            ghLink="https://github.com/emilymclean94"
            liLink="https://www.linkedin.com/in/emilyamclean/"
            bio="Full stack developer and lover of books, video games, and my dogs."
          />
          <AboutCard2
            headshot={Ashley}
            name="Ashley Giraldo"
            subtitle="Lead Developer"
            ghLink="hhttps://github.com/Ashleyg5"
            liLink="https://www.linkedin.com/in/ashley-giraldo/"
            bio="My bio is coming really, really soon...Trust me."
          />
          <AboutCard2
            headshot={Ethan}
            name="Ethan Garrison"
            subtitle="Lead Developer"
            ghLink="https://github.com/EGARRISXN"
            liLink="https://www.linkedin.com/in/ethan-garrison-261ba4a2/"
            bio="Developer of the full stack varietal ready to make a some waves!"
          />
          <AboutCard2
            headshot={Keely}
            name="Keely Sherman"
            subtitle="Lead Developer"
            ghLink="https://github.com/keelyybug"
            liLink="https://www.linkedin.com/in/keelysherman/"
            bio="My bio is coming really, really soon...Trust me."
          />
          <AboutCard2
            headshot={Sami}
            name="Sami Sweet-Kloid"
            subtitle="Lead Developer"
            ghLink="https://github.com/sweetkloid"
            liLink="https://www.linkedin.com/in/keelysherman/"
            bio="My bio is coming really, really soon...Trust me."
          />
        </div>
      </div>
    </main>
  );
}
