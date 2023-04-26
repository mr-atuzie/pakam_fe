import React from "react";

const Hero = () => {
  return (
    <div className=" h-[60vh] w-full relative grid grid-cols-3">
      <img
        className=" w-full h-full object-cover"
        src="https://img.freepik.com/free-photo/office-building-pattern-textures_1203-9537.jpg?w=996&t=st=1679591480~exp=1679592080~hmac=14c4e00c34abc0c1ee00f9cbde286792933420c9d45062be45c0dc09692883cf"
        // src="https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf_105762-2111.jpg?w=826&t=st=1679587264~exp=1679587864~hmac=1964576e6feb0bc6f76311afc91792f40f042de855fed0d854fbcd065810a10e"
        alt=""
      />
      <img
        className=" w-full h-full object-cover"
        src="https://img.freepik.com/free-photo/black-white-exterior-building_74190-7309.jpg?w=996&t=st=1679591385~exp=1679591985~hmac=af0d6757ff48ddead18a9954e9dfd275c56478d5218a0899969c60eef6023e42"
        // src="https://img.freepik.com/free-photo/interior-design-with-photoframes-couch_23-2149385435.jpg?w=996&t=st=1679587418~exp=1679588018~hmac=608eef70f801759b58032ef6ba5752454729d7c9f61aae762891401e68feacc0"
        alt=""
      />
      <img
        className=" w-full h-full object-cover"
        src="https://img.freepik.com/free-photo/abstract-architecture-building_74190-7281.jpg?w=996&t=st=1679591357~exp=1679591957~hmac=8711e54ffb58b11665a5a65b346433f4c7cd46b4108d1f1e1675df81f1e894da"
        // src="https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1934.jpg?w=996&t=st=1679587569~exp=1679588169~hmac=393b4b4dc312aef73cc3acf4ae908f1f10ef581003f6948988941311048be60a"
        alt=""
      />

      <div className=" w-full h-full flex justify-center items-center absolute top-0  bg-blue-500/50">
        <div className=" flex flex-col justify-center items-center">
          <h1 className=" text-center uppercase text-2xl font-medium text-gray-100">
            Subscription care for your home
          </h1>

          <p className=" text-gray-100 my-4 text-center">
            We cover costs of breakdowns,help prevent problems{" "}
            <br className="hidden lg:block" /> from happening, and coordinate
            many services.
          </p>

          <button className=" capitalize bg-white py-3 px-6 w-fit cursor-pointer text-blue-400 rounded-md">
            start membership
          </button>

          <p className="text-gray-100 my-6">Questions? Talk with an agent at</p>

          <h3 className=" text-xl font-semibold text-gray-100">
            0801-234-5678
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
