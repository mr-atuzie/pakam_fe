import React, { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const initialState = {
    fullname: "",
    desc: "",
    quantity: "",
  };

  const { id } = useParams();
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { fullname, desc, quantity } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ id, fullname, desc, quantity });
    setLoading(true);
  };
  return (
    <div className=" w-full min-h-screen flex justify-center flex-col items-center bg-gray-200">
      <div className=" bg-white w-[90%] lg:w-[50%] mx-auto shadow-md rounded-lg p-8">
        <h2 className="text-xl  font-semibold mb-6 ">Update Assessment</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className=" w-full ">
              <label
                className=" font-medium  text-xs lg:text-sm mb-2"
                htmlFor="fullname"
              >
                Full name
              </label>

              <input
                className="border p-2  border-green-600  rounded-lg  block w-full placeholder:text-sm "
                type="text"
                placeholder=" Full name"
                name="fullname"
                value={fullname}
                onChange={handleInputChange}
                id="fullname"
              />
            </div>

            <div className=" ">
              <label
                className=" font-medium  text-xs lg:text-sm mb-2"
                htmlFor="desc"
              >
                Description
              </label>

              <input
                className="border p-2  border-green-600   rounded-lg   block w-full placeholder:text-sm"
                type="text"
                placeholder="Description"
                name="desc"
                value={desc}
                onChange={handleInputChange}
                id="desc"
              />
            </div>

            <div className=" ">
              <label
                className=" font-medium  text-xs lg:text-sm"
                htmlFor="quantity"
              >
                Quantity
              </label>

              <input
                className="border p-2 border-green-600  rounded-lg  block w-full  placeholder:text-sm "
                type="text"
                name="quantity"
                placeholder="Quantity"
                value={quantity}
                onChange={handleInputChange}
                id="quantity"
              />
            </div>
          </div>

          <button
            disabled={loading}
            className=" text-sm lg:text-base  rounded-lg  text-center px-4 py-2  mt-10 bg-[#08432d] disabled:bg-green-300 text-white "
            type="submit"
          >
            {loading ? "Loading" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
