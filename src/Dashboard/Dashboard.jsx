import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import DrawIcon from "@mui/icons-material/Draw";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import InfoIcon from "@mui/icons-material/Info";
import CollectionsIcon from "@mui/icons-material/Collections";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import DescriptionIcon from "@mui/icons-material/Description";
import GroupsIcon from "@mui/icons-material/Groups";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <div className="w-72 bg-teal-600 min-h-screen">
        <hr />
        <Link
          to="/admin/"
          className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5"
        >
          <SpaceDashboardIcon /> ড্যাশবোর্ড
        </Link>
        <Link
          to="/admin/institute"
          className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5"
        >
          <SpaceDashboardIcon /> প্রতিষ্ঠান
        </Link>
        <Link
          to="/admin/add-teacher"
          className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5"
        >
          <CastForEducationIcon /> শিক্ষক যোগ করুন
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5"
        >
          <DrawIcon /> ছাত্র - ছাত্রী
          <ArrowForwardIosIcon className="scale-50" />
        </button>

        <div
          className={`${
            open
              ? "scale-100 bg-teal-700 ease-in duration-700"
              : "scale-0 hidden"
          }`}
        >
          <Link
            to="/admin/student"
            className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5"
          >
            <PanoramaFishEyeIcon /> ছাত্র - ছাত্রী
          </Link>
          <Link
            to="/admin/student/religion"
            className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5"
          >
            <PanoramaFishEyeIcon />
            ধর্ম
          </Link>
          <Link
            to="/admin/student/familyIncome"
            className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5"
          >
            <PanoramaFishEyeIcon />
            পরিবারের আয়
          </Link>
          <Link
            to="/admin/student/studentCategory"
            className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5"
          >
            <PanoramaFishEyeIcon />
            শিক্ষার্থীর ক্যাটাগরি
          </Link>
          <Link
            to="/admin/student/failed"
            className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5"
          >
            <PanoramaFishEyeIcon />
            ফেল ছাত্র ছাত্রী
          </Link>
        </div>
        <Link
          to="/admin/studentCabinet"
          className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5"
        >
          <DrawIcon /> স্টুডেন্ট কেবিনেট
        </Link>
        <Link
          to="/admin/add-notice"
          className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5"
        >
          <NotificationsIcon /> বিজ্ঞপ্তি যোগ করুন
        </Link>
        <Link
          to="/admin/add-news"
          className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5"
        >
          <NewspaperIcon /> সর্বশেষ খবর যোগ করুন
        </Link>
        <Link
          to="/admin/add-info"
          className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5"
        >
          <InfoIcon /> স্কুল তথ্য যোগ করুন
        </Link>
        <Link
          to="/admin/add-rutine"
          className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5"
        >
          <DescriptionIcon /> রুটিন যোগ করুন
        </Link>
        <Link
          to="/admin/admincart"
          className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5"
        >
          <ConfirmationNumberIcon />
          প্রবেশপত্র তৈরি করুন
        </Link>
        <Link
          to="/admin/add-gallery"
          className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5"
        >
          <CollectionsIcon />
          গ্যালারি যোগ করুন
        </Link>
        <Link
          to="/admin/smc"
          className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5"
        >
          <GroupsIcon />
          এসএমসি তথ্য
        </Link>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
