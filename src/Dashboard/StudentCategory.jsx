import React, { useEffect, useState } from "react";

const StudentCategory = () => {
  const [SmallEthnicGroup, setSmallEthnicGroup] = useState([]);
  const [Landless, setLandless] = useState([]);
  const [Local, setLocal] = useState([]);

  useEffect(() => {
    fetch("https://school-server-umber.vercel.app/get-allStudent")
      .then((res) => res.json())
      .then((data) => {
        let thirtyThousand = data.filter(
          (income) => income.studentCategory === "SmallEthnicGroup"
        );
        setSmallEthnicGroup(thirtyThousand);

        let oneLakh = data.filter(
          (income) => income.studentCategory === "Landless(Parents)"
        );
        setLandless(oneLakh);

        let local = data.filter((income) => income.studentCategory === "local");
        setLocal(local);
      });
  }, []);

  return (
    <div className="p-5 w-full relative">
      <h2 className="text-xl text-center my-5">
        শিক্ষার্থীর ক্যাটাগরি এর তালিকা
      </h2>
      <div className="mt-5">
        <table>
          <thead>
            <th>ক্যাটাগরি</th>
            <th>পরীক্ষার্থীর সংখ্যা (ছাত্র)৬ষ্ঠ-১০ম</th>
            <th>পরীক্ষার্থীর সংখ্যা (ছাত্রী)৬ষ্ঠ-১০ম</th>
          </thead>
          <tbody>
            <tr>
              <td>স্থানীয়</td>
              <td>
                {Local.filter((category) => category.gender === "male").length}
              </td>
              <td>
                {
                  Local.filter((category) => category.gender === "female")
                    .length
                }
              </td>
            </tr>
            <tr>
              <td>ক্ষুদ্র নৃ-গোষ্ঠী</td>
              <td>
                {
                  SmallEthnicGroup.filter(
                    (category) => category.gender === "male"
                  ).length
                }
              </td>
              <td>
                {
                  SmallEthnicGroup.filter(
                    (category) => category.gender === "female"
                  ).length
                }
              </td>
            </tr>
            <tr>
              <td>ভূমিহীন (অভিভাবক)</td>
              <td>
                {
                  Landless.filter((category) => category.gender === "male")
                    .length
                }
              </td>
              <td>
                {
                  Landless.filter((category) => category.gender === "female")
                    .length
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentCategory;
