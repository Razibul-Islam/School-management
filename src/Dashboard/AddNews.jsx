import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";

const AddNews = () => {
  const [modal, setModal] = useState("hidden");
  const [news, setnews] = useState([]);

  const handleAddTeacher = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const descripetion = e.target.descripetion.value;
    const img = e.target.img.files[0];
    const time = Date.now();

    var formData = new FormData();
    formData.append("file", img);

    fetch("https://upload.rainbosoft.com/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        const imgUrl = data.url;
        const info = { title, descripetion, imgUrl, time };
        if (data.url) {
          const url = `https://school-server-liard.vercel.app/add-news`;

          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(info),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                toast.success("সম্পূর্ণ হয়েছে");
                e.target.reset();
                setModal("hidden");
              }
            });
        }
      });
  };

  const handleDelete = (_id) => {
    const url = `https://school-server-liard.vercel.app/delete-news?_id=${_id}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("মুছে ফেলা হয়েছে");
      });

    console.log(url);
  };

  useEffect(() => {
    const url = "https://school-server-liard.vercel.app/get-news";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setnews(data));
  }, [handleDelete, handleAddTeacher]);

  return (
    <div className="px-5 relative">
      <h2 className="text-xl text-center my-5">সর্বশেষ খবর</h2>
      <button
        onClick={() => setModal("")}
        className="px-5 py-2 bg-teal-500 text-white rounded-3xl"
      >
        নতুন খবর যোগ করুন
      </button>
      <div className="my-5 p-5">
        {news.map((newses) => {
          return (
            <div className="flex items-start gap-5 my-5 bg-slate-100 rounded overflow-hidden relative right-5 p-5">
              <img className="h-40" src={"http://" + newses.imgUrl} alt="" />
              <div>
                <p>{newses.title}</p>
                <p>{newses.descripetion}</p>
                <div>
                  <button
                    onClick={() => handleDelete(newses._id)}
                    className="text-red-500 absolute bottom-5 bg-white rounded-full shadow"
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        class={`relative z-10 ${modal}`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <form
            onSubmit={handleAddTeacher}
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <input
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  name="title"
                  placeholder="টাইটেল প্রবেশ করান"
                />
                <input
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="file"
                  name="img"
                />
                <textarea
                  name="descripetion"
                  placeholder="বর্ণনা দিন"
                  className="block h-40 my-3 focus:outline-none border w-full p-2"
                ></textarea>
              </div>
              <div className="flex justify-end gap-5 p-5">
                <label
                  onClick={() => setModal("hidden")}
                  className="px-5 bg-red-500 rounded-sm py-1 text-white"
                >
                  বাতিল করুন
                </label>
                <button className="px-5 bg-teal-500 rounded-sm py-1 text-white">
                  সাবমিট
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNews;
