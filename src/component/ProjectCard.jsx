import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectCard(props) {
  const { title, url1, url2, description } = props;
  return (
    <div className=" relative flex flex-col mt-3 text-white bg-dark-100 shadow-xs bg-clip-border rounded-xl w-100 overflow-auto">
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h5>

        <p className="block font-sans text-base antialiased font-light leading-relaxed">
          {description}
        </p>
      </div>
      <div className="p-6 pt-0">
        <a
          href={url1}
          rel="noreferrer"
          className="inline-block"
          target="_blank"
        >
          <button
            className="flex items-center m-2 px-4 py-2 font-sans text-md font-bold text-white-700 rounded-lg bg-teal-500"
            type="button"
          >
            View Project
          </button>
        </a>
        <button>
          <a href={url2} rel="noreferrer" target="_blank">
            <FontAwesomeIcon size="2xl" icon={faGithub} />
          </a>
        </button>
      </div>
    </div>
  );
}
