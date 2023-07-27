import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Teachers = () => {
  const [teacherData, setTeacherData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/get-teacher";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeacherData(data));
  }, []);
  // console.log(teacherData);
  return (
    <div className="max-w-6xl mx-auto my-10">
      <h1 className="text-center text-xl mb-5">আমাদের শিক্ষক সমূহ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
        {teacherData.map((teacher, i) => (
          <div
            key={i}
            className="bg-slate-100 rounded-sm overflow-hidden relative "
          >
            <img
              className="h-60 w-full object-cover"
              src={"https://" + teacher.teacherImg}
              alt=""
            />
            <div className="text-center my-4">
              <h4>{teacher.post}</h4>
              <h4 className="my-2">{teacher.name}</h4>
              <Link
                to={`/teacher/${teacher._id}`}
                className="rounded-3xl inline-block bg-teal-300 px-3 py-2 bg-gradient-to-r from-teal-500 to-green-300 text-white font-bold text-right"
              >
                আরো দেখুন
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
