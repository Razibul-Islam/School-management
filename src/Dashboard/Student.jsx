import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

const Six = () => {
  const [modal, setModal] = useState("hidden");
  const [modalTwo, setModalTwo] = useState("hidden");
  const [student, setStudent] = useState([]);
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

  const handleAddStudent = async (e) => {
    e.preventDefault();
    let classId;
    const classValue = e.target.class.value;

    switch (classValue) {
      case "ষষ্ঠ":
        classId = "6";
        break;
      case "সপ্তম":
        classId = "7";
        break;
      case "অষ্টম":
        classId = "8";
        break;
      case "নবম":
        classId = "9";
        break;
      case "দশম":
        classId = "10";
        break;
      default:
        classId = null;
        break;
    }

    const data = e.target;
    const name = data.name.value;
    const role = data.role.value;
    const yourClass = data.class.value;
    const father_name = data.father_name.value;
    const mother_name = data.mother_name.value;
    const gender = data.gender.value;
    const AnnualIncome = data.AnnualIncome.value;
    const dropout_student = data.dropout_student.value;
    const group = data.group.value;
    const studentCategory = data.studentCategory.value;
    const religion = data.religion.value;
    const subject = data.subject.value;
    const date_of_birth = data.date_of_birth.value;
    const dipperment = data.dipperment.value;
    const phone = data.phone.value;
    const address = data.address.value;
    const img = data.img.files[0];
    const class_id = classId;

    // Upload image to ImgBB
    const formData = new FormData();
    formData.append("image", img);
    const imgbbApiKey = "baca7cebf7d1365bf97c10bb391342f9"; // Replace with your ImgBB API key

    try {
      const imgResponse = await fetch(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const imgData = await imgResponse.json();
      const photo = imgData.data.url;

      const info = {
        name,
        role,
        yourClass,
        father_name,
        mother_name,
        date_of_birth,
        class_id,
        dipperment,
        phone,
        address,
        photo,
        subject,
        gender,
        AnnualIncome,
        dropout_student,
        group,
        studentCategory,
        religion,
      };

      if (photo) {
        const url = `https://school-server-umber.vercel.app/add-student`;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(info),
        });
        const result = await response.json();
        if (result.acknowledged) {
          toast.success("সম্পূর্ণ হয়েছে");
          setModal("hidden");
          e.target.reset();
        }
      }
    } catch (error) {
      console.error("Error uploading image or adding student:", error);
      toast.error("Some error occurred. Please try again.");
    }
  };

  const handleDeleteStudent = async (_id) => {
    const url = `https://school-server-umber.vercel.app/delete-student?_id=${_id}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result.deletedCount) {
        toast.success("মুছে ফেলা হয়েছে");
      }
    } catch (error) {
      console.error("Error deleting student:", error);
      toast.error("Some error occurred. Please try again.");
    }
  };

  const handleEdit = (student) => {
    setModified(student);
    setModalTwo("");
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    let classId;
    const classValue = e.target.class.value;

    switch (classValue) {
      case "ষষ্ঠ":
        classId = "6";
        break;
      case "সপ্তম":
        classId = "7";
        break;
      case "অষ্টম":
        classId = "8";
        break;
      case "নবম":
        classId = "9";
        break;
      case "দশম":
        classId = "10";
        break;
      default:
        classId = null;
        break;
    }

    const data = e.target;
    const name = data.name.value;
    const role = data.role.value;
    const yourClass = data.class.value;
    const father_name = data.father_name.value;
    const mother_name = data.mother_name.value;
    const gender = data.gender.value;
    const AnnualIncome = data.AnnualIncome.value;
    const dropout_student = data.dropout_student.value;
    const group = data.group.value;
    const studentCategory = data.studentCategory.value;
    const religion = data.religion.value;
    const subject = data.subject.value;
    const date_of_birth = data.date_of_birth.value;
    const dipperment = data.dipperment.value;
    const phone = data.phone.value;
    const address = data.address.value;
    const id = data.id.value;
    const class_id = classId;

    const info = {
      name,
      role,
      yourClass,
      father_name,
      mother_name,
      date_of_birth,
      class_id,
      dipperment,
      phone,
      address,
      subject,
      gender,
      AnnualIncome,
      dropout_student,
      group,
      studentCategory,
      religion,
      id,
    };

    const url = `https://school-server-umber.vercel.app/update-student`;
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(info),
      });
      const result = await response.json();
      if (result.acknowledged) {
        toast.success("সম্পূর্ণ হয়েছে");
        setModalTwo("hidden");
        e.target.reset();
      }
    } catch (error) {
      console.error("Error updating student:", error);
      toast.error("Some error occurred. Please try again.");
    }
  };

  useEffect(() => {
    const url = "https://school-server-umber.vercel.app/get-allStudent";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStudent(data))
      .catch((error) => {
        console.error("Error fetching students:", error);
        toast.error("Some error occurred. Please try again.");
      });
  }, []);

  // handleDeleteStudent, handleAddStudent

  return (
    <div className="p-5">
      <h1 className="text-center text-xl my-5">ছাত্র-ছাত্রীদের তালিকা</h1>
      <button
        onClick={() => setModal("")}
        className="px-5 py-2 bg-teal-500 text-white rounded-3xl"
      >
        নতুন ছাত্র-ছাত্রী যোগ করুণ
      </button>
      <hr className="my-5" />
      <div>
        <table id="table">
          <tr>
            <th>রোল</th>
            <th>ছবি</th>
            <th>নাম</th>
            <th>শ্রেণী</th>
            <th>শাখা</th>
            <th>ফোন</th>
            <th>পিতার নাম</th>
            <th>মাতার নাম</th>
            <th>ঠিকানা</th>
            <th>জন্ম তারিখ</th>
            <th>Action</th>
          </tr>
          {student.map((students) => {
            return (
              <tr key={students._id}>
                <td>{students.role}</td>
                <td>
                  <img
                    className="h-10 w-10 rounded-full"
                    src={
                      students.photo
                        ? students.photo
                        : "https://t4.ftcdn.net/jpg/02/17/34/67/360_F_217346796_TSg5VcYjsFxZtIDK6Qdctg3yqAapG7Xa.jpg"
                    }
                    alt=""
                  />
                </td>
                <td>{students.name}</td>
                <td>{students.yourClass}</td>
                <td>{students.dipperment}</td>
                <td>{students.phone}</td>
                <td>{students.father_name}</td>
                <td>{students.mother_name}</td>
                <td>{students.address}</td>
                <td>{students.date_of_birth}</td>
                <td className="flex items-center gap-3">
                  <button
                    onClick={() => handleDeleteStudent(students._id)}
                    className="text-red-500"
                  >
                    <DeleteIcon></DeleteIcon>
                  </button>
                  <button
                    onClick={() => handleEdit(students)}
                    className="text-green-500"
                  >
                    {editIcon}
                  </button>
                  <Link
                    // onClick={() => handleView(students)}
                    className="text-green-500"
                    to={`/admin/student/${students._id}`}
                  >
                    <VisibilityIcon />
                  </Link>
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
            onSubmit={handleAddStudent}
            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 grid grid-cols-3 gap-3">
                <input
                  name="name"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  placeholder="নাম প্রবেশ করান"
                />
                <input
                  name="role"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  placeholder="রোল নাম্বার প্রবেশ করান"
                />
                <select
                  name="class"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option value="null">--শ্রেণি নির্বাচন করুন--</option>
                  <option value="ষষ্ঠ">ষষ্ঠ</option>
                  <option value="সপ্তম">সপ্তম</option>
                  <option value="অষ্টম">অষ্টম</option>
                  <option value="নবম">নবম</option>
                  <option value="দশম">দশম</option>
                </select>
                <input
                  name="dipperment"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  placeholder="শাখা"
                />
                <input
                  name="father_name"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  placeholder="পিতার নাম"
                />
                <input
                  name="mother_name"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  placeholder="মাতার নাম"
                />
                <select
                  name="dropout_student"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option value="null">রিপিটার</option>
                  <option value="yes">হ্যা</option>
                  <option value="no">না</option>
                </select>

                <select
                  name="group"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option value="null">--গ্রুপ নির্বাচন করুন--</option>
                  <option value="none">কোনোটিই নয়</option>
                  <option value="science">বিজ্ঞান</option>
                  <option value="Humanities">মানবিক</option>
                  <option value="Business">ব্যবসায় শিক্ষা</option>
                </select>
                <select
                  name="subject"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option value="null">--বিষয়--</option>
                  <option value="none">কোনোটিই নয়</option>
                  <option value="higherMath">উচ্চতর গণিত</option>
                  <option value="agriculture">কৃষি</option>
                </select>
                <select
                  name="AnnualIncome"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option value="null">--বার্ষিক আয়--</option>
                  <option value="0-30000">০ - ৩০০০০</option>
                  <option value="30001-100000">৩০০০১ - ১০০০০০</option>
                  <option value="100001-300000">১০০০০১ - ৩০০০০০</option>
                  <option value="300001-500000">৩০০০০১ - ৫০০০০০</option>
                  <option value="500000+">৫০০০০০+</option>
                </select>
                <select
                  name="studentCategory"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option value="null">--স্টুডেন্ট ক্যাটাগরি--</option>
                  <option value="local">স্থানীয়</option>
                  <option value="SmallEthnicGroup">ক্ষুদ্র নৃ-গোষ্ঠী</option>
                  <option value="Landless(Parents)">ভূমিহীন (অভিভাবক)</option>
                </select>
                <select
                  name="religion"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option value="null">--ধর্ম--</option>
                  <option value="muslim">মুসলিম</option>
                  <option value="hindu">হিন্দু</option>
                  <option value="christian">খ্রিষ্টান</option>
                </select>

                <input
                  name="phone"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  placeholder="অভিবাবক এর মোবাইল নাম্বার"
                />
                <input
                  name="date_of_birth"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="date"
                  placeholder="জন্ম তারিখ প্রবেশ করান"
                />
                <select
                  name="gender"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option value="null">--লিঙ্গ নির্বাচন করুন--</option>
                  <option value="male">পুরুষ</option>
                  <option value="female">মহিলা</option>
                  <option value="other">অন্যান্য</option>
                </select>
                <input
                  name="address"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  placeholder="ঠিকানা"
                />
                <input
                  name="img"
                  type="file"
                  className="block my-3 focus:outline-none border w-full p-2"
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
            onSubmit={handleSubmitEdit}
            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 grid grid-cols-3 gap-3">
                <input
                  name="name"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  defaultValue={modified.name}
                  placeholder="নাম প্রবেশ করান"
                />
                <input
                  name="role"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  defaultValue={modified.role}
                  placeholder="রোল নাম্বার প্রবেশ করান"
                />
                <select
                  name="class"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option disabled value="null">
                    --শ্রেণি নির্বাচন করুন--
                  </option>
                  <option value="ষষ্ঠ">ষষ্ঠ</option>
                  <option value="সপ্তম">সপ্তম</option>
                  <option value="অষ্টম">অষ্টম</option>
                  <option value="নবম">নবম</option>
                  <option value="দশম">দশম</option>
                </select>
                <input
                  name="dipperment"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  defaultValue={modified.dipperment}
                  placeholder="শাখা"
                />
                <input
                  name="father_name"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  defaultValue={modified.father_name}
                  placeholder="পিতার নাম"
                />
                <input
                  name="mother_name"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  defaultValue={modified.mother_name}
                  placeholder="মাতার নাম"
                />
                <select
                  name="dropout_student"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option value="null">রিপিটার</option>
                  <option value="yes">হ্যা</option>
                  <option value="no">না</option>
                </select>

                <select
                  name="group"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option value="null">--গ্রুপ নির্বাচন করুন--</option>
                  <option value="science">বিজ্ঞান</option>
                  <option value="Humanities">মানবিক</option>
                  <option value="Business">ব্যবসায় শিক্ষা</option>
                </select>
                <select
                  name="subject"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option value="null">--বিষয়--</option>
                  <option value="higherMath">উচ্চতর গণিত</option>
                  <option value="agriculture">কৃষি</option>
                </select>
                <select
                  name="AnnualIncome"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option value="null">--বার্ষিক আয়--</option>
                  <option value="0-30000">০ - ৩০০০০</option>
                  <option value="30001-100000">৩০০০১ - ১০০০০০</option>
                  <option value="100001-300000">১০০০০১ - ৩০০০০০</option>
                  <option value="300001-500000">৩০০০০১ - ৫০০০০০</option>
                  <option value="500000+">৫০০০০০+</option>
                </select>
                <select
                  name="studentCategory"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option value="null">--স্টুডেন্ট ক্যাটাগরি--</option>
                  <option value="SmallEthnicGroup">ক্ষুদ্র নৃ-গোষ্ঠী</option>
                  <option value="Landless(Parents)">ভূমিহীন (অভিভাবক)</option>
                </select>
                <select
                  name="religion"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option value="null">--ধর্ম--</option>
                  <option value="muslim">মুসলিম</option>
                  <option value="hindu">হিন্দু</option>
                  <option value="christian">খ্রিষ্টান</option>
                  <option value="other">অন্যান্য</option>
                </select>
                <select
                  name="gender"
                  className="block my-3 focus:outline-none border w-full p-2"
                >
                  <option value="null">--লিঙ্গ নির্বাচন করুন--</option>
                  <option value="male">পুরুষ</option>
                  <option value="female">মহিলা</option>
                  <option value="other">অন্যান্য</option>
                </select>
                <input
                  name="phone"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  defaultValue={modified.phone}
                  placeholder="অভিবাবক এর মোবাইল নাম্বার"
                />
                <input
                  name="date_of_birth"
                  className="block my-3 focus:outline-none border w-full p-2"
                  defaultValue={modified.date_of_birth}
                  type="date"
                  placeholder="জন্ম তারিখ প্রবেশ করান"
                />
                <input
                  name="address"
                  className="block my-3 focus:outline-none border w-full p-2"
                  type="text"
                  defaultValue={modified.address}
                  placeholder="ঠিকানা"
                />
                {/* <input name='img' type="file" className='block my-3 focus:outline-none border w-full p-2' /> */}
                <input type="hidden" name="id" value={modified._id} />
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

export default Six;
