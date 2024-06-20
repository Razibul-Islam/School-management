import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleStudent = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    
    fetch(`https://school-server-umber.vercel.app/single-student?_id=${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);
  return (
    <div>
      <h1 className="text-center text-xl my-5">পূর্ণ তথ্য</h1>
      <div className="max-w-6xl mx-auto flex gap-10 mb-20 bg-slate-100 rounded-sm border-dashed border-teal-600 border-2">
        <div>
          <img className="h-72" src={data.photo} alt="" />
        </div>
        <div className="space-y-2 py-3 grid grid-cols-4">
          <h3 className="text-xl text-teal-600">নাম : {data.name}</h3>
          <h3>ফোন নাম্বার : {data.phone}</h3>
          <h3>ইমেইল এড্রেস : {data.email}</h3>
          <h3>বাবার নাম : {data.father_name}</h3>
          <h3>মায়ের নাম : {data.mother_name}</h3>
          <h3>রোল : {data.role}</h3>
          <h3>ক্লাস : {data.yourClass}</h3>
          <h3>জন্ম তারিখ : {data.date_of_birth}</h3>
          {/* <h3>ঠিকানা : {data.class_id}</h3> */}
          <h3>ডিপার্টমেন্ট : {data.dipperment}</h3>
          <h3>ফোন : {data.phone}</h3>
          <h3>ঠিকানা : {data.address}</h3>
          <h3>বিষয় : {data.subject}</h3>
          <h3>লিঙ্গ : {data.gender}</h3>
          <h3>বার্ষিক আয় : {data.AnnualIncome}</h3>
          <h3>রিপিটার : {data.dropout_student}</h3>
          <h3>গ্রুপ : {data.group}</h3>
          <h3>স্টুডেন্ট ক্যাটাগরি : {data.studentCategory}</h3>
          <h3>ধর্ম : {data.religion}</h3>
        </div>
      </div>
    </div>
  );
};

export default SingleStudent;
