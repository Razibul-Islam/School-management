import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleTeacher = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    
    fetch(`https://school-server-umber.vercel.app/single-teacher?_id=${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  return (
    <div className="max-w-6xl mx-auto flex gap-10 my-20 bg-slate-100 rounded-sm border-dashed border-teal-600 border-2">
      <div>
        <img className="h-72" src={data.teacherImg} alt="" />
      </div>
      <div className="space-y-2 py-3">
        <h3 className="text-xl text-teal-600">নাম : {data.name}</h3>
        <h3>পদবি : {data.post}</h3>
        <h3>ফোন নাম্বার : {data.phone}</h3>
        <h3>ইমেইল এড্রেস : {data.email}</h3>
        <h3>বাবার নাম : {data.father_name}</h3>
        <h3>মায়ের নাম : {data.mother_name}</h3>
        <h3>ঠিকানা : {data.address}</h3>
      </div>
    </div>
  );
};

export default SingleTeacher;
