import React from "react";
import MainFrame from "../components/MainFrame";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

//using same icons and images on menus for now,can update them easily later on
const ClassAssignments = () => {
  return (
    <div className="flex">
      <Sidebar />
      <TopBar />
      <MainFrame />
    </div>
  );
};

export default ClassAssignments;
