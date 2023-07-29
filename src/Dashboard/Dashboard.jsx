import React from "react";
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
import GroupsIcon from '@mui/icons-material/Groups';

const Dashboard = () => {
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
        <Link to="/admin/smc" className="w-full px-5 py-2 block hover:bg-teal-700 text-white flex gap-5" >
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
