"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { buttonComponentType } from "../types/types";
export default function ButtonComponent({
  onClickHandler,
  imageComponent,
  text,
  physicalButton,
  textOnPhysicalButton,
  disabled,
}: buttonComponentType) {
  let className = "";
  let textOnButton = "";
  if (physicalButton && textOnPhysicalButton) {
    textOnButton = textOnPhysicalButton;
    className =
      "disabled:bg-gray-300 disabled:text-gray-400 text-slate-900 font-bold border-2  bg-slate-500 rounded-lg p-2 hover:bg-slate-600";
  }
  return (
    <>
      <button
        disabled={disabled}
        className={className}
        onClick={onClickHandler}
        type="submit"
      >
        {text != undefined && <h2>{text}</h2>}
        {imageComponent != undefined && (
          <Image
            className={`${imageComponent?.className}`}
            src={`${imageComponent?.src}`}
            alt={`${imageComponent?.alt}`}
            width={imageComponent?.width}
            height={imageComponent?.height}
          />
        )}
        {textOnButton}
      </button>
    </>
  );
}
