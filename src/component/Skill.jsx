import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import javascript from "../assets/skills/javascript.svg";
import tailwind from "../assets/skills/tailwind.svg";
import react from "../assets/skills/react.svg";
import git from "../assets/skills/git.svg";
import node from "../assets/skills/nodejs.svg";
import html from "../assets/skills/html.svg";
import bootstrap from "../assets/skills/bootstrap-4-logo-svgrepo-com.svg";
import css3 from "../assets/skills/css3-svgrepo-com.svg";
import nextjs from "../assets/skills/nextjs-svgrepo-com.svg";
import typescript from "../assets/skills/typescript-official-svgrepo-com.svg";
import hr from "../assets/curve-hr.svg";
import SkillCard from "./SkillCard";

export default function Skills() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div id="skills" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Skills</h1>
      <p className="font-light text-gray-400">
        Estas son algunas de mis habilidades.
      </p>

      <div className="mt-4">
        <Slider {...settings}>
          <SkillCard name="React" img={react} />
          <SkillCard name="Next" img={nextjs} />
          <SkillCard name="JavaScript" img={javascript} />
          <SkillCard name="TypeScript" img={typescript} />
          <SkillCard name="Tailwind" img={tailwind} />
          <SkillCard name="Bootstrap" img={bootstrap} />
          <SkillCard name="Git" img={git} />
          <SkillCard name="Node" img={node} />
          <SkillCard name="Css3" img={css3} />
          <SkillCard name="HTML5" img={html} />
        </Slider>
      </div>
      <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
    </div>
  );
}
