import React, { useEffect, useState } from "react";
// import image1 from "../assets/t-1.jpg";
// import image2 from "../assets/t-2.jpg";

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
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-center text-xl mb-5">আমাদের শিক্ষক সমূহ</h1>
      <div className="grid grid-cols-3 gap-10">
        {teacherData.map((teacher, i) => (
          <article
            key={i}
            class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
          >
            <img
              alt="Office"
              src={`https://${teacher.teacherImg}`}
              class="h-56 w-full object-cover"
            />

            <div class="p-4 sm:p-6">
              <h3 class="text-lg font-medium text-gray-900">
                নাম : {teacher.name}
              </h3>
              <h3 class="text-lg font-medium text-gray-900">
                পোস্ট : {teacher.post}
              </h3>
              <h3 class="text-lg font-medium text-gray-900">
                মোবাইল নাম্বার : {teacher.phone}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
