import React, { useEffect, useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { CloseSharp } from "@mui/icons-material";

const Routine = () => {
  const [routines, setRoutines] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/rutin")
      .then((res) => res.json())
      .then((data) => setRoutines(data));
  }, []);

  // console.log(routines);
  const openModal = (pdfUrl) => {
    setModalIsOpen(true);
    setPdfUrl(pdfUrl);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setPdfUrl("");
  };

  return (
    <>
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
              <p
                className="cursor-pointer"
                onClick={() => openModal(routine.pdfRutine)}
              >
                রুটিন দেখুন
              </p>
            </div>
          ))}
        </div>

        {modalIsOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="w-[80%] h-[90%] bg-white rounded-lg shadow-lg p-5">
              <p className="bg-white p-2 absolute top-[35px] lg:right-36 right-10 rounded-full">
                <CloseSharp onClick={closeModal} />
              </p>
              <div className="h-full overflow-hidden">
                <object
                  data={pdfUrl}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <p>
                    It appears you don't have a PDF plugin for this browser. No
                    worries, you can
                    <a href={pdfUrl}>click here to download the PDF</a>.
                  </p>
                </object>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Routine;
