import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/pakam.jpg";

const Register = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { firstname, lastname, username, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!firstname || !lastname || !username || !password) {
      setLoading(false);
      return toast.error("All fields are required");
    }

    if (password.length < 6) {
      setLoading(false);
      return toast.error("Password must be up to 6 characters");
    }

    const userData = { firstname, lastname, username, password };

    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/pakam/register`,
        userData,
        {
          withCredentials: true,
        }
      );

      setLoading(false);

      toast.success("User Registered successfully");
      navigate("/dashboard");
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setLoading(false);
      toast.error(message);
    }
  };

  return (
    <div className=" w-full min-h-screen flex justify-center flex-col items-center bg-gray-200 py-10">
      <div className=" bg-white w-[90%] lg:w-[43%] mx-auto shadow-md rounded-lg px-7   py-14">
        <div className=" flex gap-2 items-center justify-center mb-4">
          <img src={logo} alt="" width={80} />
        </div>
        <h2 className="text-xl  font-semibold  text-center mb-6 ">
          Create Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">
            <div className=" w-full ">
              <label
                className=" font-medium  text-xs lg:text-sm mb-2"
                htmlFor="firstname"
              >
                First name
              </label>

              <input
                className="border p-2  rounded-lg  block w-full placeholder:text-sm "
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
                className="border p-2   rounded-lg   block w-full placeholder:text-sm"
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
                className="border p-2   rounded-lg  block w-full  placeholder:text-sm "
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
                className="border p-2  block w-full  rounded-lg   placeholder:text-sm "
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
              className=" text-sm lg:text-base max-w-lg rounded-lg w-full text-center py-2  mt-10 bg-[#08432d] disabled:bg-green-300 text-white "
              type="submit"
            >
              {loading ? "Loading" : "Register"}
            </button>

            <p className="text-xs text-center  font-medium mt-6  capitalize  text-gray-500">
              forgot Password?{" "}
              <span className=" text-green-900 ml-1 ">retrieve now</span>
            </p>
          </div>
        </form>
      </div>

      <p className=" text-green-900 mt-14 font-medium text-sm">
        Powered by Pakam Technology
      </p>
    </div>
  );
};

export default Register;
