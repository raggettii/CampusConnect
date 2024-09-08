"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { buttonComponentType } from "../types/types";
import { btnSubmitClassName } from "../data/constants";
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
    className = btnSubmitClassName;
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
