import React from "react";
import introPic from "../assets/intro.png";

const Intro = () => {
  //   const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       if (count === intro.length - 1) {
  //         setCount(0);
  //       } else {
  //         setCount(count + 1);
  //       }
  //     }, 2000);

  //     return () => clearInterval(interval);
  //   }, [count, intro.length]);

  return (
    <div className="  bg-gray-100   py-14">
      <div className=" w-[90%] md:w-[80%] mx-auto flex flex-col lg:flex-row justify-between ">
        <div className=" lg:w-[40%]">
          <h1 className=" text-xl font-medium uppercase">
            Super is a subscription service that provides care and repaire for
            your home.
          </h1>

          <p className=" my-5 text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa sit
            dolorum ullam eum magni, assumenda deleniti voluptates. Tempora eum
            delectus ea aliquid vitae eaque! Tenetur nulla aperiam ex, non,
            temporibus ut eius ipsam culpa eveniet totam exercitationem.
            Repudiandae, et velit. Tempora eum delectus ea aliquid vitae eaque!
            Tenetur nulla aperiam ex, non, temporibus ut eius ipsam culpa
            eveniet totam exercitationem. Repudiandae, et velit. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Culpa sit dolorum
            ullam eum magni, assumenda deleniti voluptates.
          </p>

          <button className=" bg-blue-600 text-white w-44 py-3 capitalize rounded-md">
            Play video
          </button>
        </div>
        <div className="hidden lg:block lg:w-[50%]">
          <div className="]">
            <img src={introPic} alt="family" className="object-cover w-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
