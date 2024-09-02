import Link from "next/link";
import { navDataType } from "../types/types";
import {
  studentNavBarData,
  adminNavBarData,
  conductorNavBarData,
  notLoggedInData,
} from "../data/constants";

export default function NavData() {
  const role: string = "admin";
  let navData: Array<navDataType>;
  switch (role) {
    case "admin":
      navData = adminNavBarData;
      break;
    case "conductor":
      navData = conductorNavBarData;
      break;
    case "student":
      navData = studentNavBarData;
      break;
    default:
      navData = notLoggedInData;
  }
  return (
    <>
      <div>
        {navData.map(({ key, name, path }) => (
          <Link
            key={key}
            className="text-[#333333] text-lg font-semibold pr-5"
            href={path}
          >
            {name}
          </Link>
        ))}
      </div>
    </>
  );
}
