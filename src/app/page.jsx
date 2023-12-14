import Image from "next/image";

export default function Home() {
  return (
    <main className="home-background">
      <div className="lg:h-screen lg:w-full flex flex-col lg:flex-row items-center content-center lg:content-normal justify-start lg:justify-around flex-wrap">
        <section className="border-red-100">
          <Image
            className="self-center"
            src="/hero.gif"
            alt="astronaut spinning around and around"
            width={400}
            height={400}
            quality={100}
          />
        </section>
        <section className="mt-[0.5rem] border-red-100">
          <h1 className="text-[#6c757d] m-0 text-center lg:text-start text-7xl">
            INTO THE
          </h1>
          <h1 className="title text-[#fff] text-7xl text-center lg:text-right m-0">
            STREAMVERSE
          </h1>
        </section>
      </div>
    </main>
  );
}
