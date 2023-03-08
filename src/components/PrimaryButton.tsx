import React from "react";

const PrimaryButton = (props: any) => {
  return (
    <button className="flex justify-center items-center w-[121px] h-11 py-3 px-10 font-urbanist font-medium text-sm text-white bg-pacific-blue rounded-full ">
      {props.btnName}
    </button>
  );
};

export default PrimaryButton;
