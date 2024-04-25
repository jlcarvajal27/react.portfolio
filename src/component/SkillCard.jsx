import React from "react";

export default function SkillCard({ img, name }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100"
      className="w-11/12  p-4 text-center justify-center border-2 border-gray-800 bg-dark-200 rounded-md flex flex-col h-48"
    >
      <img src={img} className="w-20 max-h-20 mx-auto" alt={name} />
      <div className="mt-2">
        <h1 className="font-bold md:text-xl">{name}</h1>
      </div>
    </div>
  );
}
