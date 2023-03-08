import React from "react";
import { CgClose } from "react-icons/cg";

const GradeSubmissions = () => {
  return (
    <div className="flex flex-col w-[1024px] h-[752px] bg-white rounded-2xl">
      <div className="flex justify-between pl-8 pr-4 shadow-custom-box">
        <span>Student submission</span>
        <CgClose />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default GradeSubmissions;
