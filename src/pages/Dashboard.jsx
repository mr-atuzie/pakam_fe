import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import DeleteModal from "../components/DeleteModal";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [id, setId] = useState("");
  const [assessment, setAssessment] = useState([]);

  const getAllAssessment = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/pakam/get-assessments`,
        {
          withCredentials: true,
        }
      );
      setAssessment(res.data.assessments);
      setLoading(false);
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
  useEffect(() => {
    getAllAssessment();
  }, []);

  console.log(assessment.assessments);

  return (
    <div className=" w-full h-full lg:h-[100vh] flex">
      {loading && <Loader />}
      {modal && (
        <DeleteModal
          id={id}
          setModal={setModal}
          getAllAssessment={getAllAssessment}
          deleting={deleting}
          setDeleting={setDeleting}
        />
      )}
      <div className=" lg:w-[20%] h-full bg-green-900"></div>
      <div className="  lg:w-[80%] h-full bg-gray-200 ">
        <section className=" w-[90%] lg:w-[80%] mx-auto py-10">
          <h2 className="text-xl  font-semibold mb-6 ">Assessment</h2>

          <div className=" flex justify-end">
            <Link to={"/add-user"}>
              <button
                className=" text-sm    rounded-lg  text-center px-4 py-2  mb-10 bg-[#08432d] disabled:bg-green-300 text-white "
                type="submit"
              >
                Create
              </button>
            </Link>
          </div>

          <div className="relative overflow-x-auto shadow-md  sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500  bg-white ">
              <thead className="  text-gray-700  ">
                <tr className="border-b-2    border-gray-200">
                  <th scope="col" className="p-4 ">
                    <div className="flex items-center ">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                      />
                      <label for="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Name
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-center  font-medium"
                  >
                    Description
                  </th>

                  <th scope="col" className="px-8 py-3 text-center font-medium">
                    Quantity
                  </th>

                  <th scope="col" className="px-8 text-center py-3 font-medium">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {assessment?.map((a) => {
                  return (
                    <tr
                      key={a._id}
                      className="bg-white border-b-2 border-gray-200"
                    >
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="checkbox-table-search-1"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-2.5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {a.fullname}
                      </th>
                      <td className="px-6 py-2.5 text-center text-gray-900 ">
                        {a.desc}
                      </td>
                      <td className="px-6 py-2.5 text-center">{a.quantity}</td>

                      <td className="flex justify-center items-center gap-4 px-8 py-2.5">
                        <Link to={`/update-user/${a._id}`}>
                          <button className=" bg-green-900 text-white px-6 text-sm py-1 rounded-lg ">
                            Edit
                          </button>
                        </Link>
                        <button
                          onClick={() => {
                            setModal(true);
                            setId(a._id);
                          }}
                          className=" bg-white border border-green-900 text-green-900 px-6 text-sm py-1 rounded-lg "
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
