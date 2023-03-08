import React from "react";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import DownloadFile from "../components/DownloadFile";
import PrimaryButton from "../components/PrimaryButton";
import SubmissionProfile from "../components/SubmissionProfile";

const GradeSubmissions = () => {
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="flex flex-col w-[1024px] h-[752px] bg-white rounded-2xl font-urbanist ">
        <div className="flex justify-between items-center pl-8 pr-4 rounded-t-2xl shadow-custom-box">
          <span className=" font-semibold text-base text-primary">
            Student submission
          </span>
          {/* Clicking this close button takes you back to class assignments page*/}
          <span className="p-3">
            <Link to="/">
              <CgClose />
            </Link>
          </span>
        </div>
        <div className="flex flex-col gap-6 w-full p-6">
          <SubmissionProfile
            studentName="Savannah Nguyen"
            submissionDate="October 25, 2019"
            onTime={true}
          />
          <div className="flex flex-col gap-2">
            <span className="font-medium text-sm text-spanish-gray">
              Submitted files
            </span>
            <div className="flex gap-6">
              <DownloadFile />
              <DownloadFile />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-medium text-sm text-spanish-gray">
              Student comment
            </span>
            <span className=" font-normal text-sm text-primary">
              Lorem ipsum dolor sit amet consectetur. Pulvinar auctor sed proin
              at sem. Diam nisl in morbi id diam felis. Lectus eget sit
              tristique sit magnis pretium nec. Mus fermentum consequat nisl
              volutpat viverra ut at. Lorem tristique dolor cursus euismod mus
              duis. Etiam aliquam ultrices tristique in ipsum congue. Nisl
              aenean netus lobortis ut amet. Lacus eleifend urna turpis amet
              mattis lacus. Dui elementum ac vitae quam ullamcorper nunc.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-medium text-sm text-spanish-gray">
              Grade obtained
            </span>
            <div className="flex items-center gap-4 w-[299px] h-[68px]">
              <input
                type="text"
                name="grade"
                placeholder="Enter grade here"
                className="flex justify-center items-center font-normal text-base text-spanish-gray p-6 w-[172px] border-b-2 border-b-primary"
              />
              <span className="flex justify-center items-center font-semibold text-base text-primary w-[111px] p-6 bg-secondary-background rounded-lg">
                out of 10
              </span>
            </div>
          </div>
          <input
            type="text"
            placeholder="Enter your suggestion or comment here"
            className="p-4 font-normal text-sm text-spanish-gray w-full h-[120px] bg-secondary-background rounded-lg"
          />
        </div>
        <div className="flex justify-end items-center w-full h-[92px] gap-6 p-6">
          <button className="flex justify-center items-center font-medium text-sm text-paradise-pink w-[180px] h-11 py-3 px-6">
            Ask for resubmission
          </button>
          <PrimaryButton btnName="Grade" />
        </div>
      </div>
    </div>
  );
};

export default GradeSubmissions;
