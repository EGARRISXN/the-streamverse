import Image from "next/image";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";

const AboutCard = ({ headshot, name, subtitle, ghLink, liLink, bio }) => {
  return (
    <div className="max-w-md m-2 p-2 bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="flex">
        <div className="w-2/5">
          <div className="overflow-hidden">
            <Image
              src={headshot}
              alt={name}
              className="w-full h-52 object-cover object-center rounded-md"
            />
          </div>
        </div>
        <div className="w-3/5 pt-4 px-2 sm:px-4">
          <h2 className="text-gray-700 text-lg font-medium my-1 sm:my-2">
            {name}
          </h2>
          <p className="text-gray-900 text-md font-semibold my-1 sm:my-2">
            {subtitle}
          </p>
          <p className="text-gray-700 text-sm my-1 sm:my-2">{bio}</p>
          <div className="flex flex-row space-x-4">
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
