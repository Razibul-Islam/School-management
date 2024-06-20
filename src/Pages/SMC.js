import React, { useEffect, useState } from "react";
import image1 from "../assets/t-1.jpg";
// import image2 from "../assets/person.png";
// import PersonIcon from "@mui/icons-material/Person";

const SMC = () => {
  const [CMSData, setCMSData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/get-allStudent";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCMSData(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-center text-xl mb-5">এসএমসি সদস্য তালিকা </h1>
      <div>
        <table>
          <thead>
            <th>ছবি</th>
            <th>নাম</th>
            <th>পদবি</th>
            <th>মোবাইল নাম্বার</th>
            <th>ঠিকানা</th>
            <th>ইমেইল এড্রেস</th>
          </thead>
          <tbody>
            {CMSData?.map((cms, i) => (
              <tr key={i}>
                <td>
                  <img
                    src={image1}
                    className="w-32 object-cover h-auto"
                    alt=""
                  />
                </td>
                <td>Razibul</td>
                <td>Chairman</td>
                <td>014145168</td>
                <td>Savar, Dhaka</td>
                <td>raf@fami.com</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SMC;
