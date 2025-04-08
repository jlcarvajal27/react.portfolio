export default function SkillCard({ img, name }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100"
      className="flex flex-col justify-center w-11/12 h-48 p-4 text-center border-2 border-teal-500 rounded-md bg-dark-100"
    >
      <img src={img} className="w-20 mx-auto max-h-20" alt={name} />
      <div className="mt-2">
        <h1 className="font-bold md:text-xl">{name}</h1>
      </div>
    </div>
  );
}
