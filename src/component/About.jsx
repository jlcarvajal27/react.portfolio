import code from "../assets/code.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import hr from "../assets/curve-hr.svg";

export default function About() {
  return (
    <div
      id="about"
      className="flex top-14  h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative"
    >
      <div>
        <img
          data-aos="flip-right"
          data-aos-duration="1500"
          data-aos-offset="200"
          src={code}
          alt="profile"
        />
      </div>
      <div
        className="md:w-3/6"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-offset="100"
      >
        <div className="flex flex-col w-full mt-8">
          <h1 className="text-xl text-gray-400">Hola, Yo soy</h1>
          <h1 className="text-2xl font-bold">Jorge Luis Carvajal</h1>
          <p class="text-xl font-bold italic text-gray-300">
            Frontend Development
          </p>
          <p className="text-md font-light text-gray-400 italic">
            Soy una persona que se adapta rápidamente a nuevos retos y
            responsabilidades con experiencia en trabajar con plazos ajustados y
            bajo presión de tiempo, asegurando la calidad. Grandes intereses en
            adquirir e y mejorando mis habilidades. Entusiasta de la tecnología
            y la programación, abierto a nuevos desafíos.
          </p>
        </div>

        <ul className="flex mt-2 gap-4 items-center my-16">
          <li>
            <a
              href="https://github.com/jlcarvajal27"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon size="2xl" icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/carvajalsw"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon size="2xl" icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/jorge-luis-carvajal"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon size="2xl" icon={faLinkedinIn} />
            </a>
          </li>
        </ul>
      </div>
      {/* <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" /> */}
    </div>
  );
}
