/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
// import EditNoteIcon from "@mui/icons-material/EditNote";

const StudentCabinet = () => {
  const [modal, setModal] = useState("hidden");
  const [modalTwo, setModalTwo] = useState("hidden");
  const [cabinet, setCabinet] = useState([]);
  const [newCabinet, setNewCabinet] = useState({});

  const editIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  );

  const handleCabinet = (e) => {
    e.preventDefault();
    const Name = e.target.name.value;
    const EIIN = e.target.eiin.value;
    const Member = e.target.member.value;
    const Ready = e.target.ready.value;
    const LastUpdate = e.target.lastUpdate.value;
    const info = { Name, EIIN, Member, Ready, LastUpdate };
    fetch("http://localhost:5000/add-cabinet", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("যোগ সম্পূর্ণ হয়েছে");
          setModal("hidden");
          e.target.reset();
        }
      });
  };

  const handledeleteCabinet = (_id) => {
    const url = `http://localhost:5000/delete-cabinet?_id=${_id}`;
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
  const handleEditCabinet = (e) => {
    e.preventDefault();
    const Name = e.target.name.value;
    const EIIN = e.target.eiin.value;
    const Member = e.target.member.value;
    const Ready = e.target.ready.value;
    const LastUpdate = e.target.lastUpdate.value;
    const id = e.target.id.value;
    const info = { Name, EIIN, Member, Ready, LastUpdate, id };

    const url = `http://localhost:5000/update-cabinet`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("সম্পূর্ণ হয়েছে");
          setModalTwo("hidden");
          e.target.reset();
        }
      });
  };

  const handleUpdateCabinet = (cabinet) => {
    setNewCabinet(cabinet);
    setModalTwo("");
  };

  useEffect(() => {
    fetch("http://localhost:5000/get-cabinet")
      .then((res) => res.json())
      .then((data) => setCabinet(data));
  }, [handleCabinet, handledeleteCabinet, handleEditCabinet]);

  return (
    <div className="p-5 w-full relative">
      <h2 className="text-xl text-center my-5">স্টুডেন্ট কেবিনেট তালিকা</h2>
      <button
        className="px-5 py-2 bg-teal-500 text-white rounded-3xl"
        onClick={() => setModal("")}
      >
        স্টুডেন্ট কেবিনেট যোগ করুন
      </button>
      <div className="mt-5">
        <table>
          <thead>
            <th>#</th>
            <th>প্রতিষ্ঠানের নাম</th>
            <th>ইআইআইএন</th>
            <th>মোট সদস্য</th>
            <th>গঠন তারিখ</th>
            <th>সর্বশেষ আপডেট তারিখ</th>
            <th>অ্যাকশন</th>
          </thead>
          <tbody>
            {cabinet.map((singleCabinet, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{singleCabinet.Name}</td>
                <td>{singleCabinet.EIIN}</td>
                <td>{singleCabinet.Member}</td>
                <td>{singleCabinet.Ready}</td>
                <td>{singleCabinet.LastUpdate}</td>
                <td className="flex items-center gap-3">
                  <button
                    onClick={() => handleUpdateCabinet(singleCabinet)}
                    className="bg-white rounded-3xl text-red-500"
                  >
                    {editIcon}
                  </button>
                  <button
                    onClick={() => handledeleteCabinet(singleCabinet._id)}
                    className="bg-white rounded-3xl text-red-500"
                  >
                    <DeleteIcon className="p-1 scale-150" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}

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
              onSubmit={handleCabinet}
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <input
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  name="name"
                  placeholder="প্রতিষ্ঠানের নাম প্রবেশ করান"
                />
                <input
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  name="eiin"
                  placeholder="ইআইআইএন নাম্বার"
                />
                <input
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  name="member"
                  placeholder="সদস্য সংখ্যা"
                />
                <input
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="date"
                  name="ready"
                  placeholder="গঠনের তারিখ"
                />
                <input
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="date"
                  name="lastUpdate"
                  placeholder="সর্বশেষ আপডেট তারিখ"
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

      {/* Modal 2 */}
      <div
        className={`relative z-10 ${modalTwo}`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <form
              onSubmit={handleEditCabinet}
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <input
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  name="name"
                  defaultValue={newCabinet.Name}
                  placeholder="প্রতিষ্ঠানের নাম প্রবেশ করান"
                />
                <input
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  name="eiin"
                  defaultValue={newCabinet.EIIN}
                  placeholder="ইআইআইএন নাম্বার"
                />
                <input
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  name="member"
                  defaultValue={newCabinet.Member}
                  placeholder="সদস্য সংখ্যা"
                />
                <input
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="date"
                  name="ready"
                  defaultValue={newCabinet.Ready}
                  placeholder="গঠনের তারিখ"
                />
                <input
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="date"
                  name="lastUpdate"
                  defaultValue={newCabinet.LastUpdate}
                  placeholder="সর্বশেষ আপডেট তারিখ"
                />
                <input type="hidden" name="id" defaultValue={newCabinet._id} />
              </div>
              <div className="flex justify-end gap-5 p-5">
                <label
                  onClick={() => setModalTwo("hidden")}
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

export default StudentCabinet;
