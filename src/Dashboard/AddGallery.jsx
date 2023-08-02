import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const AddGallery = () => {
  const [modal, setModal] = useState("hidden");
  const [teacher, setTeacher] = useState([]);

  const handleAddGallery = (e) => {
    e.preventDefault();

    const caption = e.target.caption.value;
    const img = e.target.img.files[0];

    var formData = new FormData();
    formData.append("file", img);

    fetch("https://upload.rainbosoft.com/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        const teacherImg = data.url;
        if (data) {
          const data = { caption, teacherImg };
          const url = `https://school-server-razibul-islam.vercel.app/add-gallery`;
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("যোগ সম্পূর্ণ হয়েছে");
                setModal("hidden");
                e.target.reset();
                console.log(data);
              }
            });
        }
      });
  };

  const handledeleteTeacher = (_id) => {
    const url = `https://school-server-razibul-islam.vercel.app/gallery?_id=${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("মুছে ফেলা হয়েছে");
        }
      });
  };

  useEffect(() => {
    fetch("https://school-server-razibul-islam.vercel.app/gallery")
      .then((res) => res.json())
      .then((data) => setTeacher(data));
  }, [handleAddGallery, handledeleteTeacher]);

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
            <div className="bg-slate-100 rounded-sm overflow-hidden relative ">
              <img
                className="h-40"
                src={"https://" + teachers.teacherImg}
                alt=""
              />
              <div className="text-center my-4">
                <h4 className="my-2">{teachers.caption}</h4>
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
