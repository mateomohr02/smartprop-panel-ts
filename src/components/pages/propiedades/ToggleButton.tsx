"use client";

import { TogglePropertyKey } from "./PropiedadesTable";

interface ToggleButtonProps {
  flag: boolean;
  type: TogglePropertyKey;
  propertyId: string;
  onToggle: (
    propertyId: string,
    type: TogglePropertyKey,
    value: boolean,
  ) => void;
}

const ToggleButton = ({ flag, type, propertyId, onToggle } : ToggleButtonProps) => {

  const handleClick = () => {
    onToggle(propertyId, type, !flag);
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-block w-10 h-5 rounded-full cursor-pointer relative transition-all duration-200 ${
        flag ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute top-[2px] left-[2px] w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 ${
          flag ? "translate-x-5" : ""
        }`}
      ></span>
    </button>
  );
};

export default ToggleButton;
