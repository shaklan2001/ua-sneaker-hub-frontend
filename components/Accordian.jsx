import React from "react";
import { Collapse } from "react-collapse";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Accordian = ({ open, toggle, title, desc }) => {
  return (
    <div className="pt-1 border-b">
      <div
        className="bg-white py-3 flex justify-between items-center cursor-pointer accordion-down 0.2s ease-out"
        onClick={toggle}
      >
        <p className="text-lg font-semibold">{title}</p>
        <div className="text-lg flex items-center "> {/* Center icons vertically */}
          {open ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="bg-white pb-3 pr-6">
          {desc}
        </div>
      </Collapse>
    </div>
  );
};

export default Accordian;
