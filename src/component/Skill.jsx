import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
          <SkillCard name="React" img={"skills/react.svg"} />
          <SkillCard name="Next" img={"skills/nextjs.svg"} />
          <SkillCard name="JavaScript" img={"skills/javascript.svg"} />
          <SkillCard name="TypeScript" img={"skills/typescript.svg"} />
          <SkillCard name="Tailwind" img={"skills/tailwind.svg"} />
          <SkillCard name="Bootstrap" img={"skills/bootstrap.svg"} />
          <SkillCard name="Git" img={"skills/git.svg"} />
          <SkillCard name="Node" img={"skills/nodejs-svgrepo-com.svg"} />
          <SkillCard name="Css3" img={"skills/css3.svg"} />
          <SkillCard name="HTML5" img={"skills/html.svg"} />
        </Slider>
      </div>
      <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
    </div>
  );
}
