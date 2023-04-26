import React from "react";

const Featured = () => {
  const featuredIn = [
    { id: 1, name: "fortune" },
    { id: 2, name: "venture" },
    { id: 3, name: "best" },
  ];

  return (
    <div className=" bg-blue-50   py-14">
      <div className=" w-[90%] md:w-[80%] mx-auto ">
        <div className=" text-lg uppercase text-center font-medium">
          {" "}
          Recently featured in{" "}
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 my-7">
          {featuredIn.map(({ name, id }) => {
            return <FeaturedCard key={id} name={name} />;
          })}
        </div>
      </div>
    </div>
  );
};

const FeaturedCard = ({ name }) => {
  return (
    <div className=" bg-white shadow-md p-5 rounded-md">
      <h3 className=" text-xl uppercase italic  font-bold">{name}</h3>
      <article className="text-gray-600 mt-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
        consequuntur ad ea sit iure dicta temporibus adipisci esse? Earum,
        nostrum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
        consequuntur ad ea sit iure dicta temporibus adipisci esse? Earum,
        nostrum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
        consequuntur ad ea sit iure dicta temporibus adipisci esse? Earum,
        nostrum. Sint, consequuntur ad ea sit iure dicta temporibus adipisci
        esse? Earum, nostrum.
      </article>

      <p className=" text-blue-700 mt-2 font-medium capitalize">read more</p>
    </div>
  );
};

export default Featured;
