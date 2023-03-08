import React, { useState } from "react";
import NonGradedTab from "./NonGradedTab";
import GradedTab from "./GradedTab";
import SearchBar from "./SearchBar";

const LowerGradeFrame = () => {
  const [gradingTab, setGradingTab] = useState("Non-Graded");
  function toggleTab(tab: string) {
    setGradingTab(tab);
  }
  return (
    <div>
      <div className="flex flex-col w-[1024px] h-[548px] p-6 rounded-2xl gap-4 bg-white ">
        <div className="flex justify-between items-center py-2 pl-2 pr-6">
          <ul className="flex font-urbanist text-primary font-normal text-sm">
            <li
              className={`flex justify-center items-center w-[160px] h-11 rounded cursor-pointer ${
                gradingTab === "Non-Graded" && " bg-pacific-blue text-white"
              }`}
              onClick={() => toggleTab("Non-Graded")}
            >
              Non-Graded
            </li>
            <li
              className={`flex justify-center items-center w-[160px] h-11 rounded cursor-pointer ${
                gradingTab === "Graded" && " bg-pacific-blue text-white"
              }`}
              onClick={() => toggleTab("Graded")}
            >
              Graded
            </li>
          </ul>
          <SearchBar />
        </div>
        {gradingTab === "Non-Graded" ? <NonGradedTab /> : <GradedTab />}
      </div>
    </div>
  );
};

export default LowerGradeFrame;
