import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Mobilesearch = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  return (
    <div className="flex items-center justify-center">
      <button className="p-2 text-black rounded-full" onClick={toggleSearch}>
        <IoSearch className="text-black w-5 h-5" />
      </button>
      {isSearchVisible && (
        <input
          type="text"
          className="w-32 sm:w-64 px-4 bg-gray-50 py-2 rounded-full border border-transparent focus:outline-none focus:ring-1 focus:ring-gray-100 hover:bg-gray-100 ml-1"
          placeholder="Search..."
        />
      )}
    </div>
  );
};

export default Mobilesearch;
