import React from "react";

const GradedButton = (props: any) => {
  return (
    <button className="flex flex-col justify-center items-center w-[91px] h-[58px] py-3 px-6 font-urbanist text-white bg-medium-sea-green rounded-lg ">
      <span className=" font-medium text-xs">Graded</span>
      <span className=" font-semibold text-base">{props.score}</span>
    </button>
  );
};

export default GradedButton;
