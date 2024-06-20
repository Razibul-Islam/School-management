/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const AddTeacher = () => {
  const [modal, setModal] = useState("hidden");
  const [teacher, setTeacher] = useState([]);
  const apiKey = "baca7cebf7d1365bf97c10bb391342f9";

  const handleAddTeacher = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const post = e.target.post.value;
    const img = e.target.img.files[0];
    const address = e.target.address.value;
    const email = e.target.email.value;
    const mother_name = e.target.mother_name.value;
    const father_name = e.target.father_name.value;

    var formData = new FormData();
    formData.append("image", img);

    try {
      // Upload image to imgbb
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const imageData = await response.json();

      if (imageData.success) {
        const teacherImg = imageData.data.url;

        const teacherData = {
          name,
          post,
          phone,
          teacherImg,
          address,
          email,
          mother_name,
          father_name,
        };

        // Send teacher data to backend
        const res = await fetch("http://localhost:5000/add-teacher", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(teacherData),
        });

        const result = await res.json();

        if (result.acknowledged) {
          toast.success("যোগ সম্পূর্ণ হয়েছে");
          setModal("hidden");
          e.target.reset();
          fetchTeachers();
        }
      } else {
        console.error("Image upload failed:", imageData);
      }
    } catch (error) {
      console.error("Error adding teacher:", error);
    }
  };

  const handledeleteTeacher = async (_id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/delete-teacher?_id=${_id}`,
        {
          method: "DELETE",
        }
      );

      const result = await res.json();

      if (result) {
        toast.success("মুছে ফেলা হয়েছে");
        fetchTeachers(); // Refresh teacher list
      }
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  const fetchTeachers = async () => {
    try {
      const res = await fetch("http://localhost:5000/get-teacher");
      const data = await res.json();
      setTeacher(data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <div className="p-5 w-full relative">
      <h2 className="text-xl text-center my-5">শিক্ষক তালিকা</h2>
      <button
        onClick={() => setModal("")}
        className="px-5 py-2 bg-teal-500 text-white rounded-3xl"
      >
        নতুন শিক্ষক যোগ করুন
      </button>
      <div className="my-5 grid grid-cols-4 gap-10">
        {teacher.map((teachers) => {
          return (
            <div
              className="bg-slate-100 rounded-sm overflow-hidden relative "
              key={teachers._id}
            >
              <img className="h-40 mx-auto" src={teachers.teacherImg} alt="" />
              <div className="text-center my-4">
                <h4>{teachers.post}</h4>
                <h4>{teachers.name}</h4>
                <h4 className="my-2">
                  <LocalPhoneIcon className="text-teal-500 p-1" />{" "}
                  {teachers.phone}
                </h4>
              </div>
              <button
                onClick={() => handledeleteTeacher(teachers._id)}
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
              onSubmit={handleAddTeacher}
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    className="block my-3 focus:outline-none border w-full p-2"
                    type="text"
                    name="name"
                    placeholder="নাম প্রবেশ করান"
                  />
                  <select
                    className="block my-3 focus:outline-none border w-full p-2"
                    name="post"
                  >
                    <option value="null">--পদবী নির্বাচন করুন--</option>
                    <option value="প্রধান শিক্ষক">প্রধান শিক্ষক</option>
                    <option value="সহকারি প্রধান শিক্ষক">
                      সহকারি প্রধান শিক্ষক
                    </option>
                    <option value="ভারপ্রাপ্ত প্রধান শিক্ষক">
                      ভারপ্রাপ্ত প্রধান শিক্ষক
                    </option>
                    <option value="সহকারি শিক্ষক">সহকারি শিক্ষক</option>
                  </select>

                  <input
                    className="block my-3 focus:outline-none border w-full p-2"
                    type="text"
                    name="father_name"
                    placeholder="পিতার নাম"
                  />
                  <input
                    className="block my-3 focus:outline-none border w-full p-2"
                    type="text"
                    name="mother_name"
                    placeholder="মাতার নাম"
                  />
                  <input
                    className="block my-3 focus:outline-none border w-full p-2"
                    type="text"
                    name="phone"
                    placeholder="ফোন নাম্বার প্রবেশ করান"
                  />
                  <input
                    className="block my-3 focus:outline-none border w-full p-2"
                    type="text"
                    name="email"
                    placeholder="ইমেইল আইডি প্রবেশ করান"
                  />
                  <input
                    className="block my-3 focus:outline-none border w-full p-2"
                    type="text"
                    name="address"
                    placeholder="ঠিকানা প্রবেশ করান"
                  />
                  <input
                    name="img"
                    className="block my-3 focus:outline-none border w-full p-2"
                    type="file"
                  />
                </div>
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

export default AddTeacher;
