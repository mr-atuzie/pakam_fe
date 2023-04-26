import React from "react";

const Banner = () => {
  return (
    <div className=" hidden w-full  lg:grid  lg:h-[60vh]  grid-cols-3">
      <img
        src="https://img.freepik.com/free-photo/low-angle-shot-facade-white-modern-building-blue-clear-sky_181624-48219.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.1.89680559.1678048408&semt=sph"
        alt="banner-3"
        className="w-full h-full"
      />
      <img
        src="https://img.freepik.com/free-photo/facade-new-contemporary-building_23-2147694738.jpg?t=st=1679407861~exp=1679408461~hmac=aabaa939d489b3a54511ad4689dab6aac5d30d97735c9c1f60c171f4961e8630"
        alt="banner-2"
        className="w-full  h-full"
      />
      <img
        src="https://img.freepik.com/free-photo/plain-concrete-structure-city_23-2148814196.jpg?w=996&t=st=1679407716~exp=1679408316~hmac=f1b80733347d161e257203c944006dd5908bd07b178c8df3e5e777d3e53642ae"
        alt="banner-1"
        className="w-full  h-full"
      />
    </div>
  );
};

export default Banner;
