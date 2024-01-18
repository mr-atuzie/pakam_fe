import axios from "axios";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const initialState = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { username, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!username || !password) {
      setLoading(false);
      return toast.error("All fields are required");
    }

    if (password.length < 8) {
      setLoading(false);
      return toast.error("Password must be up to 8 characters");
    }

    const userData = { username, password };

    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/pakam/login`,
        userData,
        {
          withCredentials: true,
        }
      );

      setLoading(false);

      toast.success("Login successfull");
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
          <div className=" bg-[#08432d] w-6 h-6 rounded-md flex justify-center items-center text-white">
            <FaTrash />
          </div>
          <h1 className=" font-semibold text-[#08432d]">Pakam</h1>
        </div>
        <h2 className="text-xl  font-semibold  text-center mb-6 ">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className=" flex justify-center items-center  gap-4 flex-col">
            <div className=" w-full max-w-lg ">
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
            <div className=" w-full max-w-lg ">
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
              {loading ? "Loading" : "Login"}
            </button>

            <p className="text-xs text-center  font-medium mt-6  capitalize  text-gray-500">
              forgot Password?{" "}
              <span className=" text-green-700 ml-1 ">retrieve now</span>
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

export default Login;
