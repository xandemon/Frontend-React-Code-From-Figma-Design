import React from "react";
import pptIcon from "../assets/pptIcon.png";
import { HiDownload } from "react-icons/hi";

const DownloadFile = () => {
  return (
    <div className="flex items-center justify-between w-[348px] h-16 pl-2 shadow-custom-box rounded-lg">
      <div className="flex items-center gap-4">
        <img src={pptIcon} alt="ppt icon" className=" w-10 h-10" />
        <div className="flex flex-col justify-center">
          <span className="font-normal text-sm text-primary">
            Evolution chapter notes
          </span>
          <span className="font-normal text-xs text-[#7C81A0]">32.5 MB</span>
        </div>
      </div>
      <div className=" p-6">
        <HiDownload />
      </div>
    </div>
  );
};

export default DownloadFile;
