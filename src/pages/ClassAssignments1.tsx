import React from "react";
import MainFrame from "../components/MainFrame";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

const ClassAssignments1 = () => {
  return (
    <div className="flex">
      <Sidebar />
      <TopBar />
      <MainFrame />
    </div>
  );
};

export default ClassAssignments1;
