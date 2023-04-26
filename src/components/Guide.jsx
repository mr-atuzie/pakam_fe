import React from "react";
import { CiDollar } from "react-icons/ci";

const Guide = () => {
  const guides = [
    {
      id: 1,
      name: "Make expenses Predictable",
      text: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
    consequuntur ad ea sit iure dicta temporibus adipisci esse? Earum.`,
    },
    {
      id: 2,
      name: "One source of simplified services",
      text: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
    consequuntur ad ea sit iure dicta temporibus adipisci esse? Earum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
    consequuntur ad ea sit iure dicta temporibus adipisci esse? Earum.`,
    },
    {
      id: 3,
      name: "Receive best in-class service",
      text: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
    consequuntur ad ea sit iure dicta temporibus adipisci esse? Earum. 
    consequuntur ad ea sit iure dicta temporibus adipisci esse? Earum.`,
    },
    {
      id: 4,
      name: "Enjoy greater buying power",
      text: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
    consequuntur ad ea sit iure dicta temporibus adipisci esse? `,
    },
    {
      id: 5,
      name: "Prevent problems from happening",
      text: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
    consequuntur ad ea sit iure dicta temporibus adipisci esse? `,
    },
    {
      id: 6,
      name: "Have one home record",
      text: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
    consequuntur ad ea sit iure dicta temporibus adipisci esse? `,
    },
  ];

  return (
    <div>
      <div className=" bg-blue-50   py-14">
        <div className=" w-[90%] md:w-[80%] mx-auto ">
          <div className=" grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-6 my-7">
            {guides.map(({ name, id, text }) => {
              return <GuideCard key={id} name={name} text={text} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const GuideCard = ({ name, text }) => {
  return (
    <div className=" flex gap-2 items-start">
      <div>
        <CiDollar className=" text-blue-400" size={25} />
      </div>
      <div>
        <h3 className=" text-lg font-medium">{name}</h3>
        <p className="text-gray-600 text-sm mt-1">{text}</p>
      </div>
    </div>
  );
};

export default Guide;
