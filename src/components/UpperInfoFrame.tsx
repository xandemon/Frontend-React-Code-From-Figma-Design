import React from "react";
import { BiHourglass } from "react-icons/bi";
import DownloadFile from "./DownloadFile";

const UpperInfoFrame = () => {
  return (
    <div>
      <div className="flex flex-col w-[1024px] h-[260px] p-6 rounded-2xl gap-4 bg-white ">
        <div className="flex items-start justify-between w-[976px] h-14 ">
          <div className="flex gap-4">
            <span className="flex justify-center items-center w-14 h-14 font-normal text-xs text-[#EA526F] shadow-avatar-shadow rounded">
              Sc
            </span>
            <div className="flex flex-col justify-center">
              <span className=" font-semibold text-base text-primary">
                Lorem ipsum dolor sit amet consectetur. Scelerisque aenean nibh.
              </span>
              <div className="flex gap-4">
                <div className=" font-normal text-sm gap-4">
                  <span className=" text-primary">Submitted by:</span>
                  <div className="w-14"></div>
                </div>
                <div className="flex font-normal text-sm gap-4">
                  <span className=" text-primary">Assigned on:</span>
                  <span className=" text-spanish-gray">
                    14 Apr 2021, 8:43 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-[2px] py-[2px] pr-2 pl-[1px] border-[1px] border-medium-sea-green rounded-xl">
            <span className="flex justify-center items-center w-[19px] h-[19px] rounded-full bg-medium-sea-green">
              <BiHourglass color="white" />
            </span>
            <span className=" font-medium text-xs text-medium-sea-green">
              4 days
            </span>
          </div>
        </div>
        <span className=" font-normal text-sm text-spanish-gray">
          Lorem ipsum dolor sit amet consectetur. Pulvinar auctor sed proin at
          sem. Diam nisl in morbi id diam felis. Lectus eget sit tristique sit
          magnis pretium nec. Mus fermentum consequat nisl volutpat viverra ut
          at. Lorem tristique dolor cursus euismod mus duis. Etiam aliquam
          ultrices tristique in ipsum congue. Nisl aenean netus lobortis ut
          amet. Lacus eleifend urna turpis amet mattis lacus. Dui elementum ac
          vitae quam ullamcorper nunc.
        </span>
        <div>
          <DownloadFile />
        </div>
      </div>
    </div>
  );
};

export default UpperInfoFrame;
