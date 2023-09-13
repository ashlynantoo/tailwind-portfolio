import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({ img, title, text, url, github }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize px-4 py-8">
        <h2 className="text-xl tracking-wide font-medium text-center">
          {title}
        </h2>
        <p className="mt-3 text-slate-700 leading-loose text-justify">{text}</p>
        <div className="mt-4 flex justify-center gap-x-4">
          <a href={url}>
            <TbWorldWww className="h-8 w-8 text-emerald-600 hover:text-black duration-300" />
          </a>
          <a href={github}>
            <FaGithubSquare className="h-8 w-8 text-emerald-600 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
