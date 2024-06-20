import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import districts from "../district.json";

const Institute = () => {
  const [information, setInformation] = useState({});
  const [district, setDistrict] = useState([]);

  const handleInstitute = (e) => {
    e.preventDefault();
    const instituteName = e.target.instituteName.value;
    const instituteType = e.target.instituteType.value;
    const instituteCode = e.target.instituteCode.value;
    const mpoCode = e.target.mpoCode.value;
    const stipendCode = e.target.stipendCode.value;
    const district = e.target.district.value;
    const ParliamentarySeat = e.target.ParliamentarySeat.value;
    const mainBuildingName = e.target.mainBuildingName.value;
    const Union = e.target.Union.value;
    const PostCode = e.target.PostCode.value;
    const instituteMobile = e.target.instituteMobile.value;
    const instituteHeadName = e.target.instituteHeadName.value;
    const fax = e.target.fax.value;
    const webAddress = e.target.webAddress.value;
    const EIIN = e.target.EIIN.value;
    const geoCode = e.target.geoCode.value;
    const BTEBCode = e.target.BTEBCode.value;
    const BTEBMpoCode = e.target.BTEBMpoCode.value;
    const region = e.target.region.value;
    const Upazila = e.target.Upazila.value;
    const Village_HoldingNo = e.target.Village_HoldingNo.value;
    const TheSpotNumberOfTheMainBuilding =
      e.target.TheSpotNumberOfTheMainBuilding.value;
    const postOffice = e.target.postOffice.value;
    const Founder = e.target.Founder.value;
    const instituteHeadMobile = e.target.instituteHeadMobile.value;
    const instituteEmail = e.target.instituteEmail.value;
    const id = e.target.id.value;

    const info = {
      instituteName,
      instituteType,
      instituteCode,
      mpoCode,
      stipendCode,
      district,
      ParliamentarySeat,
      mainBuildingName,
      Union,
      PostCode,
      instituteMobile,
      instituteHeadName,
      fax,
      webAddress,
      EIIN,
      geoCode,
      BTEBCode,
      BTEBMpoCode,
      region,
      Upazila,
      Village_HoldingNo,
      TheSpotNumberOfTheMainBuilding,
      postOffice,
      Founder,
      instituteHeadMobile,
      instituteEmail,
      id,
    };
    fetch("https://school-server-umber.vercel.app/edit-institute-information", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        
        toast.success("যোগ সম্পূর্ণ হয়েছে");
      });
  };


  useEffect(() => {
    const fetchDistricts = fetch("https://bdapis.com/api/v1.2/districts/").then(
      (res) => res.json()
    );
    const fetchInformation = fetch(
      "https://school-server-umber.vercel.app/get-institute-info"
    ).then((res) => res.json());

    Promise.all([fetchDistricts, fetchInformation])
      .then(([districtData, informationData]) => {
        setDistrict(districtData);
        setInformation(informationData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-xl mt-10 mb-5">প্রতিষ্ঠান পরিচিতি</h1>
      <form
        onSubmit={handleInstitute}
        className="flex items-start gap-8 max-w-6xl mx-auto mb-5"
      >
        <div className="w-full space-y-3">
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="instituteName">
              প্রতিষ্ঠানের নাম (বাংলায়):
            </label>
            <input
              type="text"
              name="instituteName"
              id="instituteName"
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              defaultValue={information.instituteName}
              placeholder="প্রতিষ্ঠানের নাম"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="instituteType">
              প্রতিষ্ঠানের ধরন:
            </label>
            <select
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              name="instituteType"
              id="instituteType"
            >
              <option value="">--Select--</option>
              <option value="collage">কলেজ</option>
              <option value="school">স্কুল</option>
              <option value="madrasha">মাদ্রাসা</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="instituteCode">
              শিক্ষা বোর্ড কর্তৃক প্রতিষ্ঠানের কোড :
            </label>
            <input
              type="text"
              name="instituteCode"
              id="instituteCode"
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              defaultValue={information.instituteCode}
              placeholder="শিক্ষা বোর্ড কর্তৃক প্রতিষ্ঠানের কোড"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="mpoCode">
              এমপিও কোড :
            </label>
            <input
              type="text"
              name="mpoCode"
              id="mpoCode"
              defaultValue={information.mpoCode}
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="এমপিও কোড"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="stipendCode">
              উপবৃত্তি কোড :
            </label>
            <input
              type="text"
              name="stipendCode"
              id="stipendCode"
              defaultValue={information.stipendCode}
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="উপবৃত্তি কোড"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="district">
              জেলা :
            </label>

            <select
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              name="district"
              id="district"
            >
              {district.data?.map((singleDistrict, i) => (
                <option key={i} value={singleDistrict.district}>
                  {singleDistrict.districtbn}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="ParliamentarySeat">
              সংসদীয় আসন (নির্বাচনক্ষেত্র) :
            </label>
            <input
              type="text"
              name="ParliamentarySeat"
              id="ParliamentarySeat"
              defaultValue={information.ParliamentarySeat}
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="সংসদীয় আসন"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="mainBuildingName">
              মূলভবনের মৌজার নাম :
            </label>
            <input
              type="text"
              name="mainBuildingName"
              id="mainBuildingName"
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              defaultValue={information.mainBuildingName}
              placeholder="মূলভবনের মৌজার নাম"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="Union">
              ইউনিয়ন :
            </label>
            <input
              type="text"
              name="Union"
              id="Union"
              defaultValue={information.Union}
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="ইউনিয়ন"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" l htmlFor="PostCode">
              পোস্ট কোড :
            </label>
            <input
              type="text"
              name="PostCode"
              id="PostCode"
              defaultValue={information.PostCode}
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="পোস্ট কোড"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="instituteMobile">
              প্রতিষ্ঠানের মোবাইল :
            </label>
            <input
              type="text"
              name="instituteMobile"
              id="instituteMobile"
              defaultValue={information.instituteMobile}
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="প্রতিষ্ঠানের মোবাইল নাম্বার"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="instituteHeadName">
              প্রতিষ্ঠান প্রধানের নাম :
            </label>
            <input
              type="text"
              name="instituteHeadName"
              id="instituteHeadName"
              defaultValue={information.instituteHeadName}
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="প্রতিষ্ঠান প্রধানের নাম"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="fax">
              ফ্যাক্স :
            </label>
            <input
              type="text"
              name="fax"
              id="fax"
              defaultValue={information.fax}
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="ফ্যাক্স"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="webAddress">
              ওয়েব এড্রেস :
            </label>
            <input
              type="text"
              name="webAddress"
              id="webAddress"
              defaultValue={information.webAddress}
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="ওয়েব এড্রেস"
            />
          </div>
        </div>
        <div className="w-full space-y-3">
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="EIIN">
              ইআইআইএন :
            </label>
            <input
              type="text"
              name="EIIN"
              id="EIIN"
              defaultValue={information.EIIN}
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="ইআইআইএন"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="geoCode">
              জিইও কোড (বিবিএস) :
            </label>
            <input
              type="text"
              name="geoCode"
              defaultValue={information.geoCode}
              id="geoCode"
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="জিইও কোড"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="BTEBCode">
              কারিগরি শিক্ষা বোর্ড কর্তৃক কোড :
            </label>
            <input
              type="text"
              name="BTEBCode"
              defaultValue={information.BTEBCode}
              id="BTEBCode"
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="কারিগরি শিক্ষা বোর্ড কর্তৃক কোড"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="BTEBMpoCode">
              কারিগরি শাখার এমপিও কোড :
            </label>
            <input
              type="text"
              name="BTEBMpoCode"
              defaultValue={information.BTEBMpoCode}
              id="BTEBMpoCode"
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="কারিগরি শাখার এমপিও কোড"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="region">
              অঞ্চল :
            </label>
            <input
              type="text"
              name="region"
              defaultValue={information.region}
              id="region"
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="অঞ্চল"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="Upazila">
              উপজেলা/থানা :
            </label>
            <input
              type="text"
              name="Upazila"
              defaultValue={information.Upazila}
              id="Upazila"
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="উপজেলা/থানা"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="Village_HoldingNo">
              গ্রাম/হোল্ডি নম্বর/রোড :
            </label>
            <input
              type="text"
              name="Village_HoldingNo"
              id="Village_HoldingNo"
              defaultValue={information.Village_HoldingNo}
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="গ্রাম/হোল্ডি নম্বর/রোড"
            />
          </div>
          <div className="flex items-center justify-between">
            <label
              className="w-48 inline-block"
              htmlFor="TheSpotNumberOfTheMainBuilding"
            >
              মূল ভবনের দাগ নম্বর :
            </label>
            <input
              type="text"
              name="TheSpotNumberOfTheMainBuilding"
              id="TheSpotNumberOfTheMainBuilding"
              defaultValue={information.TheSpotNumberOfTheMainBuilding}
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="মূল ভবনের দাগ নম্বর "
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="postOffice">
              ডাকঘর :
            </label>
            <input
              type="text"
              name="postOffice"
              defaultValue={information.postOffice}
              id="postOffice"
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="ডাকঘর"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="Founder">
              প্রতিষ্ঠাতা :
            </label>
            <input
              type="text"
              name="Founder"
              id="Founder"
              defaultValue={information.Founder}
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="প্রতিষ্ঠাতা"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="instituteHeadMobile">
              মোবাইল (প্রতিষ্ঠান প্রধান) :
            </label>
            <input
              type="text"
              name="instituteHeadMobile"
              id="instituteHeadMobile"
              defaultValue={information.instituteHeadMobile}
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="প্রতিষ্ঠান প্রধানের মোবাইল"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="instituteEmail">
              প্রতিষ্ঠানের ই-মেইল :
            </label>
            <input
              type="text"
              name="instituteEmail"
              id="instituteEmail"
              defaultValue={information.instituteEmail}
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="প্রতিষ্ঠানের ই-মেইল"
            />
          </div>
          <input type="hidden" name="id" defaultValue={information._id} />
          <div className="flex justify-end">
            <button className="mainBtn">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Institute;
