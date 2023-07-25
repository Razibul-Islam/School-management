import React from "react";
import { Link, Outlet } from "react-router-dom";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import DrawIcon from "@mui/icons-material/Draw";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-72 bg-teal-600 h-[100vh]">
        <hr />
        <Link
          to="/admin/"
          className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5"
        >
          <SpaceDashboardIcon /> ড্যাশবোর্ড
        </Link>
        <Link
          to="/admin/add-teacher"
          className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5"
        >
          <CastForEducationIcon /> শিক্ষক যোগ করুন
        </Link>
        <Link
          to="/admin/student"
          className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5"
        >
          <DrawIcon /> ছাত্র - ছাত্রী যোগ করুন
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
          to="/admin/adminCart"
          className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5"
        >
          <AddIcon /> প্রবেশপত্র তৈরি করুন
        </Link>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
