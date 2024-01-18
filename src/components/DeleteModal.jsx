import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const DeleteModal = ({
  setModal,
  id,
  getAllAssessment,
  deleting,
  setDeleting,
}) => {
  const handleDelete = async (id) => {
    setDeleting(true);
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/pakam/delete-assessment/${id}`
      );

      setModal(false);
      getAllAssessment();
      toast.success("Assessment deleted");
      setDeleting(false);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setModal(false);
      setDeleting(false);
      toast.error(message);
    }
  };
  return (
    <div className=" w-full h-screen bg-black/90 fixed top-0 z-50 flex justify-center items-center">
      <div className=" w-[30%] p-5 bg-white rounded-lg">
        <h2 className=" text-2xl text-green-900 font-semibold">
          Delete Waste Category{" "}
        </h2>
        <p className=" text-sm text-gray-500 my-8">
          Are you sure you want to delete this waste categoty?
        </p>
        <div className=" flex items-center gap-5 justify-end">
          <button
            onClick={() => setModal(true)}
            className=" bg-white border border-green-900 text-green-900 px-6 text-sm py-1 rounded-lg "
          >
            Cancel
          </button>
          <button
            disabled={deleting}
            onClick={() => handleDelete(id)}
            className=" bg-red-700 text-white px-6 text-sm py-1 rounded-lg disabled:bg-red-300  "
          >
            {deleting ? "Deleting" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
