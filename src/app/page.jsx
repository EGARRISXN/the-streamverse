import Image from "next/image";

export default function Home() {
  return (
    <main className="home-background">
      <div className="my-16 lg:w-full flex flex-col lg:flex-row-reverse items-center content-center lg:content-normal justify-start lg:justify-around flex-wrap">
        <section className="x">
          <h1 className="text-gray-500 font-light text-center lg:text-start text-4xl sm:text-5xl lg:text-6xl py-2">
            INTO THE
          </h1>
          <h1 className="title text-white font-light text-5xl sm:text-6xl lg:text-7xl text-center lg:text-right py-2">
            STREAMVERSE
          </h1>
        </section>
        <section className="x">
          <Image
            className="self-center"
            src="/hero.gif"
            alt="astronaut spinning around and around"
            width={400}
            height={400}
            quality={100}
          />
        </section>
      </div>
    </main>
  );
}
