"use client";
import React, { useState } from "react";
import InputBox from "./inputBox";
import { modelComponentType } from "../types/types";
import ButtonComponent from "./buttonComponent";
import { addBusSchema } from "../zod/zodSchemas";
import toast from "react-hot-toast";

export default function ModalComponent({ heading }: modelComponentType) {
  const [busNumber, setBusNumber] = useState<number>();
  const [busRTOnumber, setBusRTOnumber] = useState("");
  const [conductorName, setConductorName] = useState("");
  const [conductorPhoneNumber, setConductorPhoneNumber] = useState("");
  const [isModelOpen, setIsModelOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const modelToggleHandler = () => {
    setIsModelOpen(!isModelOpen);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = {
      busNumber,
      busRTOnumber,
      conductorName,
      conductorPhoneNumber,
    };

    const validation = addBusSchema.safeParse(formData);
    if (!validation.success) {
      validation.error.errors.forEach((error) => toast.error(error.message));
      setIsSubmitting(false);
      return;
    }
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Form submitted successfully!");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      modelToggleHandler();
      setBusNumber(undefined);
      setBusRTOnumber("");
      setConductorName("");
      setConductorPhoneNumber("");
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <div className="flex justify-end text-lg font-semibold text-gray-600">
        <ButtonComponent
          text="+ Add Bus"
          physicalButton={false}
          onClickHandler={modelToggleHandler}
        />
      </div>
      {isModelOpen && (
        <div
          onClick={modelToggleHandler}
          className="z-20  fixed inset-0 bg-slate-800 bg-opacity-35"
        >
          <div className="  h-screen flex justify-center">
            <div className=" flex flex-col justify-center">
              <form
                onClick={(e) => e.stopPropagation()}
                onSubmit={handleSubmit}
                className="flex flex-col  p-10 bg-slate-400 border-2 border-white rounded-lg shadow-xl"
              >
                <h1 className="font-extrabold text-3xl text-center text-slate-900 ">
                  {heading}
                </h1>
                <InputBox
                  value={busNumber}
                  placeHolder="Serial Number of Bus"
                  headerText="Bus Number"
                  type="number"
                  required={true}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const inputValue = e.target.value;
                    // if(inputValue)
                    const inputValue2 = Number(inputValue);
                    if (!isNaN(inputValue2)) {
                      setBusNumber(inputValue2);
                    } else setBusNumber(undefined);
                  }}
                />
                <InputBox
                  value={busRTOnumber}
                  placeHolder="Enter RTO Number"
                  headerText="Bus RTO Number"
                  type="text"
                  required={true}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setBusRTOnumber(e.target.value)
                  }
                />
                <InputBox
                  value={conductorName}
                  placeHolder="Enter Name"
                  headerText="Bus Conductor"
                  type="text"
                  required={true}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setConductorName(e.target.value)
                  }
                />
                <InputBox
                  value={conductorPhoneNumber}
                  placeHolder="+91 1234567890"
                  headerText="Conductor Contact No."
                  type="tel"
                  required={true}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setConductorPhoneNumber(e.target.value)
                  }
                />
                <ButtonComponent
                  disabled={isSubmitting}
                  onClickHandler={() => {}}
                  physicalButton={true}
                  textOnPhysicalButton="Submit"
                ></ButtonComponent>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
