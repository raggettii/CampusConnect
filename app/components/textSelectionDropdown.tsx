"use client";
import { useState } from "react";
import { dropdownDataType } from "../types/types";

interface DropdownOption {
  value: string;
  label: string;
}

export default function TextSelectionDropDown({
  options,
  className,
  onSelectOption,
  dropdownText,
}: {
  options: Array<dropdownDataType>;
  className?: string;
  onSelectOption: ({ key, value }: { key: string; value: string }) => void;
  dropdownText: string;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(dropdownText);

  function dropdownToggler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault(); // Prevent default behavior
    setIsDropdownOpen(!isDropdownOpen);
  }

  function handleOptionClick(option: DropdownOption) {
    setSelectedOption(option.label);
    setIsDropdownOpen(false);
    onSelectOption({ key: option.value, value: option.label }); // Send the selected value to the parent component or backend
  }

  return (
    <div className={` ${className}`}>
      <button
        onClick={dropdownToggler}
        type="button" // This prevents form submission
        className="w-[200px] bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        {selectedOption}
      </button>

      {isDropdownOpen && (
        <div className="absolute top-[0px]  bg-white shadow-md rounded-md w-full">
          {options.map((option) => (
            <div
              // here we can use the id that came from backend
              // as key for now math.random
              key={Math.random()}
              onClick={() => handleOptionClick(option)}
              className=" px-4 py-2 hover:bg-blue-400 cursor-pointer text-slate-600"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
