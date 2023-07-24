import React, { useEffect, useState } from "react";
// import image1 from "../assets/t-1.jpg";
import image2 from "../assets/person.png";
// import PersonIcon from "@mui/icons-material/Person";

const Students = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    const url = "https://school-server-liard.vercel.app/get-allStudent";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStudentData(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-center text-xl mb-5">আমাদের ছাত্র ছাত্রী</h1>
      <div className="grid grid-cols-3 gap-10">
        {studentData.map((student, i) => (
          <article
            key={i}
            class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
          >
            <img alt="Office" src={image2} class="h-56 w-full object-contain" />
            {/* <PersonIcon className="w-2" /> */}

            <div class="p-4 sm:p-6">
              <h3 class="text-lg font-medium text-gray-900">
                নাম : {student.name}
              </h3>
              <h3 class="text-lg font-medium text-gray-900">
                শ্রেণী : {student.yourClass}
              </h3>
              <h3 class="text-lg font-medium text-gray-900">
                রোল নাম্বার : {student.role}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Students;
