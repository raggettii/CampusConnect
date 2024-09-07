import { type } from "os";
import { inputBoxType } from "../types/types";

export default function InputBox({
  type,
  required,
  headerText,
  placeHolder,
  value,
  onChange,
}: inputBoxType) {
  return (
    <>
      <h2 className=" text-gray-700 text-lg font-semibold ">{headerText}</h2>
      <input
        className=" mb-2 rounded-lg p-2 text-gray-700 font-medium"
        value={value}
        type={type}
        required={required}
        placeholder={placeHolder}
        onChange={onChange}
      ></input>
    </>
  );
}
