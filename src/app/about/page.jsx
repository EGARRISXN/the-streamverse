import AboutCard from "@/components/AboutCard";
import Emily from "/public/headshots/emily_headshot.jpg";
import Ethan from "/public/headshots/ethan_headshot.jpg";
import Ashley from "/public/headshots/ashley_headshot.jpg";
import Keely from "/public/headshots/keely_headshot.png";
import Sami from "/public/headshots/anon_headshot.jpg";

export default function About() {
  return (
    <main className="h-screen w-full flex mb-[2rem]">
      <div className="about-content items-center flex mt-[20px] flex-col">
        <h1 className="text-2xl md:text-3xl text-center my-[30px] text-white">
          Check out the project GitHub{" "}
          <a
            className="text-white font-bold"
            href="https://github.com/emilymclean94/stream_verse"
          >
            HERE
          </a>
        </h1>

        <h2 className="text-xl md:text-2xl text-[#b279d8f5] text-center my-[10px] md:my-[25px]">
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
    </main>
  );
}
