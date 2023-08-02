import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Institute = () => {
  const [information, setInformation] = useState({});
  const divition = [
    {
      id: "1",
      name: "Chattagram",
      bn_name: "চট্টগ্রাম",
      url: "www.chittagongdiv.gov.bd",
    },
    {
      id: "2",
      name: "Rajshahi",
      bn_name: "রাজশাহী",
      url: "www.rajshahidiv.gov.bd",
    },
    { id: "3", name: "Khulna", bn_name: "খুলনা", url: "www.khulnadiv.gov.bd" },
    {
      id: "4",
      name: "Barisal",
      bn_name: "বরিশাল",
      url: "www.barisaldiv.gov.bd",
    },
    { id: "5", name: "Sylhet", bn_name: "সিলেট", url: "www.sylhetdiv.gov.bd" },
    { id: "6", name: "Dhaka", bn_name: "ঢাকা", url: "www.dhakadiv.gov.bd" },
    {
      id: "7",
      name: "Rangpur",
      bn_name: "রংপুর",
      url: "www.rangpurdiv.gov.bd",
    },
    {
      id: "8",
      name: "Mymensingh",
      bn_name: "ময়মনসিংহ",
      url: "www.mymensinghdiv.gov.bd",
    },
  ];

  const district = [
    {
      id: "",
      division_id: "",
      name: "",
      bn_name: "--Select--",
      lat: "",
      lon: "",
      url: "",
    },
    {
      id: "1",
      division_id: "1",
      name: "Comilla",
      bn_name: "কুমিল্লা",
      lat: "23.4682747",
      lon: "91.1788135",
      url: "www.comilla.gov.bd",
    },
    {
      id: "2",
      division_id: "1",
      name: "Feni",
      bn_name: "ফেনী",
      lat: "23.023231",
      lon: "91.3840844",
      url: "www.feni.gov.bd",
    },
    {
      id: "3",
      division_id: "1",
      name: "Brahmanbaria",
      bn_name: "ব্রাহ্মণবাড়িয়া",
      lat: "23.9570904",
      lon: "91.1119286",
      url: "www.brahmanbaria.gov.bd",
    },
    {
      id: "4",
      division_id: "1",
      name: "Rangamati",
      bn_name: "রাঙ্গামাটি",
      lat: "22.65561018",
      lon: "92.17541121",
      url: "www.rangamati.gov.bd",
    },
    {
      id: "5",
      division_id: "1",
      name: "Noakhali",
      bn_name: "নোয়াখালী",
      lat: "22.869563",
      lon: "91.099398",
      url: "www.noakhali.gov.bd",
    },
    {
      id: "6",
      division_id: "1",
      name: "Chandpur",
      bn_name: "চাঁদপুর",
      lat: "23.2332585",
      lon: "90.6712912",
      url: "www.chandpur.gov.bd",
    },
    {
      id: "7",
      division_id: "1",
      name: "Lakshmipur",
      bn_name: "লক্ষ্মীপুর",
      lat: "22.942477",
      lon: "90.841184",
      url: "www.lakshmipur.gov.bd",
    },
    {
      id: "8",
      division_id: "1",
      name: "Chattogram",
      bn_name: "চট্টগ্রাম",
      lat: "22.335109",
      lon: "91.834073",
      url: "www.chittagong.gov.bd",
    },
    {
      id: "9",
      division_id: "1",
      name: "Coxsbazar",
      bn_name: "কক্সবাজার",
      lat: "21.44315751",
      lon: "91.97381741",
      url: "www.coxsbazar.gov.bd",
    },
    {
      id: "10",
      division_id: "1",
      name: "Khagrachhari",
      bn_name: "খাগড়াছড়ি",
      lat: "23.119285",
      lon: "91.984663",
      url: "www.khagrachhari.gov.bd",
    },
    {
      id: "11",
      division_id: "1",
      name: "Bandarban",
      bn_name: "বান্দরবান",
      lat: "22.1953275",
      lon: "92.2183773",
      url: "www.bandarban.gov.bd",
    },
    {
      id: "12",
      division_id: "2",
      name: "Sirajganj",
      bn_name: "সিরাজগঞ্জ",
      lat: "24.4533978",
      lon: "89.7006815",
      url: "www.sirajganj.gov.bd",
    },
    {
      id: "13",
      division_id: "2",
      name: "Pabna",
      bn_name: "পাবনা",
      lat: "23.998524",
      lon: "89.233645",
      url: "www.pabna.gov.bd",
    },
    {
      id: "14",
      division_id: "2",
      name: "Bogura",
      bn_name: "বগুড়া",
      lat: "24.8465228",
      lon: "89.377755",
      url: "www.bogra.gov.bd",
    },
    {
      id: "15",
      division_id: "2",
      name: "Rajshahi",
      bn_name: "রাজশাহী",
      lat: "24.37230298",
      lon: "88.56307623",
      url: "www.rajshahi.gov.bd",
    },
    {
      id: "16",
      division_id: "2",
      name: "Natore",
      bn_name: "নাটোর",
      lat: "24.420556",
      lon: "89.000282",
      url: "www.natore.gov.bd",
    },
    {
      id: "17",
      division_id: "2",
      name: "Joypurhat",
      bn_name: "জয়পুরহাট",
      lat: "25.09636876",
      lon: "89.04004280",
      url: "www.joypurhat.gov.bd",
    },
    {
      id: "18",
      division_id: "2",
      name: "Chapainawabganj",
      bn_name: "চাঁপাইনবাবগঞ্জ",
      lat: "24.5965034",
      lon: "88.2775122",
      url: "www.chapainawabganj.gov.bd",
    },
    {
      id: "19",
      division_id: "2",
      name: "Naogaon",
      bn_name: "নওগাঁ",
      lat: "24.83256191",
      lon: "88.92485205",
      url: "www.naogaon.gov.bd",
    },
    {
      id: "20",
      division_id: "3",
      name: "Jashore",
      bn_name: "যশোর",
      lat: "23.16643",
      lon: "89.2081126",
      url: "www.jessore.gov.bd",
    },
    {
      id: "21",
      division_id: "3",
      name: "Satkhira",
      bn_name: "সাতক্ষীরা",
      lat: "22.7180905",
      lon: "89.0687033",
      url: "www.satkhira.gov.bd",
    },
    {
      id: "22",
      division_id: "3",
      name: "Meherpur",
      bn_name: "মেহেরপুর",
      lat: "23.762213",
      lon: "88.631821",
      url: "www.meherpur.gov.bd",
    },
    {
      id: "23",
      division_id: "3",
      name: "Narail",
      bn_name: "নড়াইল",
      lat: "23.172534",
      lon: "89.512672",
      url: "www.narail.gov.bd",
    },
    {
      id: "24",
      division_id: "3",
      name: "Chuadanga",
      bn_name: "চুয়াডাঙ্গা",
      lat: "23.6401961",
      lon: "88.841841",
      url: "www.chuadanga.gov.bd",
    },
    {
      id: "25",
      division_id: "3",
      name: "Kushtia",
      bn_name: "কুষ্টিয়া",
      lat: "23.901258",
      lon: "89.120482",
      url: "www.kushtia.gov.bd",
    },
    {
      id: "26",
      division_id: "3",
      name: "Magura",
      bn_name: "মাগুরা",
      lat: "23.487337",
      lon: "89.419956",
      url: "www.magura.gov.bd",
    },
    {
      id: "27",
      division_id: "3",
      name: "Khulna",
      bn_name: "খুলনা",
      lat: "22.815774",
      lon: "89.568679",
      url: "www.khulna.gov.bd",
    },
    {
      id: "28",
      division_id: "3",
      name: "Bagerhat",
      bn_name: "বাগেরহাট",
      lat: "22.651568",
      lon: "89.785938",
      url: "www.bagerhat.gov.bd",
    },
    {
      id: "29",
      division_id: "3",
      name: "Jhenaidah",
      bn_name: "ঝিনাইদহ",
      lat: "23.5448176",
      lon: "89.1539213",
      url: "www.jhenaidah.gov.bd",
    },
    {
      id: "30",
      division_id: "4",
      name: "Jhalakathi",
      bn_name: "ঝালকাঠি",
      lat: "22.6422689",
      lon: "90.2003932",
      url: "www.jhalakathi.gov.bd",
    },
    {
      id: "31",
      division_id: "4",
      name: "Patuakhali",
      bn_name: "পটুয়াখালী",
      lat: "22.3596316",
      lon: "90.3298712",
      url: "www.patuakhali.gov.bd",
    },
    {
      id: "32",
      division_id: "4",
      name: "Pirojpur",
      bn_name: "পিরোজপুর",
      lat: "22.5781398",
      lon: "89.9983909",
      url: "www.pirojpur.gov.bd",
    },
    {
      id: "33",
      division_id: "4",
      name: "Barisal",
      bn_name: "বরিশাল",
      lat: "22.7004179",
      lon: "90.3731568",
      url: "www.barisal.gov.bd",
    },
    {
      id: "34",
      division_id: "4",
      name: "Bhola",
      bn_name: "ভোলা",
      lat: "22.685923",
      lon: "90.648179",
      url: "www.bhola.gov.bd",
    },
    {
      id: "35",
      division_id: "4",
      name: "Barguna",
      bn_name: "বরগুনা",
      lat: "22.159182",
      lon: "90.125581",
      url: "www.barguna.gov.bd",
    },
    {
      id: "36",
      division_id: "5",
      name: "Sylhet",
      bn_name: "সিলেট",
      lat: "24.8897956",
      lon: "91.8697894",
      url: "www.sylhet.gov.bd",
    },
    {
      id: "37",
      division_id: "5",
      name: "Moulvibazar",
      bn_name: "মৌলভীবাজার",
      lat: "24.482934",
      lon: "91.777417",
      url: "www.moulvibazar.gov.bd",
    },
    {
      id: "38",
      division_id: "5",
      name: "Habiganj",
      bn_name: "হবিগঞ্জ",
      lat: "24.374945",
      lon: "91.41553",
      url: "www.habiganj.gov.bd",
    },
    {
      id: "39",
      division_id: "5",
      name: "Sunamganj",
      bn_name: "সুনামগঞ্জ",
      lat: "25.0658042",
      lon: "91.3950115",
      url: "www.sunamganj.gov.bd",
    },
    {
      id: "40",
      division_id: "6",
      name: "Narsingdi",
      bn_name: "নরসিংদী",
      lat: "23.932233",
      lon: "90.71541",
      url: "www.narsingdi.gov.bd",
    },
    {
      id: "41",
      division_id: "6",
      name: "Gazipur",
      bn_name: "গাজীপুর",
      lat: "24.0022858",
      lon: "90.4264283",
      url: "www.gazipur.gov.bd",
    },
    {
      id: "42",
      division_id: "6",
      name: "Shariatpur",
      bn_name: "শরীয়তপুর",
      lat: "23.2060195",
      lon: "90.3477725",
      url: "www.shariatpur.gov.bd",
    },
    {
      id: "43",
      division_id: "6",
      name: "Narayanganj",
      bn_name: "নারায়ণগঞ্জ",
      lat: "23.63366",
      lon: "90.496482",
      url: "www.narayanganj.gov.bd",
    },
    {
      id: "44",
      division_id: "6",
      name: "Tangail",
      bn_name: "টাঙ্গাইল",
      lat: "24.264145",
      lon: "89.918029",
      url: "www.tangail.gov.bd",
    },
    {
      id: "45",
      division_id: "6",
      name: "Kishoreganj",
      bn_name: "কিশোরগঞ্জ",
      lat: "24.444937",
      lon: "90.776575",
      url: "www.kishoreganj.gov.bd",
    },
    {
      id: "46",
      division_id: "6",
      name: "Manikganj",
      bn_name: "মানিকগঞ্জ",
      lat: "23.8602262",
      lon: "90.0018293",
      url: "www.manikganj.gov.bd",
    },
    {
      id: "47",
      division_id: "6",
      name: "Dhaka",
      bn_name: "ঢাকা",
      lat: "23.7115253",
      lon: "90.4111451",
      url: "www.dhaka.gov.bd",
    },
    {
      id: "48",
      division_id: "6",
      name: "Munshiganj",
      bn_name: "মুন্সিগঞ্জ",
      lat: "23.5435742",
      lon: "90.5354327",
      url: "www.munshiganj.gov.bd",
    },
    {
      id: "49",
      division_id: "6",
      name: "Rajbari",
      bn_name: "রাজবাড়ী",
      lat: "23.7574305",
      lon: "89.6444665",
      url: "www.rajbari.gov.bd",
    },
    {
      id: "50",
      division_id: "6",
      name: "Madaripur",
      bn_name: "মাদারীপুর",
      lat: "23.164102",
      lon: "90.1896805",
      url: "www.madaripur.gov.bd",
    },
    {
      id: "51",
      division_id: "6",
      name: "Gopalganj",
      bn_name: "গোপালগঞ্জ",
      lat: "23.0050857",
      lon: "89.8266059",
      url: "www.gopalganj.gov.bd",
    },
    {
      id: "52",
      division_id: "6",
      name: "Faridpur",
      bn_name: "ফরিদপুর",
      lat: "23.6070822",
      lon: "89.8429406",
      url: "www.faridpur.gov.bd",
    },
    {
      id: "53",
      division_id: "7",
      name: "Panchagarh",
      bn_name: "পঞ্চগড়",
      lat: "26.3411",
      lon: "88.5541606",
      url: "www.panchagarh.gov.bd",
    },
    {
      id: "54",
      division_id: "7",
      name: "Dinajpur",
      bn_name: "দিনাজপুর",
      lat: "25.6217061",
      lon: "88.6354504",
      url: "www.dinajpur.gov.bd",
    },
    {
      id: "55",
      division_id: "7",
      name: "Lalmonirhat",
      bn_name: "লালমনিরহাট",
      lat: "25.9165451",
      lon: "89.4532409",
      url: "www.lalmonirhat.gov.bd",
    },
    {
      id: "56",
      division_id: "7",
      name: "Nilphamari",
      bn_name: "নীলফামারী",
      lat: "25.931794",
      lon: "88.856006",
      url: "www.nilphamari.gov.bd",
    },
    {
      id: "57",
      division_id: "7",
      name: "Gaibandha",
      bn_name: "গাইবান্ধা",
      lat: "25.328751",
      lon: "89.528088",
      url: "www.gaibandha.gov.bd",
    },
    {
      id: "58",
      division_id: "7",
      name: "Thakurgaon",
      bn_name: "ঠাকুরগাঁও",
      lat: "26.0336945",
      lon: "88.4616834",
      url: "www.thakurgaon.gov.bd",
    },
    {
      id: "59",
      division_id: "7",
      name: "Rangpur",
      bn_name: "রংপুর",
      lat: "25.7558096",
      lon: "89.244462",
      url: "www.rangpur.gov.bd",
    },
    {
      id: "60",
      division_id: "7",
      name: "Kurigram",
      bn_name: "কুড়িগ্রাম",
      lat: "25.805445",
      lon: "89.636174",
      url: "www.kurigram.gov.bd",
    },
    {
      id: "61",
      division_id: "8",
      name: "Sherpur",
      bn_name: "শেরপুর",
      lat: "25.0204933",
      lon: "90.0152966",
      url: "www.sherpur.gov.bd",
    },
    {
      id: "62",
      division_id: "8",
      name: "Mymensingh",
      bn_name: "ময়মনসিংহ",
      lat: "24.7465670",
      lon: "90.4072093",
      url: "www.mymensingh.gov.bd",
    },
    {
      id: "63",
      division_id: "8",
      name: "Jamalpur",
      bn_name: "জামালপুর",
      lat: "24.937533",
      lon: "89.937775",
      url: "www.jamalpur.gov.bd",
    },
    {
      id: "64",
      division_id: "8",
      name: "Netrokona",
      bn_name: "নেত্রকোণা",
      lat: "24.870955",
      lon: "90.727887",
      url: "www.netrokona.gov.bd",
    },
  ];

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
    fetch("http://localhost:5000/edit-institute-information", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("যোগ সম্পূর্ণ হয়েছে");
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/get-institute-info")
      .then((res) => res.json())
      .then((data) => setInformation(data));
  }, []);
  // console.log(information);

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
              {district.map((singleDistrict) => (
                <>
                  <option value={singleDistrict.name}>
                    {singleDistrict.bn_name}
                  </option>
                </>
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
          {/* <div className="flex items-center justify-between">
            <label className="w-48 inline-block" htmlFor="">
              প্রতিষ্ঠানের ফোন :
            </label>
            <input
              type="text"
              name=""
              id=""
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
              placeholder="Enter your institution's name here..."
            />
          </div> */}
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
