import React from "react";
import MainLogo from "../assets/MainLogo.png";
import {
  TbLayoutDashboard,
  TbChevronRight,
  TbSettings,
  TbLogout,
} from "react-icons/tb";

const Sidebar = () => {
  const sidebarMenus = [
    {
      id: 1,
      icon: <TbLayoutDashboard />,
      menuName: "Dashboard",
      active: false,
    },
    {
      id: 2,
      icon: <TbLayoutDashboard />,
      menuName: "Class",
      active: true,
    },
    {
      id: 3,
      icon: <TbLayoutDashboard />,
      menuName: "Attendance",
      active: false,
    },
    {
      id: 4,
      icon: <TbLayoutDashboard />,
      menuName: "Tests",
      active: false,
      hasArrow: true,
    },
    {
      id: 5,
      icon: <TbLayoutDashboard />,
      menuName: "Reports",
      active: false,
      hasArrow: true,
    },
    {
      id: 6,
      icon: <TbLayoutDashboard />,
      menuName: "Discipline",
      active: false,
    },
    {
      id: 7,
      icon: <TbLayoutDashboard />,
      menuName: "Doubts",
      active: false,
    },
    {
      id: 8,
      icon: <TbLayoutDashboard />,
      menuName: "Messages",
      active: false,
    },
    {
      id: 9,
      icon: <TbLayoutDashboard />,
      menuName: "Schedule",
      active: false,
    },
    {
      id: 10,
      icon: <TbLayoutDashboard />,
      menuName: "Notify",
      active: false,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-between py-8 gap-8 w-52 h-[960px] absolute left-0 top-0 bg-white">
      <div className="flex flex-col items-center gap-8 p-0">
        <div className="flex justify-center items-center gap-3 w-40 h-12 p-1">
          <img src={MainLogo} alt="logo" className=" w-10 h-10" />
          <span className="text-[#2BB8D6] font-horndon font-normal text-[28px] leading-[120%]">
            Medhavhi
          </span>
        </div>
        {/*rendering sidebar menus*/}
        <div className="flex flex-col items-center w-52 h-[532px] gap-2 px-3">
          {sidebarMenus.map(({ id, icon, menuName, active, hasArrow }) => (
            <div
              key={id}
              className={`flex items-center gap-4 w-[184px] h-[46px] py-3 pl-2 pr-4 rounded-md cursor-pointer  text-primary ${
                active && "text-white bg-[#2BB8D6]"
              }`}
            >
              {icon}
              <span className="flex items-center w-32 h-[22px] justify-between">
                <span className="flex items-center gap-2">
                  {menuName}
                  {id === 8 && (
                    <span className="flex items-center text-[10px] py-[1px] px-[5px] w-[17px] h-[14px] rounded text-white bg-[#EA526F] ">
                      4
                    </span>
                  )}
                </span>

                {hasArrow && <TbChevronRight />}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className=" text-primary">
        <div className="flex items-center gap-4 w-[184px] h-[46px] py-3 pl-2 pr-4 rounded-md">
          <TbSettings />
          <div className="flex items-center w-32 h-[22px] justify-between">
            <div className="flex items-center gap-2">
              <span>Settings</span>
              <span className="flex items-center text-[10px] py-[1px] px-[5px] w-[17px] h-[14px] rounded text-white bg-[#EA526F] ">
                4
              </span>
            </div>
            <TbChevronRight />
          </div>
        </div>
        <div className="flex items-center gap-4 w-[184px] h-[46px] py-3 pl-2 pr-4 rounded-md">
          <TbLogout />
          <span className="flex items-center w-32 h-[22px] justify-between">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
