import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonies = [
    { id: 1, name: "Ikenna Obinna", location: "Lagos , Nigeria" },
    { id: 2, name: "Olamide Olayinka", location: "Akure , Nigeria" },
    { id: 3, name: "Abdul bin Umar", location: "Sokoto , Nigeria" },
    { id: 4, name: "John Bassey Bassey", location: "Accra , Ghana" },
  ];

  return (
    <div className=" bg-gray-50   py-14">
      <div className=" w-[90%] md:w-[80%] mx-auto ">
        <div className=" text-lg uppercase text-center font-medium">
          {" "}
          here's what our users say{" "}
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-4 gap-6 my-7">
          {testimonies.map(({ name, id, location }) => {
            return <TestimonialCard key={id} name={name} location={location} />;
          })}
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ name, location }) => {
  const rating = [1, 2, 3, 4, 5];
  return (
    <div className=" bg-white shadow-md p-5 rounded-md">
      <h3 className=" capitalize font-semibold">{name}</h3>
      <p className=" text-gray-500 text-sm">{location}</p>
      <div className="flex text-orange-500 gap-1 mb-1">
        {rating.map((index) => {
          return <BsFillStarFill size={30} key={index} />;
        })}
      </div>
      <article className="text-gray-600 mt-3 ">
        <FaQuoteLeft />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
        consequuntur ad ea sit iure dicta temporibus adipisci esse? Earum,
        nostrum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
        consequuntur ad ea sit iure dicta temporibus adipisci esse? Earum,
        nostrum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        <FaQuoteRight />
      </article>
    </div>
  );
};

export default Testimonials;
