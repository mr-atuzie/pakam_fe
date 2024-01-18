import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const Register = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { firstname, lastname, username, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
  };

  return (
    <div className=" w-full min-h-screen flex justify-center flex-col items-center bg-gray-100">
      <div className=" bg-white w-[90%] lg:w-[50%] mx-auto shadow-md rounded-sm px-7   py-14">
        <div className=" flex gap-2 items-center justify-center mb-4">
          <div className=" bg-[#08432d] w-6 h-6 rounded-md flex justify-center items-center text-white">
            <FaTrash />
          </div>
          <h1 className=" font-semibold text-[#08432d]">Pakam</h1>
        </div>
        <h2 className="text-xl  font-semibold  text-center mb-6 ">
          Create Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className=" w-full ">
              <label
                className=" font-medium  text-xs lg:text-sm mb-2"
                htmlFor="firstname"
              >
                First name
              </label>

              <input
                className="border p-2.5  rounded  block w-full placeholder:text-sm "
                type="text"
                placeholder="Enter your First name"
                name="firstname"
                value={firstname}
                onChange={handleInputChange}
                id="firstname"
              />
            </div>

            <div className=" ">
              <label
                className=" font-medium  text-xs lg:text-sm mb-2"
                htmlFor="lastname"
              >
                Last name
              </label>

              <input
                className="border p-2.5   rounded   block w-full placeholder:text-sm"
                type="text"
                placeholder="Enter your Last name"
                name="lastname"
                value={lastname}
                onChange={handleInputChange}
                id="lastname"
              />
            </div>

            <div className=" ">
              <label
                className=" font-medium  text-xs lg:text-sm"
                htmlFor="username"
              >
                Username
              </label>

              <input
                className="border p-2.5   rounded  block w-full  placeholder:text-sm "
                type="text"
                name="username"
                placeholder="Enter your Username"
                value={username}
                onChange={handleInputChange}
                id="username"
              />
            </div>

            <div className=" ">
              <label
                className=" font-medium text-xs lg:text-sm"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border p-2.5  block w-full  rounded   placeholder:text-sm "
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={password}
                onChange={handleInputChange}
                id="password"
              />
              <small className=" text-xs text-gray-400">
                Must be 8 character long, Uppercase inclusive
              </small>
            </div>
          </div>

          <div className=" flex justify-center items-center flex-col">
            <button
              disabled={loading}
              className=" text-sm lg:text-base max-w-lg rounded w-full text-center py-2.5  mt-10 bg-[#08432d] disabled:bg-green-300 text-white "
              type="submit"
            >
              {loading ? "Loading" : "Register"}
            </button>

            <p className="text-xs text-center  font-medium mt-6  capitalize  text-gray-500">
              forgot Password?{" "}
              <span className=" text-green-700 ml-1 ">retrieve now</span>
            </p>
          </div>
        </form>
      </div>

      <p className=" text-green-700 mt-14 font-medium text-sm">
        Powered by Pakam Technology
      </p>
    </div>
  );
};

export default Register;
