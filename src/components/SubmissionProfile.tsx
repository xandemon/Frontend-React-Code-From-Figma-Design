import React from "react";
import studentProfile from "../assets/studentProfile.png";

const SubmissionProfile = (props: any) => {
  return (
    <div className="flex items-center gap-4 w-[194px] h-16">
      <img src={studentProfile} alt="student 1" className="" />
      <div className="flex flex-col w-[118px] h-4 gap-1 justify-center font-urbanist">
        <span className=" font-semibold text-sm text-primary">
          {props.studentName}
        </span>
        <span className=" font-normal text-xs text-spanish-gray">
          {props.submissionDate}
        </span>
        {props.onTime ? (
          <span className=" font-medium text-xs text-medium-sea-green">
            On time
          </span>
        ) : (
          <span className=" font-medium text-xs text-paradise-pink">
            Late submission
          </span>
        )}
      </div>
    </div>
  );
};

export default SubmissionProfile;
