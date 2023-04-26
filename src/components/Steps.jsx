import React from "react";
import help from "../assets/help.jpg";

const Steps = () => {
  const steps = [
    {
      id: 1,
      img: help,
      text: `Super helps you coordinate many of your home needs from maintenance to repair.`,
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-vector/helping-partner-concept-illustration_114360-8584.jpg?w=740&t=st=1679471766~exp=1679472366~hmac=5361b2240a95601bdda95587880bbe92aef886332829ce4317b0843710c0fad7",
      text: `We send the best service providers at the best time for you.`,
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-vector/isometric-customer-support-illustration_23-2148897458.jpg?w=740&t=st=1679471902~exp=1679472502~hmac=15de4aa9320d57c4bd4459e6366cde8daeca2546c52d1f00cd6f060c7e3ba642",
      text: `Services is made available over the phone,online or mobile. `,
    },
    {
      id: 4,
      img: "https://img.freepik.com/free-vector/home-screen-concept-illustration_114360-4703.jpg?w=740&t=st=1679471955~exp=1679472555~hmac=b9f703b5188e8740ad7fd19db45ac9704b03f728b913acc2bac546a158080de5",
      text: `Super repairs or replaces covered appliances and systems when they break. `,
    },
  ];

  return (
    <div>
      <div className="    py-14">
        <div className=" w-[90%] md:w-[80%] mx-auto ">
          <div className=" text-lg uppercase text-center font-medium">
            {" "}
            How it works boobs
          </div>
          <p className=" text-center my-3 text-base text-gray-800">
            Sign up for a subscribtion today.Then,just call , or tap{" "}
            <br className="hidden lg:block" /> next time you have to repair
            need, and we'll send a top servicer.
          </p>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-24 my-7">
            {steps.map(({ id, text, img }) => {
              return <StepCard key={id} text={text} img={img} id={id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const StepCard = ({ text, img, id }) => {
  return (
    <div className=" flex justify-center items-center flex-col  ">
      <div className=" h-56 w-56">
        <img className="h-full w-full object-cover" src={img} alt={img} />
      </div>
      <div className=" mt-4">
        <p className=" font-medium uppercase text-center">step {id}</p>
        <p className="text-gray-600 text-sm text-center mt-2">{text}</p>
      </div>
    </div>
  );
};

export default Steps;
