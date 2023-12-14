import Image from "next/image";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";

const AboutCard = ({ headshot, name, subtitle, ghLink, liLink, bio }) => {
  return (
    <div className="w-[325px] m-4 p-4">
      <div className="bg-white rounded-lg overflow-hidden flex items-center text-center content-center justify-around flex-col shadow-md">
        <Image
          src={headshot}
          alt={name}
          className="w-full h-60 object-cover object-center"
        />
        <div className="p-4 h-48 w-full flex flex-col">
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <p className="text-gray-600 font-semibold mb-2">{subtitle}</p>
          <p className="text-gray-800 mb-2">{bio}</p>
          <div className="mx-[5px] md:mx-[15px] flex flex-row justify-evenly">
            <a
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-700"
            >
              <FaSquareGithub size={40} />
            </a>
            <a
              href={liLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <FaLinkedin size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
