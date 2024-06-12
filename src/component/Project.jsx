import hr from "../assets/curve-hr.svg";
import ProjectCard from "./ProjectCard";

export default function Project() {
  const Data = [
    // {
    //   title: "Project-1",
    //   description:
    //     "Tienda virtual desarrollada en JavaScript, donde encontrarás un extenso catálogo de cursos online para satisfacer todas tus necesidades educativas. Desde habilidades técnicas hasta creatividad artística, nuestra plataforma ofrece una amplia gama de cursos diseñados para todo tipo de personas,desde principiantes hasta expertos.",

    //   url1: "https://quiet-meerkat-17d815.netlify.app/",
    //   url2: "https://github.com/jlcarvajal27/cart-shop",
    // },
    {
      title: "Tienda virtual",
      description:
        "Tienda CB-Shop es una plataforma de comercio electrónico  que ofrece una variedad de cualquier tipo ropa para mujeres, hombres y niños. Desarrollada  con Next.js, Tailwind.css, esta tienda virtual proporciona una experiencia de compra fluida y atractiva para los usuarios.",

      url1: "https://tienda-virtual-cb-shop.vercel.app/",
      url2: "https://github.com/jlcarvajal27/cb-shop",
    },
    {
      title: "App Cinematografica",
      description:
        "App cinematográfica  creada con React y estilizada con Tailwind CSS. que ofrece películas de todos los géneros, marque sus favoritas y cree su propia lista de reproducción. Navegue de manera intuitiva en una interfaz de usuario atractiva para una experiencia óptima.",
      url1: "https://reactjs-portfolio-project.netlify.app/",
      url2: "https://github.com/jlcarvajal27/Movie-App",
    },
    {
      title: "Dashboard App",
      description:
        "App diseñada con Next-js para los aficionados de Pokémon. Permite a los usuarios explorar una  base de datos, donde cada entrada ofrece detalles como la descripción, tipo, evolución y habilidades únicas. Los usuarios pueden  marcar su Pokémon favoritos y personalizar su lista.",
      url1: "https://dashboard-app-psi-lime.vercel.app/dashboard/pokemons",
      url2: "https://github.com/jlcarvajal27/dashboard-app",
    },
    {
      title: "Gym App",
      description:
        "App diseñada con React y Tailwind.css para ofrecer programas de entrenamiento personalizado, clases grupales y recursos de nutrición. Únete a nuestra comunidad en línea para inspiración y motivación. ¡Comienza tu viaje hacia una vida más saludable!",
      url1: "https://gym-proyect-site.vercel.app/",
      url2: "https://github.com/jlcarvajal27/gym-proyect",
    },
  ];
  return (
    <div id="project" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Project</h1>
      <p className="font-light text-gray-400">
        Estos son algunos de mis proyectos
      </p>
      <div className="  justify-center gap-2 grid grid-cols-1 md:grid-cols-4 ">
        {Data.map((url, index) => (
          <ProjectCard
            key={index}
            title={url.title}
            url1={url.url1}
            url2={url.url2}
            description={url.description}
          />
        ))}
      </div>
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
}
