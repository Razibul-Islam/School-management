/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";

const AddGallery = () => {
  const [modal, setModal] = useState("hidden");
  const [teacher, setTeachers] = useState([]);
  const apiKey = "baca7cebf7d1365bf97c10bb391342f9";

  const handleAddGallery = async (e) => {
    e.preventDefault();

    const caption = e.target.caption.value;
    const img = e.target.img.files[0];

    if (!img) {
      toast.error("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", img);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data && data.data && data.data.url) {
        const teacherImg = data.data.url;
        const galleryData = { caption, teacherImg };

        const galleryResponse = await fetch(
          "https://school-server-umber.vercel.app/add-gallery",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(galleryData),
          }
        );

        const galleryResult = await galleryResponse.json();

        if (galleryResult.acknowledged) {
          toast.success("যোগ সম্পূর্ণ হয়েছে");
          setModal("hidden");
          e.target.reset();
          fetchGallery(); // Refresh the gallery
        } else {
          toast.error("Failed to add to gallery.");
        }
      } else {
        toast.error("Image upload failed.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleDeleteTeacher = async (_id) => {
    try {
      const response = await fetch(`https://school-server-umber.vercel.app/gallery?_id=${_id}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (data.acknowledged) {
        toast.success("মুছে ফেলা হয়েছে");
        fetchGallery(); // Refresh the gallery
      } else {
        toast.error("Deletion failed.");
      }
    } catch (error) {
      console.error("Error deleting gallery item:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const fetchGallery = async () => {
    try {
      const response = await fetch("https://school-server-umber.vercel.app/gallery");
      const data = await response.json();
      setTeachers(data);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <div className="p-5 w-full relative">
      <h2 className="text-xl text-center my-5">শিক্ষক তালিকা</h2>
      <button
        onClick={() => setModal("")}
        className="px-5 py-2 bg-teal-500 text-white rounded-3xl"
      >
        নতুন ছবি যোগ করুন
      </button>
      <div className="my-5 grid grid-cols-4 gap-10">
        {teacher.map((teachers) => {
          return (
            <div
              key={teachers._id}
              className="bg-slate-100 rounded-sm overflow-hidden relative "
            >
              <img className="h-40 mx-auto" src={teachers.teacherImg} alt="" />
              <div className="text-center my-4">
                <h4 className="my-2">{teachers.caption}</h4>
              </div>
              <button
                onClick={() => handleDeleteTeacher(teachers._id)}
                className="bg-white  rounded-3xl absolute top-2 right-2 text-red-500"
              >
                <DeleteIcon className="p-1" />
              </button>
            </div>
          );
        })}
      </div>

      <div
        className={`relative z-10 ${modal}`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <form
              onSubmit={handleAddGallery}
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <input
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  name="caption"
                  placeholder="ক্যাপসন প্রবেশ করান"
                />
                <input
                  name="img"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="file"
                />
              </div>
              <div className="flex justify-end gap-5 p-5">
                <label
                  onClick={() => setModal("hidden")}
                  className="px-5 cursor-pointer bg-red-500 rounded-sm py-1 text-white"
                >
                  বাতিল করুন
                </label>
                <button className="px-5 bg-teal-500 rounded-sm py-1 text-white">
                  সাবমিট
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGallery;

// export default AddGallery;
