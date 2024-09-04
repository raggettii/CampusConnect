"use client";
import React from "react";

export default function ModelOpeningButton() {
  console.log("its a client component ButtonComponent ");
  return (
    <>
      <div className="bg-red-800">
        <button
          onClick={() => {
            console.log("Hello button clicked");
          }}
        >
          Hey a button
        </button>
      </div>
    </>
  );
}
