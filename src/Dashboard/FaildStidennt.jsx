import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";

const FaildStidennt = () => {
  const [modal, setModal] = useState("hidden");
  const [modalTwo, setModalTwo] = useState("hidden");
  const [failedStudent, setFailedStudent] = useState([]);
  const [modified, setModified] = useState([]);

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

  const handleAddFailedStudent = (e) => {
    e.preventDefault();
    const data = e.target;
    const classes = data.class.value;
    const department = data.department.value;
    const group = data.group.value;
    const failedMaleStudent = data.failedMaleStudent.value;
    const failedFemaleStudent = data.failedFemaleStudent.value;
    const year = data.year.value;
    const info = {
      classes,
      department,
      group,
      failedMaleStudent,
      failedFemaleStudent,
      year,
    };
    // console.log(info);
    fetch("http://localhost:5000/post-fail-student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("সম্পূর্ণ হয়েছে");
          setModal("hidden");
          e.target.reset();
        }
      });
  };

  const handleDeleteFailedStudent = (id) => {
    fetch(`http://localhost:5000/delete-fail-student?_id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("মুছে ফেলা হয়েছে");
        }
      });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const data = e.target;
    const classes = data.class.value;
    const department = data.department.value;
    const group = data.group.value;
    const failedMaleStudent = data.failedMaleStudent.value;
    const failedFemaleStudent = data.failedFemaleStudent.value;
    const year = data.year.value;
    const id = data.id.value;
    const info = {
      classes,
      department,
      group,
      failedFemaleStudent,
      failedMaleStudent,
      year,
    };
    fetch(`http://localhost:5000/edit-fail-student?_id=${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
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

  const handleEdit = (student) => {
    console.log(student);
    setModified(student);
    setModalTwo("");
  };

  useEffect(() => {
    fetch("http://localhost:5000/get-fail-student")
      .then((res) => res.json())
      .then((data) => setFailedStudent(data));
  }, [handleAddFailedStudent, handleDeleteFailedStudent, handleEditSubmit]);

  return (
    <div className="p-5">
      <h1 className="text-center text-xl my-5">
        ফেল করা ছাত্র ছাত্রীদের তালিকা
      </h1>
      <button
        onClick={() => setModal("")}
        className="px-5 py-2 bg-teal-500 text-white rounded-3xl"
      >
        নতুন যোগ করুণ
      </button>
      <hr className="my-5" />
      <div>
        <table id="table">
          <tr>
            <th>শ্রেণী</th>
            <th>শাখা</th>
            <th>গ্রুপ</th>
            <th>বছর</th>
            <th>পরীক্ষার্থীর সংখ্যা (ছাত্র)</th>
            <th>পরীক্ষার্থীর সংখ্যা (ছাত্রী)</th>
            <th>Action</th>
          </tr>
          {failedStudent.map((student) => {
            return (
              <tr>
                <td>{student.classes}</td>
                <td>{student.department}</td>
                <td>{student.group}</td>
                <td>{student.year}</td>
                <td>{student.failedMaleStudent}</td>
                <td>{student.failedFemaleStudent}</td>
                <td className="flex items-center gap-3">
                  <button
                    onClick={() => handleDeleteFailedStudent(student._id)}
                    className="text-red-500"
                  >
                    <DeleteIcon></DeleteIcon>
                  </button>
                  <button
                    onClick={() => handleEdit(student)}
                    className="text-green-500"
                  >
                    {editIcon}
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>

      {/* modal  */}
      <div
        className={`relative z-10 ${modal}`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <form
            onSubmit={handleAddFailedStudent}
            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 grid grid-cols-2 gap-3">
                <select
                  name="class"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option value="null">--শ্রেণি নির্বাচন করুন--</option>
                  <option value="৬ষ্ঠ">৬ষ্ঠ</option>
                  <option value="৭ম">৭ম</option>
                  <option value="৮ম">৮ম</option>
                  <option value="নবম">নবম</option>
                  <option value="দশম">দশম</option>
                </select>
                <select
                  name="department"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option value="null">--শাখা নির্বাচন করুন--</option>
                  <option value="ক">ক</option>
                  <option value="খ">খ</option>
                </select>
                <select
                  name="group"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option value="null">--বিভাগ নির্বাচন করুন--</option>
                  <option value="বিজ্ঞান">বিজ্ঞান</option>
                  <option value="ব্যবসায় শিক্ষা">ব্যবসায় শিক্ষা</option>
                  <option value="মানবিক">মানবিক</option>
                </select>
                <input
                  name="failedMaleStudent"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="number"
                  placeholder="পরীক্ষার্থীর সংখ্যা (ছাত্র)"
                />
                <input
                  name="failedFemaleStudent"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="number"
                  placeholder="পরীক্ষার্থীর সংখ্যা (ছাত্রী)"
                />
                <input
                  name="year"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="number"
                  placeholder="পরীক্ষার বছর"
                />
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

      {/* modal 2*/}
      <div
        className={`relative z-10 ${modalTwo}`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <form
            onSubmit={handleEditSubmit}
            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 grid grid-cols-2 gap-3">
                <select
                  name="class"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option value="null">--শ্রেণি নির্বাচন করুন--</option>
                  <option value="৬ষ্ঠ">৬ষ্ঠ</option>
                  <option value="৭ম">৭ম</option>
                  <option value="৮ম">৮ম</option>
                  <option value="নবম">নবম</option>
                  <option value="দশম">দশম</option>
                </select>
                <select
                  name="department"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option value="null">--শাখা নির্বাচন করুন--</option>
                  <option value="ক">ক</option>
                  <option value="খ">খ</option>
                </select>
                <select
                  name="group"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option value="null">--বিভাগ নির্বাচন করুন--</option>
                  <option value="বিজ্ঞান">বিজ্ঞান</option>
                  <option value="ব্যবসায় শিক্ষা">ব্যবসায় শিক্ষা</option>
                  <option value="মানবিক">মানবিক</option>
                </select>
                <input
                  name="failedMaleStudent"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="number"
                  defaultValue={modified.failedMaleStudent}
                  placeholder="পরীক্ষার্থীর সংখ্যা (ছাত্র)"
                />
                <input
                  name="failedFemaleStudent"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="number"
                  defaultValue={modified.failedFemaleStudent}
                  placeholder="পরীক্ষার্থীর সংখ্যা (ছাত্রী)"
                />
                <input
                  name="year"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="number"
                  defaultValue={modified.year}
                  placeholder="পরীক্ষার বছর"
                />
                <input type="hidden" name="id" defaultValue={modified._id} />
              </div>
              <div className="flex justify-end gap-5 p-5">
                <label
                  onClick={() => setModalTwo("hidden")}
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

export default FaildStidennt;
