import React from "react";
import { TbArrowNarrowLeft } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import userProfile from "../assets/userProfile.png";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center w-[1072px] h-[88px] absolute top-0 left-52 p-6 text-primary bg-white">
      <div className="flex items-center gap-4 p-0">
        <TbArrowNarrowLeft />
        <span className=" font-medium text-sm font-urbanist">
          Asssignments / Lorem ipsum dolor sit
        </span>
      </div>
      <div className="flex items-center gap-6">
        <div className=" relative">
          <IoMdNotificationsOutline size={20} />
          <span className="absolute top-1 right-1 w-1 h-1 rounded-full bg-[#ee222e]"></span>
        </div>
        <img src={userProfile} alt="user profile" className=" w-10 h-10" />
      </div>
    </div>
  );
};

export default TopBar;
