import React from "react";
import { RiSearch2Line } from "react-icons/ri";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 w-60 h-9 py-2 pl-4 pr-2 bg-secondary-background rounded-full">
      <RiSearch2Line />
      <span className=" font-normal text-sm text-spanish-gray">Search</span>
    </div>
  );
};

export default SearchBar;
