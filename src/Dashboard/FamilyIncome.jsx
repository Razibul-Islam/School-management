import React, { useEffect, useState } from "react";

const FamilyIncome = () => {
  const [thirtyThousand, setThirtyThousand] = useState([]);
  const [oneLakh, setOneLakh] = useState([]);
  const [threeLakh, setThreeLakh] = useState([]);
  const [fiveLakh, setFiveLakh] = useState([]);
  const [fiveLakhPlus, setFiveLakhPlus] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/get-allStudent")
      .then((res) => res.json())
      .then((data) => {
        let thirtyThousand = data.filter(
          (income) => income.AnnualIncome === "0-30000"
        );
        setThirtyThousand(thirtyThousand);
        let oneLakh = data.filter(
          (income) => income.AnnualIncome === "30001-100000"
        );
        setOneLakh(oneLakh);
        let threeLakh = data.filter(
          (income) => income.AnnualIncome === "100001-300000"
        );
        setThreeLakh(threeLakh);
        let fiveLakh = data.filter(
          (income) => income.AnnualIncome === "300001-500000"
        );
        setFiveLakh(fiveLakh);
        let fiveLakhPlus = data.filter(
          (income) => income.AnnualIncome === "500000+"
        );
        setFiveLakhPlus(fiveLakhPlus);
      });
  }, []);

  return (
    <div className="p-5 w-full relative">
      <h2 className="text-xl text-center my-5">বার্ষিক আয় এর তালিকা</h2>
      <div className="mt-5">
        <table>
          <thead>
            <th>বার্ষিক আয়</th>
            <th>পরীক্ষার্থীর সংখ্যা (ছাত্র)৬ষ্ঠ-১০ম</th>
            <th>পরীক্ষার্থীর সংখ্যা (ছাত্রী)৬ষ্ঠ-১০ম</th>
          </thead>
          <tbody>
            <tr>
              <td>0-30000</td>
              <td>
                {thirtyThousand.filter((male) => male.gender === "male").length}
              </td>
              <td>
                {
                  thirtyThousand.filter((male) => male.gender === "female")
                    .length
                }
              </td>
            </tr>
            <tr>
              <td>30001-100000</td>
              <td>{oneLakh.filter((male) => male.gender === "male").length}</td>
              <td>
                {oneLakh.filter((male) => male.gender === "female").length}
              </td>
            </tr>
            <tr>
              <td>100001-300000</td>
              <td>
                {threeLakh.filter((male) => male.gender === "male").length}
              </td>
              <td>
                {threeLakh.filter((male) => male.gender === "female").length}
              </td>
            </tr>
            <tr>
              <td>300001-500000</td>
              <td>
                {fiveLakh.filter((male) => male.gender === "male").length}
              </td>
              <td>
                {fiveLakh.filter((male) => male.gender === "female").length}
              </td>
            </tr>
            <tr>
              <td>500000+</td>
              <td>
                {fiveLakhPlus.filter((male) => male.gender === "male").length}
              </td>
              <td>
                {fiveLakhPlus.filter((male) => male.gender === "female").length}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FamilyIncome;
