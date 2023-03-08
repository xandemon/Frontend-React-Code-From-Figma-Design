import React from "react";
import LowerGradeFrame from "./LowerGradeFrame";
import UpperInfoFrame from "./UpperInfoFrame";

const MainFrame = () => {
  return (
    <div className="flex flex-col gap-4 w-[1072px] h-[872px] absolute top-[88px] left-[208px] font-urbanist p-6 bg-secondary-background">
      <UpperInfoFrame />
      <LowerGradeFrame />
    </div>
  );
};

export default MainFrame;
