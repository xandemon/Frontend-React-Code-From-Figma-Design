import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import SubmissionProfile from "./SubmissionProfile";

const NonGradedTab = () => {
  return (
    <div className="flex flex-col w-[976px] overflow-y-scroll">
      {/* Just hardcoding the profiles for now, can be easily rendered with data through props*/}
      <div className="flex justify-between py-2 px-4">
        <SubmissionProfile
          studentName="Savannah Nguyen"
          submissionDate="October 25, 2019"
          onTime={true}
        />
        <Link to="/gradesubmission">
          <PrimaryButton btnName="Grade" />
        </Link>
      </div>
      <div className="flex justify-between py-2 px-4">
        <SubmissionProfile
          studentName="Savannah Nguyen"
          submissionDate="October 25, 2019"
          onTime={false}
        />
        <Link to="/gradesubmission">
          <PrimaryButton btnName="Grade" />
        </Link>
      </div>
      <div className="flex justify-between py-2 px-4">
        <SubmissionProfile
          studentName="Savannah Nguyen"
          submissionDate="October 25, 2019"
          onTime={false}
        />
        <Link to="/gradesubmission">
          <PrimaryButton btnName="Grade" />
        </Link>
      </div>
      <div className="flex justify-between py-2 px-4">
        <SubmissionProfile
          studentName="Savannah Nguyen"
          submissionDate="October 25, 2019"
          onTime={true}
        />
        <Link to="/gradesubmission">
          <PrimaryButton btnName="Grade" />
        </Link>
      </div>
      <div className="flex justify-between py-2 px-4">
        <SubmissionProfile
          studentName="Savannah Nguyen"
          submissionDate="October 25, 2019"
          onTime={true}
        />
        <Link to="/gradesubmission">
          <PrimaryButton btnName="Grade" />
        </Link>
      </div>
      <div className="flex justify-between py-2 px-4">
        <SubmissionProfile
          studentName="Savannah Nguyen"
          submissionDate="October 25, 2019"
          onTime={true}
        />
        <Link to="/gradesubmission">
          <PrimaryButton btnName="Grade" />
        </Link>
      </div>
      <div className="flex justify-between py-2 px-4">
        <SubmissionProfile
          studentName="Savannah Nguyen"
          submissionDate="October 25, 2019"
          onTime={true}
        />
        <Link to="/gradesubmission">
          <PrimaryButton btnName="Grade" />
        </Link>
      </div>
    </div>
  );
};

export default NonGradedTab;
