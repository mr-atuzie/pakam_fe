import React from "react";
import lagos from "../assets/lagos.jpg";
import ibadan from "../assets/ibadan.jpg";
// import abuja from "../assets/abuja.jpg";
// import delta from "../assets/delta.jpg";
// import ph from "../assets/ph.jpg";
// import akwa from "../assets/akwa.jpg";

const Location = () => {
  const cities = [
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/view-new-york-city-manhattan-midtown-dusk-with-skyscrapers-illuminated-east-river_268835-754.jpg?w=996&t=st=1679591562~exp=1679592162~hmac=250ab39dd50e10e193a4f1d7650217ff4450793ed8b2067eb47252914eb8db83",
      name: "new york",
    },
    {
      id: 2,
      img: lagos,
      name: "Lagos",
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-photo/panoramic-view-big-ben-london-sunset-uk_268835-1401.jpg?w=1380&t=st=1679591719~exp=1679592319~hmac=548faef35a659453b0619aeb6aba52a6a2a8a25dfbc27bf483e6dfde9693d09e",
      name: "london",
    },
    {
      id: 4,
      img: "https://img.freepik.com/free-photo/water-famous-architecture-finance-shanghai-tower_1417-1120.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.2.89680559.1678048408&semt=sph",
      name: "dubai",
    },
    {
      id: 5,
      img: "https://img.freepik.com/free-photo/san-francisco-city-skyline-with-urban-architectures_649448-237.jpg?w=740&t=st=1679591928~exp=1679592528~hmac=50a00540e2ce95d3240f540a14aee692d525b4dbfe9dfa75e915a9e0ab50ba93",
      name: "san fransico",
    },
    {
      id: 6,
      img: ibadan,
      name: "ibadan",
    },
  ];
  return (
    <div className="  py-14">
      <div className=" w-[90%] md:w-[85%] mx-auto ">
        <div className=" text-lg uppercase text-center font-medium">
          {" "}
          Avaliable in these cities{" "}
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-7">
          {cities.map(({ id, img, name }) => {
            return <CityCard img={img} name={name} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
};

const CityCard = ({ name, img }) => {
  return (
    <div className=" relative">
      <img
        src={img}
        alt={name}
        className=" w-full h-52 object-cover rounded-md"
      />
      <div className=" bg-black/25 w-full rounded-md   z-10 h-full absolute top-0 bottom-0  ">
        <div className=" text-center uppercase text-white flex justify-center items-center font-bold text-lg w-full h-full">
          {name}
        </div>
      </div>
    </div>
  );
};

export default Location;
