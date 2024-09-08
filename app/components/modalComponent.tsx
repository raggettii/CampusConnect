"use client";
import React, { useState } from "react";
import InputBox from "./inputBox";
import { modelComponentType } from "../types/types";
import ButtonComponent from "./buttonComponent";
import { addBusSchema, bookTicketSchema } from "../zod/zodSchemas";
import toast from "react-hot-toast";
import DropdownComponent from "./dropdownComponent";
import {
  btnSubmitClassName,
  daysForBookingTicket,
  fromForBookingTicket,
  timeForBookingTicket,
  toForBookingTicket,
} from "../data/constants";
import TextSelectionDropDown from "./textSelectionDropdown";

export default function ModalComponent({
  heading,
  buttonHeadingForModal,
  formType,
}: modelComponentType) {
  const [busNumber, setBusNumber] = useState<number>();
  const [busRTOnumber, setBusRTOnumber] = useState("");
  const [conductorName, setConductorName] = useState("");
  const [conductorPhoneNumber, setConductorPhoneNumber] = useState("");
  const [isModelOpen, setIsModelOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  type StringMap = { [key: string]: string };

  const bookTicketSubmitData: StringMap = {};

  const modelToggleHandler = () => {
    setIsModelOpen(!isModelOpen);
  };
  //   const handleSubmitForBookingTicket = async () => {
  //     await new Promise((resolve) => setTimeout(resolve, 10000));
  //     console.log("handleSubmitForBookingTicket");
  //   };
  const handleSubmitForAddingBus = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
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

  const handleSubmitForBookingTicket = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = {
      selectedDay: bookTicketSubmitData["days"],
      selectedFrom: bookTicketSubmitData["from"],
      selectedTo: bookTicketSubmitData["to"],
      selectedTime: bookTicketSubmitData["time"],
    };
    console.log(formData);
    const validation = bookTicketSchema.safeParse(formData);
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
      Object.keys(bookTicketSubmitData).forEach(
        (key) => delete bookTicketSubmitData[key]
      );
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };
  function handleSelectOption({ key, value }: { key: string; value: string }) {
    bookTicketSubmitData[key] = value;
  }
  return (
    <>
      <div className="flex justify-end text-lg font-semibold text-gray-600">
        <ButtonComponent
          text={buttonHeadingForModal}
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
                onSubmit={
                  formType === "add-bus"
                    ? handleSubmitForAddingBus
                    : handleSubmitForBookingTicket
                }
                className="flex flex-col relative  p-10 bg-slate-400 border-2 border-white rounded-lg shadow-xl"
              >
                <h1 className="font-extrabold text-3xl text-center text-slate-900 ">
                  {heading}
                </h1>
                {formType === "add-bus" && (
                  <>
                    <InputBox
                      value={busNumber}
                      placeHolder="Serial Number of Bus"
                      headerText="Bus Number"
                      type="number"
                      required={true}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const inputValue = e.target.value;
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
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className={btnSubmitClassName}
                    >
                      Submit
                    </button>
                  </>
                )}
                {formType === "book-ticket" && (
                  <>
                    <div className="flex flex-col gap-2  ">
                      <TextSelectionDropDown
                        dropdownText="Select Day"
                        options={daysForBookingTicket}
                        onSelectOption={handleSelectOption}
                      />
                      <TextSelectionDropDown
                        dropdownText="Select From"
                        options={fromForBookingTicket}
                        onSelectOption={handleSelectOption}
                      />
                      <TextSelectionDropDown
                        dropdownText="Select To"
                        options={toForBookingTicket}
                        onSelectOption={handleSelectOption}
                      />
                      <TextSelectionDropDown
                        dropdownText="Select Time"
                        options={timeForBookingTicket}
                        onSelectOption={handleSelectOption}
                      />

                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className={btnSubmitClassName}
                      >
                        Book Ticket
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
