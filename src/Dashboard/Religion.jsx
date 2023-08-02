import React, { useEffect, useState } from "react";

const Religion = () => {
  const [muslim, setMuslim] = useState([]);
  const [hindu, setHindu] = useState([]);
  const [christians, setChristians] = useState([]);
  const [other, setOther] = useState([]);
  // console.log(muslim);
  useEffect(() => {
    fetch("http://localhost:5000/get-allStudent")
      .then((res) => res.json())
      .then((data) => {
        let muslim = data.filter((religion) => religion.religion === "muslim");
        setMuslim(muslim);
        let hindu = data.filter((religion) => religion.religion === "hindu");
        setHindu(hindu);
        let Christians = data.filter(
          (religion) => religion.religion === "christian"
        );
        setChristians(Christians);
        let Other = data.filter((religion) => religion.religion === "other");
        setOther(Other);
      });
  }, []);

  return (
    <div className="p-5 w-full relative">
      <h2 className="text-xl text-center my-5">ধর্ম</h2>
      <div className="mt-5">
        <table>
          <thead>
            <th>ধর্ম </th>
            <th>ছাত্র ছাত্রীর সংখ্যা (ছাত্র)৬ষ্ঠ-১০ম</th>
            <th>ছাত্র ছাত্রীর সংখ্যা (ছাত্রী)৬ষ্ঠ-১০ম</th>
          </thead>
          <tbody>
            <tr>
              <td>মুসলিম</td>
              <td>{muslim.filter((male) => male.gender === "male").length}</td>
              <td>
                {muslim.filter((male) => male.gender === "female").length}
              </td>
            </tr>
            <tr>
              <td>হিন্দু</td>
              <td>{hindu.filter((male) => male.gender === "male").length}</td>
              <td>{hindu.filter((male) => male.gender === "female").length}</td>
            </tr>
            <tr>
              <td>খ্রিস্টান</td>
              <td>
                {christians.filter((male) => male.gender === "male").length}
              </td>
              <td>
                {christians.filter((male) => male.gender === "female").length}
              </td>
            </tr>
            <tr>
              <td>অন্যান্য</td>
              <td>{other.filter((male) => male.gender === "male").length}</td>
              <td>{other.filter((male) => male.gender === "female").length}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Religion;
