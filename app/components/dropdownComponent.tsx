"use client";
import { useState } from "react";
import ButtonComponent from "./buttonComponent";
import { imageComponentType } from "../types/types";

export default function DropdownComponent({
  className,
}: {
  className?: string;
}) {
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  function dropdownToggler() {
    setIsDropdown(!isDropdown);
  }
  // jaha bhi isko load kar rahe hai waha se isme ek array
  // pass hogi jo ki bas .map kar degi  aur sabhi option ko
  // dikha degi

  //   yaha key ka kuch karna padega jab data aaiga
  // tab check karenge kaise kaam hoga
  type dropDownOptionsType = {
    text: string;
    id?: string;
  };
  const options: Array<dropDownOptionsType> = [
    { text: "Add Journey" },
    { text: "Update Journey" },
    { text: "Delete Journey" },
  ];
  const buttonImageData: imageComponentType = {
    className: " mt-4 ml-1",
    src: "/icons/editPen.svg",
    alt: "editTT",
    width: 20,
    height: 20,
  };
  return (
    <>
      <div>
        <ButtonComponent
          physicalButton={false}
          onClickHandler={dropdownToggler}
          imageComponent={buttonImageData}
        />
        {isDropdown && (
          <div className={`${className}`}>
            <div
              className={` flex flex-col bg-slate-50 p-2 rounded-md shadow-md  `}
            >
              {options.map((item) => (
                <div
                  onClick={() => {}}
                  key={Math.random()}
                  className="hover:cursor-pointer bg-slate-400 mt-1 text-slate-700 hover:text-slate-800 hover:bg-slate-300 font-semibold rounded-sm shadow-md"
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
