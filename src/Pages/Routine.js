import React, { useEffect, useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";

const Routine = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    fetch("https://school-server-razibul-islam.vercel.app/rutin")
      .then((res) => res.json())
      .then((data) => setRoutines(data));
  }, []);

  console.log(routines);

  return (
    <div className="p-5">
      <h1 className="text-center">রুটিন ডাউনলোড করুন</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10">
        {routines.map((routine, i) => (
          <div
            key={i}
            className="w-full py-10 block bg-gradient-to-bl from-teal-500 to-green-300 text-center text-xl font-medium text-white rounded flex flex-col items-center"
          >
            {routine.classes}
            <a
              href={routine.pdfRutine}
              target="_blank"
              download={true}
              className="p-5"
              rel="noreferrer"
            >
              <DownloadIcon />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Routine;
